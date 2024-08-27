<?php

class sampleBackendSettings
{


    /**
     * Initialize settings class.
     */
    public function __construct()
    {
        add_action('admin_menu', [$this, 'add_settings_page']);
        add_action('admin_init', [$this, 'register_settings']);
        add_action('wp_head', array($this, 'output_custom_css'));
    }
    

    /**
     * Add settings page to the WordPress admin menu.
     */
    public function add_settings_page()
    {
        add_menu_page(
            __('Sample Product Plugin Settings', 'spp'),
            __('Sample Product Settings', 'spp'),
            'manage_options',
            'spp-settings',
            [$this, 'render_settings_page'],
            'dashicons-admin-generic'
        );
    }

    /**
     * Register the settings.
     */
    public function register_settings()
    {
        $settings = [
            'spp_enable_product_type' => [
                'label' => __('Product Type', 'spp'),
                'type' => 'select',
                'options' => [
                    'simple' => __('Simple', 'spp'),
                    'variable' => __('Variable', 'spp')
                ],
                'default' => 'Simple',
                'description' => __('Display Product Type.', 'spp')
            ],
            'spp_custom_button_text_before' => [
                'label' => __('Custom Button Text Before Add Product', 'spp'),
                'type' => 'text',
                'default' => __('Get Free Sample', 'spp'),
                'description' => __('Set the custom text for the "Get Free Sample" button.', 'spp')
            ],
            'spp_custom_button_text_after' => [
                'label' => __('Custom Button Text After Add Product', 'spp'),
                'type' => 'text',
                'default' => __('Sample Added', 'spp'),
                'description' => __('Set the custom text for the "Get Free Sample" button.', 'spp')
            ],
            'spp_custom_css' => [
                'label' => __('Custom CSS', 'spp'),
                'type' => 'textarea',
                'default' => '',
                'description' => __('Add your custom CSS here. This CSS will be applied site-wide.', 'spp')
            ],
            'spp_view_modal_button' => [
                'label' => __('Custom Cart Button Text', 'spp'),
                'type' => 'text',
                'default' => '',
                'description' => __('Set the custom text for the "View Sample Cart" button.', 'spp')
            ],
            'spp_modal_head_text' => [
                'label' => __('Custom Cart Heading', 'spp'),
                'type' => 'text',
                'default' => '',
                'description' => __('Change the custom cart heading.', 'spp')
            ],
            'spp_modal_body_text' => [
                'label' => __('Custom Cart Body Text', 'spp'),
                'type' => 'text',
                'default' => '',
                'description' => __('Change the custom cart body text.', 'spp')
            ],            

        ];

        register_setting('spp_settings_group', 'spp_plugin_settings');

        add_settings_section(
            'spp_general_section',
            __('General Settings', 'spp'),
            null,
            'spp-settings'
        );

        foreach ($settings as $key => $setting) {
            add_settings_field(
                $key,
                $setting['label'],
                [$this, 'render_field'],
                'spp-settings',
                'spp_general_section',
                ['key' => $key, 'setting' => $setting]
            );
        }
    }

    /**
     * Render the settings field based on its type.
     */
    public function render_field($args)
    {
        $options = get_option('spp_plugin_settings');
        $key = $args['key'];
        $setting = $args['setting'];
        $value = $options[$key] ?? $setting['default'];

        switch ($setting['type']) {
            case 'text':
                echo "<input type='text' name='spp_plugin_settings[$key]' value='" . esc_attr($value) . "' class='regular-text'>";
                break;
            case 'textarea':
                echo "<textarea name='spp_plugin_settings[$key]' rows='5' cols='50' class='large-text'>" . esc_textarea($value) . "</textarea>";
                break;
            case 'select':
                echo "<select name='spp_plugin_settings[$key]'>";
                foreach ($setting['options'] as $option_value => $option_label) {
                    echo "<option value='" . esc_attr($option_value) . "' " . selected($value, $option_value, false) . ">" . esc_html($option_label) . "</option>";
                }
                echo "</select>";
                break;
        }

        if (isset($setting['description'])) {
            echo "<p class='description'>" . esc_html($setting['description']) . "</p>";
        }
    }
    /**
     * Render the settings page.
     */
    public function render_settings_page()
    {
        ?>
        <div class="wrap">
            <h1><?php _e('Sample Product Plugin Settings', 'spp'); ?></h1>
            <form method="post" action="options.php">
                <?php
                settings_fields('spp_settings_group');
                do_settings_sections('spp-settings');
                submit_button();
                ?>
            </form>
        </div>
        <?php
    }

    /**
     * Output the custom CSS in the head section.
     */
    public function output_custom_css() {
        $custom_css = get_option('spp_plugin_settings', '');

        if (!empty($custom_css)) {
            echo '<style type="text/css">' . wp_strip_all_tags($custom_css['spp_custom_css']) . '</style>';
        }
    }
}
