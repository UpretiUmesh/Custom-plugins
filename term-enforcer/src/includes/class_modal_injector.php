<?php

/**
 * Class_modal_injector - Handles modal injection and terms acceptance logging
 * 
 * @package TermsEnforcer
 * @subpackage Includes
 */

namespace TermsEnforcer\Includes;

defined('ABSPATH') || exit;

class Class_modal_injector
{
    /**
     * Database table name for acceptance logs
     * @var string
     */
    private $table;

    /**
     * Class constructor - initializes hooks and database table reference
     */
    public function __construct()
    {
        global $wpdb;
        $this->table = $wpdb->prefix . 'te_acceptance_logs';

        $this->init_hooks();
    }

    /**
     * Initialize WordPress hooks
     */
    private function init_hooks()
    {
        // AJAX handlers for logging acceptance
        add_action('wp_ajax_te_log_acceptance', [$this, 'handle_ajax']);
        add_action('wp_ajax_nopriv_te_log_acceptance', [$this, 'handle_ajax']);

        // Frontend display hooks
        add_action('wp_footer', [$this, 'inject_modal'], 50);
        add_action('woocommerce_review_order_before_submit', [$this, 'render_checkbox']);

        // Shortcode
        add_shortcode('te_terms_modal', [$this, 'render_checkbox']);
    }

    /**
     * Inject modal HTML into the footer on checkout pages
     */
    public function inject_modal()
    {
        // Allow developers to modify the conditions for showing the modal
        $should_show_modal = apply_filters('te_should_show_modal', is_checkout());

        if (!$should_show_modal) {
            return;
        }

        $content = get_option('te_settings_advanced');
        $is_premium = Class_License_Checker::is_pro();

        $logo_id = $content['modal_logo'] ?? '';

        // Allow filtering of the logo ID
        $logo_id = apply_filters('te_modal_logo_id', $logo_id);
        $logo_url = $logo_id ? wp_get_attachment_url($logo_id) : '';

        if ($logo_id) {
            wp_get_attachment_image($logo_id, 'medium', false, ['class' => 'te-modal-logo']);
        }

        // Set default values with premium overrides
        $modal_data = [
            'modal_title'    => $is_premium ? ($content['modal_title'] ?? $content['modal_title']) : 'Protected by TermsGuard',
            'secondaryButton' => $is_premium ? ($content['button_text'] ?? $content['button_text']) : 'Accept Terms & Conditions',
            'primaryButton' =>  $is_premium ? ($content['buttons']['primary']['text'] ?? 'Close') : 'Close',
            'logo_url'      => $logo_url,
        ];

        // Allow complete override of modal data
        $modal_data = apply_filters('te_modal_data', $modal_data);

        // Get modal style option
        $options = get_option('te_settings_modal_layout');
        $style = $options['modal_layout'] ?? 'bootstrap';

        // Allow filtering of the style
        $style = apply_filters('te_modal_style', $style);

        // Determine which template to render based on style
        $template_map = [
            'bootstrap' => 'frontend/modalStyle1',
            'tailwind'  => 'frontend/modalStyle2',
            'minimal'   => 'frontend/modalStyle3',
            'dark'      => 'frontend/modalStyle4',
        ];

        // Allow adding/removing template styles
        $template_map = apply_filters('te_modal_templates', $template_map);

        $template = $template_map[$style] ?? 'frontend/modalStyle1';

        // Allow changing the template path
        $template = apply_filters('te_selected_modal_template', $template, $style);

        // Action before rendering modal
        do_action('te_before_modal_render', $modal_data, $style);

        Class_call_templates::render($template, $modal_data);

        // Action after rendering modal
        do_action('te_after_modal_render', $modal_data, $style);
    }

    /**
     * Render the terms acceptance checkbox on checkout
     */
    public function render_checkbox()
    {
        $options = get_option('te_settings_advanced', []);
        $is_premium = Class_License_Checker::is_pro();


        // Allow overriding the GDPR notice setting
        $enable_gdpr = apply_filters('te_enable_gdpr_notice', !empty($options['enable_gdpr_notice']));

        // if (!$enable_gdpr) {
        //     return;
        // }

        $gdpr_text = $options['enable_gdpr'] ?? __('I agree to the terms and conditions and privacy policy', 'terms-enforcer');

        // Allow filtering the GDPR text
        $gdpr_text = apply_filters('te_gdpr_text', wp_kses_post($gdpr_text));

        // Action before checkbox render
        do_action('te_before_checkbox_render');

        Class_call_templates::render('frontend/checkboxTemplate', [
            'gdpr_text'  => $is_premium ? ($gdpr_text ?? $gdpr_text) : 'I agree to the Privacy Policy and data handling terms.',
        ]);

        // Action after checkbox render
        do_action('te_after_checkbox_render', $gdpr_text);
    }

    /**
     * Handle AJAX request for terms acceptance logging
     */
    public function handle_ajax()
    {
        try {
            // Allow overriding the nonce check
            $skip_nonce_check = apply_filters('te_skip_nonce_check', false);

            if (!$skip_nonce_check) {
                check_ajax_referer('te_log_acceptance', 'security');
            }

            $accepted_gdpr = isset($_POST['gdpr']) && in_array($_POST['gdpr'], ['1', 'true', true], true);

            // Allow modifying the acceptance data before logging
            $accepted_gdpr = apply_filters('te_pre_log_gdpr', $accepted_gdpr, $_POST);

            // Action before logging
            do_action('te_before_log_acceptance', $accepted_gdpr, $_POST);

            $result = $this->log(true, $accepted_gdpr);

            if (false === $result) {
                throw new \Exception('Failed to log acceptance');
            }

            // Action after successful logging
            do_action('te_after_log_acceptance', $result, $accepted_gdpr, $_POST);

            wp_send_json_success(['message' => __('Acceptance logged', 'terms-enforcer')]);
        } catch (\Exception $e) {
            // Action on error
            do_action('te_log_acceptance_error', $e, $_POST);

            wp_send_json_error(['message' => $e->getMessage()]);
        }
    }

    /**
     * Log terms acceptance to the database
     * 
     * @param bool $accepted_terms Whether terms were accepted
     * @param bool $accepted_gdpr Whether GDPR terms were accepted
     * @return bool|int False on failure, insert ID on success
     */
    private function log($accepted_terms = false, $accepted_gdpr = false)
    {
        global $wpdb;

        // Sanitize input data
        $ip_address = filter_var($_SERVER['REMOTE_ADDR'] ?? '', FILTER_VALIDATE_IP) ?: '';
        $user_agent = sanitize_text_field($_SERVER['HTTP_USER_AGENT'] ?? '');
        $page_url = esc_url_raw($_SERVER['REQUEST_URI'] ?? '');

        $user_id = get_current_user_id();

        // Allow filtering of the user ID
        $user_id = apply_filters('te_log_user_id', $user_id);

        $log_data = [
            'user_id'        => $user_id,
            'ip_address'     => $ip_address,
            'accepted_terms' => $accepted_terms ? 1 : 0,
            'accepted_gdpr'  => $accepted_gdpr ? 1 : 0,
            'page_url'       => $page_url,
            'user_agent'     => $user_agent,
            'accepted_at'    => current_time('mysql')
        ];

        // Allow complete override of log data
        $log_data = apply_filters('te_log_data', $log_data);

        // Allow changing the table name
        $table = apply_filters('te_log_table_name', $this->table);

        $result = $wpdb->insert($table, $log_data);

        // Action after database insert
        do_action('te_after_log_insert', $result, $log_data);

        return $result;
    }
}
