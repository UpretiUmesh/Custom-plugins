<?php

namespace TermsEnforcer\Includes;

class Class_modal_builder
{
    const CONTENT_OPTION = 'modal_builder_content';

    public function __construct()
    {
        // add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_assets'));
        add_action('wp_ajax_save_modal_styles', array($this, 'save_modal_styles'));
        add_action('wp_ajax_save_modal_content', array($this, 'save_modal_content'));
    }

    public function activate()
    {
        // Set default styles on activation
        $default_styles = array(
            'position' => array(
                'x' => 'center',
                'y' => 'center'
            ),
            'size' => array(
                'width' => '600px',
                'height' => '400px'
            ),
            'colors' => array(
                'background' => '#ffffff',
                'text' => '#333333',
                'button_bg' => '#21759b',
                'button_text' => '#ffffff'
            ),
            'border' => array(
                'radius' => '5px',
                'width' => '1px',
                'color' => '#dddddd'
            ),
            'shadow' => array(
                'enabled' => true,
                'color' => 'rgba(0,0,0,0.2)',
                'blur' => '10px',
                'spread' => '0px'
            )
        );

        $default_content = array(
            'title' => 'Modal Title',
            'body' => '<p>This is your modal content. You can drag me around and resize me!</p><p>Customize my appearance using the controls on the left.</p>',
            'buttons' => array(
                'primary' => array(
                    'text' => 'Save',
                    'action' => ''
                ),
                'secondary' => array(
                    'text' => 'Close',
                    'action' => ''
                )
            )
        );

        update_option('modal_builder_styles', $default_styles);
        update_option('modal_builder_content', $default_content);
    }

    public function deactivate()
    {
        // Clean up if needed
    }

    public function add_admin_menu()
    {
        add_submenu_page(
            'te-settings',
            'Modal Builder',
            'Modal Builder',
            'manage_options',
            'modal-builder',
            array($this, 'render_admin_page'),
            'dashicons-welcome-widgets-menus',
            80
        );
    }

    public function enqueue_admin_assets($hook)
    {
        wp_enqueue_style('modal-builder-admin', TE_PLUGIN_URL . 'src/assets/css/admin.css', array(), TE_PLUGIN_URL);
        wp_enqueue_script('interact-js', 'https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js', array(), null, true);
        wp_enqueue_script('modal-builder-admin', TE_PLUGIN_URL . 'src/assets/js/admin.js', array('jquery', 'wp-color-picker', 'interact-js'), TE_PLUGIN_URL, true);
        wp_enqueue_style('wp-color-picker');

        wp_localize_script('modal-builder-admin', 'modalBuilderVars', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('modal_builder_nonce'),
            'currentStyles' => get_option('modal_builder_styles'),
            'currentContent' => get_option('modal_builder_content')
        ));
    }

    /**
     * Render Modal Builder admin interface
     */
    public function render_admin_page()
    {
        $content = get_option(self::CONTENT_OPTION);

        Class_call_templates::render('admin/modalHeading');
        Class_call_templates::render('admin/modalSidebar', [
            'title'     => $content['title'] ?? '',
            'body'      => $content['body'] ?? '',
            'primary'   => $content['buttons']['primary']['text'] ?? '',
            'secondary' => $content['buttons']['secondary']['text'] ?? '',
        ]);
        Class_call_templates::render('admin/previewModal', [
            'title'     => $content['title'] ?? '',
            'body'      => $content['body'] ?? '',
            'primary'   => $content['buttons']['primary']['text'] ?? '',
            'secondary' => $content['buttons']['secondary']['text'] ?? '',
        ]);
        Class_call_templates::render('admin/modalFooter');
    }

    /**
     * Handle AJAX saving of modal styles
     */
    public function save_modal_styles()
    {
        check_ajax_referer('modal_builder_nonce', 'nonce');

        if (!current_user_can('manage_options')) {
            wp_send_json_error(__('Unauthorized', 'terms-enforcer'));
        }

        $styles = [
            'position' => [
                'x' => sanitize_text_field($_POST['positionX'] ?? ''),
                'y' => sanitize_text_field($_POST['positionY'] ?? ''),
            ],
            'size' => [
                'width'  => sanitize_text_field($_POST['width'] ?? ''),
                'height' => sanitize_text_field($_POST['height'] ?? ''),
            ],
            'colors' => [
                'background'   => sanitize_hex_color($_POST['bgColor'] ?? ''),
                'text'         => sanitize_hex_color($_POST['textColor'] ?? ''),
                'button_bg'    => sanitize_hex_color($_POST['buttonBgColor'] ?? ''),
                'button_text'  => sanitize_hex_color($_POST['buttonTextColor'] ?? ''),
            ],
            'border' => [
                'radius' => sanitize_text_field($_POST['borderRadius'] ?? ''),
                'color'  => sanitize_hex_color($_POST['borderColor'] ?? ''),
            ],
        ];

        update_option(self::STYLES_OPTION, $styles);
        wp_send_json_success(__('Styles saved successfully.', 'terms-enforcer'));
    }

    /**
     * Handle AJAX saving of modal content
     */
    public function save_modal_content()
    {
        check_ajax_referer('modal_builder_nonce', 'nonce');

        if (!current_user_can('manage_options')) {
            wp_send_json_error(__('Unauthorized', 'terms-enforcer'));
        }

        $content = [
            'title' => sanitize_text_field($_POST['modalTitle'] ?? ''),
            'body'  => wp_kses_post($_POST['content'] ?? ''),
            'buttons' => [
                'primary' => [
                    'text'   => sanitize_text_field($_POST['primaryBtnText'] ?? ''),
                    'action' => '', // Reserved for future use
                ],
                'secondary' => [
                    'text'   => sanitize_text_field($_POST['secondaryBtnText'] ?? ''),
                    'action' => '',
                ]
            ]
        ];

        update_option(self::CONTENT_OPTION, $content);
        wp_send_json_success(__('Content saved successfully.', 'terms-enforcer'));
    }
}
