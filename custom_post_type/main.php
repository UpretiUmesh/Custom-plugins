<?php
/*
* Plugin Name: custom post type plugin
* Author: umesh
*/
function my_custom_scripts() {
    wp_enqueue_script('custom-script', plugin_dir_url(__FILE__) . 'assets/js/custom.js', array('jquery'), '1.0.0', true);
    wp_localize_script( 'custom-script', 'myScriptData', array(
        'ajaxUrl'    => admin_url( 'admin-ajax.php' ),
        'someNonce'  => wp_create_nonce( 'my_nonce_action' ),
        'siteUrl'    => get_site_url(),
    ));
}
add_action('wp_enqueue_scripts', 'my_custom_scripts');

function create_custom_post_type() {
    $args = array(
        'labels' => array(
            'name' => 'Custom Posts',
            'singular_name' => 'Custom Post',
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'author', 'thumbnail', 'custom-fields'),
        'menu_position' => 5,
        'show_in_rest' => true,
    );
    register_post_type('custom_post', $args);
}
add_action('init', 'create_custom_post_type');

function shortcode_custom_post_type(){
    echo '
    <form id="custom-post-form" enctype="multipart/form-data">
    <label for="title">Title</label>
    <input type="text" name="title" id="title" required>

    <label for="content">Content</label>
    <textarea name="content" id="content" rows="5" required></textarea>

    <label for="featured_image">Featured Image</label>
    <input type="file" name="featured_image" id="featured_image" accept="image/*">

    <input type="submit" value="Submit Post">
</form>

<div id="form-message"></div>
';
}
add_shortcode('shortcode_frontend','shortcode_custom_post_type');

function handle_custom_post_ajax() {
    
    // Check for required fields
    if (!isset($_POST['title']) || !isset($_POST['content'])) {
        wp_send_json_error(array('message' => 'Title and content are required.'));
    }

    // Sanitize input
    $title = sanitize_text_field($_POST['title']);
    $content = sanitize_textarea_field($_POST['content']);
    // Create the new post
    $new_post = array(
        'post_title'   => $title,
        'post_content' => $content,
        'post_status'  => 'publish',
        'post_type'    => 'custom_post',
    );

    // Insert the post into the database
    $post_id = wp_insert_post($new_post);

    if (is_wp_error($post_id)) {
        wp_send_json_error(array('message' => 'Error submitting post.'));
    }

    // Check if there's an uploaded image and handle it
    if (!empty($_FILES['featured_image']['name'])) {
        require_once(ABSPATH . 'wp-admin/includes/file.php');
        require_once(ABSPATH . 'wp-admin/includes/image.php');
        require_once(ABSPATH . 'wp-admin/includes/media.php');

        $attachment_id = media_handle_upload('featured_image', $post_id);

        if (is_wp_error($attachment_id)) {
            wp_send_json_error(array('message' => 'Error uploading image.'));
        }

        // Set the uploaded image as the featured image for the post
        set_post_thumbnail($post_id, $attachment_id);
    }

    wp_send_json_success(array('message' => 'Your post has been submitted successfully!'));
}

add_action('wp_ajax_submit_custom_post', 'handle_custom_post_ajax');
add_action('wp_ajax_nopriv_submit_custom_post', 'handle_custom_post_ajax');