<?php

class PLS_License_API
{
    public function __construct()
    {
        add_action('rest_api_init', function () {
            register_rest_route('pls/v1', '/validate', [
                'methods' => 'POST',
                'callback' => [$this, 'validate_license'],
                'permission_callback' => '__return_true',
            ]);
        });
    }

    public function validate_license(WP_REST_Request $request)
    {
        $key = sanitize_text_field($request->get_param('license_key'));
        $domain = esc_url_raw($request->get_param('domain'));
        $plugin = sanitize_text_field($request->get_param('plugin'));

        if (!$key || !$domain) {
            return new WP_REST_Response(['status' => 'error', 'message' => 'Missing parameters'], 400);
        }

        $license = PLS_License_Server::get_license($key);

        if (!$license) {
            return ['status' => 'invalid', 'message' => 'License not found'];
        }

        if ($license->status !== 'valid') {
            return ['status' => 'invalid', 'message' => 'Inactive license'];
        }

        if ($license->expires && strtotime($license->expires) < time()) {
            return ['status' => 'expired', 'message' => 'License expired'];
        }

        if ($license->domain && $license->domain !== $domain) {
            return ['status' => 'invalid', 'message' => 'License bound to a different domain'];
        }

        if (empty($license->domain)) {
            PLS_License_Server::update_license_domain($license->id, $domain);
        }

        return [
            'status' => 'valid',
            'license_key' => $key,
            'plugin' => $plugin,
            'domain' => $domain,
            'expires' => $license->expires,
        ];
    }
}
