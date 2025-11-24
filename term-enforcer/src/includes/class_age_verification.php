<?php

namespace TermsEnforcer\Includes;

if (!defined('ABSPATH')) {
    exit;
}

class Class_age_verification
{
    private $option_name = 'te_settings_age_verification';
    private $cookie_name = 'te_age_verified';
    private $cookie_expiry = 30 * DAY_IN_SECONDS; // 30 days

    public function __construct()
    {
        add_action('wp_enqueue_scripts', [$this, 'enqueue_assets']);
        add_action('wp_footer', [$this, 'render_age_popup']);
        add_action('wp_ajax_te_set_age_cookie', [$this, 'set_verification_cookie']);
        add_action('wp_ajax_nopriv_te_set_age_cookie', [$this, 'set_verification_cookie']);
    }

    public function enqueue_assets()
    {
        wp_enqueue_style(
            'te-age-style',
            TE_PLUGIN_URL . 'src/assets/css/frontend.css',
            array(),
            '1.3'
        );

        wp_enqueue_script(
            'te-age-script',
            TE_PLUGIN_URL . 'src/assets/js/ageModal.js',
            array('jquery'),
            '1.3',
            true
        );

        $options = get_option($this->option_name, []);

        wp_localize_script('te-age-script', 'te_age_settings', [
            'age_limit' => $options['age_limit'] ?? 18,
            'is_enabled' => !empty($options['enable_age_verification']),
            'cookie_name' => $this->cookie_name,
            'cookie_expiry' => $this->cookie_expiry,
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('te_age_verification_nonce')
        ]);
    }

    public function render_age_popup()
    {
        if ($this->is_age_verified()) return;

        $options = get_option($this->option_name, []);

        if (empty($options['enable_age_verification'])) return;

        $age_limit = $options['age_limit'] ?? 18;

        $is_pro = Class_License_Checker::is_pro();

        if ($is_pro) {
            Class_call_templates::render('frontend/ageVerification', [
                'age_limit' => $age_limit,
            ]);
        }
    }

    private function is_age_verified()
    {
        return isset($_COOKIE[$this->cookie_name]) && $_COOKIE[$this->cookie_name] === 'verified';
    }

    public static function set_verification_cookie()
    {
        if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'te_age_verification_nonce')) {
            wp_send_json_error('Invalid nonce');
        }

        $cookie_name = sanitize_text_field($_POST['cookie_name']);
        $expiry = intval($_POST['cookie_expiry']);

        setcookie(
            $cookie_name,
            'verified',
            time() + $expiry,
            COOKIEPATH,
            COOKIE_DOMAIN,
            is_ssl(),
            true
        );

        wp_send_json_success();
    }
}
