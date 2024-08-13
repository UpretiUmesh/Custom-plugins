<?php
/*
Plugin Name: Custom Event Plugin
Description: A plugin to create and manage events.
Version: 1.0
Author: Umesh
*/

class Main
{
    public function __construct()
    {
        add_action('wp_enqueue_scripts', array($this,'enqueue_event_scripts'));

        add_action('init', array($this, 'createCutstomEventPostType'));
        add_action('init', array($this, 'createEventTaxonomy'));
        add_action('add_meta_boxes', array($this, 'eventCityMetaBox'));
        add_action('save_post', array($this, 'saveEventCityMetaBox'));
        add_shortcode('event_form', array($this, 'eventSubmissionForm'));
        add_action('template_redirect', array($this, 'handleEventSubmission'));
        add_shortcode('display_events', array($this, 'displayEventTable'));
        add_action('wp_ajax_filter_events', array($this,'filter_events'));
        add_action('wp_ajax_nopriv_filter_events', array($this,'filter_events'));
    }
    function enqueue_event_scripts()
    {
        wp_enqueue_style('bootstrap-css', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
        wp_enqueue_script('bootstrap-js', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', array('jquery'), null, true);
        wp_enqueue_script('custom-event-js', plugin_dir_url(__FILE__) . 'assets/js/custom.js', array('jquery'), null, true);
        wp_localize_script( 'custom-event-js', 'my_ajax_object', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );

    }
    // Register Custom Post Type
    public function createCutstomEventPostType()
    {
        $labels = array(
            'name' => 'Events',
            'singular_name' => 'Event',
            'menu_name' => 'Events',
            'name_admin_bar' => 'Event',
            'add_new' => 'Add New',
            'add_new_item' => 'Add New Event',
            'new_item' => 'New Event',
            'edit_item' => 'Edit Event',
            'view_item' => 'View Event',
            'all_items' => 'All Events',
            'search_items' => 'Search Events',
            'parent_item_colon' => 'Parent Events:',
            'not_found' => 'No events found.',
            'not_found_in_trash' => 'No events found in Trash.'
        );

        $args = array(
            'labels' => $labels,
            'public' => true,
            'publicly_queryable' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'query_var' => true,
            'rewrite' => array('slug' => 'event'),
            'capability_type' => 'post',
            'has_archive' => true,
            'hierarchical' => false,
            'menu_position' => null,
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt')
        );

        register_post_type('event', $args);
    }

    public function createEventTaxonomy()
    {
        $labels = array(
            'name' => 'Event Categories',
            'singular_name' => 'Event Category',
            'search_items' => 'Search Event Categories',
            'all_items' => 'All Event Categories',
            'parent_item' => 'Parent Event Category',
            'parent_item_colon' => 'Parent Event Category:',
            'edit_item' => 'Edit Event Category',
            'update_item' => 'Update Event Category',
            'add_new_item' => 'Add New Event Category',
            'new_item_name' => 'New Event Category Name',
            'menu_name' => 'Event Categories',
        );

        $args = array(
            'hierarchical' => true,
            'labels' => $labels,
            'show_ui' => true,
            'show_admin_column' => true,
            'query_var' => true,
            'rewrite' => array('slug' => 'event-category'),
        );

        register_taxonomy('event_category', array('event'), $args);
    }
    public function eventCityMetaBox()
    {
        add_meta_box(
            'event_city',
            'Event City',
            array($this, 'eventCityCallBackFucntion'),
            'event',
            'side'
        );
    }
    public function eventCityCallBackFucntion($post)
    {
        wp_nonce_field('save_event_city', 'event_city_nonce');
        $value = get_post_meta($post->ID, '_event_city', true);
        echo '<label for="event_city">City</label>';
        echo '<input type="text" id="event_city" name="event_city" value="' . esc_attr($value) . '" size="25" />';
    }
    public function saveEventCityMetaBox($post_id)
    {
        if (!isset($_POST['event_city_nonce'])) {
            return;
        }
        if (!wp_verify_nonce($_POST['event_city_nonce'], 'save_event_city')) {
            return;
        }
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }
        if (!isset($_POST['event_city'])) {
            return;
        }
        $event_city = sanitize_text_field($_POST['event_city']);
        update_post_meta($post_id, '_event_city', $event_city);
    }

    public function eventSubmissionForm()
    {
        ob_start();
        ?>
        <form id="event-submission-form" method="post" enctype="multipart/form-data">
            <label for="event_title">Title</label>
            <input type="text" id="event_title" name="event_title" required><br>

            <label for="event_description">Description</label>
            <textarea id="event_description" name="event_description" required></textarea><br>

            <label for="event_category">Event List</label>
            <?php
            $categories = get_terms(
                array(
                    'taxonomy' => 'event_category',
                    'hide_empty' => false,
                )
            );
            ?>
            <select id="event_category" name="event_category" required>
                <option value="">Select Category</option>
                <?php
                foreach ($categories as $category) {
                    echo '<option value="' . $category->term_id . '">' . $category->name . '</option>';
                }
                ?>
            </select><br>

            <label for="event_city">Event City</label>
            <input type="text" id="event_city" name="event_city" required><br>

            <label for="event_image">Upload Image</label>
            <input type="file" id="event_image" name="event_image" required><br>

            <input type="submit" name="submit_event" value="Submit Event">
        </form>
        <?php
        return ob_get_clean();
    }
    public function handleEventSubmission()
    {
        if (isset($_POST['submit_event'])) {
            $title = sanitize_text_field($_POST['event_title']);
            $description = sanitize_textarea_field($_POST['event_description']);
            $category = intval($_POST['event_category']);
            $city = sanitize_text_field($_POST['event_city']);

            $new_post = array(
                'post_title' => $title,
                'post_content' => $description,
                'post_status' => 'publish',
                'post_type' => 'event',
                'meta_input' => array(
                    '_event_city' => $city,
                ),
            );

            $post_id = wp_insert_post($new_post);

            if ($post_id && !is_wp_error($post_id)) {
                wp_set_post_terms($post_id, array($category), 'event_category');

                if (!function_exists('wp_handle_upload')) {
                    require_once (ABSPATH . 'wp-admin/includes/file.php');
                }

                $uploaded_file = wp_handle_upload($_FILES['event_image'], array('test_form' => false));

                if (isset($uploaded_file['file'])) {
                    $file_name = $uploaded_file['file'];
                    $file_type = wp_check_filetype(basename($file_name), null);

                    $attachment = array(
                        'post_mime_type' => $file_type['type'],
                        'post_title' => sanitize_file_name(basename($file_name)),
                        'post_content' => '',
                        'post_status' => 'inherit',
                    );

                    $attach_id = wp_insert_attachment($attachment, $file_name, $post_id);
                    require_once (ABSPATH . 'wp-admin/includes/image.php');
                    $attach_data = wp_generate_attachment_metadata($attach_id, $file_name);
                    wp_update_attachment_metadata($attach_id, $attach_data);
                    set_post_thumbnail($post_id, $attach_id);
                }
            }
        }
    }

    public function displayEventTable()
    {
        ob_start();
        ?>
        <form id="event-filter-form" class="form-inline mb-4">
            <div class="form-group mr-3">
                <label for="filter_city" class="mr-2">Filter by City:</label>
                <select id="filter_city" name="filter_city" class="form-control">
                    <option value="">All Cities</option>
                    <?php
                    $cities = get_posts(
                        array(
                            'post_type' => 'event',
                            'posts_per_page' => -1,
                            'meta_key' => '_event_city',
                            'fields' => 'ids'
                        )
                    );
                    $unique_cities = array_unique(array_map(function ($post_id) {
                        return get_post_meta($post_id, '_event_city', true);
                    }, $cities));
                    foreach ($unique_cities as $city) {
                        echo '<option value="' . esc_attr($city) . '">' . esc_html($city) . '</option>';
                    }
                    ?>
                </select>
            </div>

            <div class="form-group mr-3">
                <label for="filter_category" class="mr-2">Filter by Category:</label>
                <select id="filter_category" name="filter_category" class="form-control">
                    <option value="">All Categories</option>
                    <?php
                    $categories = get_terms(
                        array(
                            'taxonomy' => 'event_category',
                            'hide_empty' => false,
                        )
                    );
                    foreach ($categories as $category) {
                        echo '<option value="' . esc_attr($category->term_id) . '">' . esc_html($category->name) . '</option>';
                    }
                    ?>
                </select>
            </div>

            <button type="submit" class="btn btn-primary">Filter</button>
        </form>

        <div id="event-table">
            <?php $this->display_event_table_content(); ?>
        </div>
        <?php
        return ob_get_clean();
    }


    // AJAX handler for filtering events
    public function filter_events()
    {
        $city = isset($_GET['city']) ? sanitize_text_field($_GET['city']) : '';
        $category = isset($_GET['category']) ? intval($_GET['category']) : '';

        $this->display_event_table_content($city, $category);
        wp_die();
    }

    public function display_event_table_content($city = '', $category = '')
    {
        $args = array(
            'post_type' => 'event',
            'posts_per_page' => -1,
        );

        if (!empty($city)) {
            $args['meta_query'] = array(
                array(
                    'key' => '_event_city',
                    'value' => $city,
                    'compare' => 'LIKE'
                )
            );
        }

        if (!empty($category)) {
            $args['tax_query'] = array(
                array(
                    'taxonomy' => 'event_category',
                    'field' => 'term_id',
                    'terms' => $category
                )
            );
        }

        $events = new WP_Query($args);

        if ($events->have_posts()) {
            echo '<table class="table table-striped">';
            echo '<thead><tr><th>Title</th><th>Description</th><th>City</th><th>Category</th><th>Image</th></tr></thead>';
            echo '<tbody>';

            while ($events->have_posts()) {
                $events->the_post();
                $city = get_post_meta(get_the_ID(), '_event_city', true);
                $categories = wp_get_post_terms(get_the_ID(), 'event_category');
                $category_names = wp_list_pluck($categories, 'name');
                $image = get_the_post_thumbnail(get_the_ID(), 'thumbnail');

                echo '<tr>';
                echo '<td>' . get_the_title() . '</td>';
                echo '<td>' . get_the_content() . '</td>';
                echo '<td>' . esc_html($city) . '</td>';
                echo '<td>' . esc_html(implode(', ', $category_names)) . '</td>';
                echo '<td>' . $image . '</td>';
                echo '</tr>';
            }

            echo '</tbody></table>';
            wp_reset_postdata();
        } else {
            echo 'No events found.';
        }
    }


}

$runPluginClass = new Main();