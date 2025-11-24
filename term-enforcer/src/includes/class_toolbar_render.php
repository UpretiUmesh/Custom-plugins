<?php

namespace TermsEnforcer\Includes;

class Class_toolbar_render
{
    public function __construct()
    {
        add_action('wp_footer', [$this, 'render_toolbar']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_assets']);
    }

    public function enqueue_assets()
    {
        wp_enqueue_style('ae-frontend', TE_PLUGIN_URL . 'src/assets/css/frontend.css', [], TE_VERSION);
        wp_enqueue_script('ae-frontend', TE_PLUGIN_URL . 'src/assets/js/frontend.js', ['jquery'], TE_VERSION, true);

        // Localize script to pass PHP variables to JS
        wp_localize_script('ae-frontend', 'aeSettings', [
            'ajaxurl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('ae_nonce')
        ]);
    }

    public function render_toolbar()
    {
        $settings = get_option('ae_accessibility_settings');
        if (empty($settings['enable_toolbar'])) return;

        $is_premium = Class_License_Checker::is_pro();
        if ($is_premium) {
            Class_call_templates::render('frontend/accessibilityTemplate');
        }
    }
}
