<?php

namespace TermsEnforcer\Includes;

if (!defined('ABSPATH')) {
    exit;
}

class Class_License_Checker
{
    const API_ENDPOINT = 'https://itxwebsolutions.com/wp-json/pls/v1/validate';
    const OPTION_NAME = 'te_pro_license_key';
    private static $cached_status = null;

    public function __construct()
    {
        add_action('admin_menu', [$this, 'add_license_page']);
        add_action('admin_init', [$this, 'register_license_setting']);
    }

    public static function define_pro_constant()
    {
        if (!defined('TE_PREMIUM_VERSION')) {
            define('TE_PREMIUM_VERSION', self::is_pro());
        }
    }

    public function add_license_page()
    {
        add_submenu_page(
            'te-settings',
            __('License Activation', 'terms-enforcer'),
            __('License Activation', 'terms-enforcer'),
            'manage_options',
            'te-license',
            [$this, 'render_license_page']
        );
    }

    public function register_license_setting()
    {
        register_setting('te_license_group', self::OPTION_NAME, [
            'type' => 'string',
            'sanitize_callback' => 'sanitize_text_field',
            'default' => '',
        ]);
    }

    public function render_license_page()
    {
        $key = get_option(self::OPTION_NAME, '');
        $status = self::get_license_status($key);
        $template_data = [
            'key' => $key,
            'status' => $status,
            'option_name' => self::OPTION_NAME
        ];

        Class_call_templates::render('admin/licensesKeyTemplate', $template_data);
    }


    /**
     * Check if the current plugin is in PRO mode.
     */
    public static function is_pro(): bool
    {
        $key = get_option(self::OPTION_NAME, '');
        $status = self::get_license_status($key);
        return $status['status'] === 'valid';
    }

    /**
     * Cached license status check
     */
    private static function get_license_status($key): array
    {
        if (self::$cached_status !== null) {
            return self::$cached_status;
        }

        self::$cached_status = self::remote_check($key);
        return self::$cached_status;
    }

    /**
     * Actual API validation call
     */
    private static function remote_check($key): array
    {
        if (!$key) return ['status' => 'empty', 'message' => __('No license entered.', 'terms-enforcer')];

        $response = wp_remote_post(self::API_ENDPOINT, [
            'timeout' => 10,
            'body' => [
                'license_key' => $key,
                'domain' => home_url(),
                'plugin' => 'terms-enforcer',
            ],
        ]);

        if (is_wp_error($response)) {
            return ['status' => 'error', 'message' => $response->get_error_message()];
        }

        $body = json_decode(wp_remote_retrieve_body($response), true);
        return $body ?: ['status' => 'invalid', 'message' => __('Invalid response.', 'terms-enforcer')];
    }
}
