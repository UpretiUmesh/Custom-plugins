<?php

class PLS_License_Admin
{
    public function __construct()
    {
        add_action('admin_menu', [$this, 'add_menu']);
        add_action('admin_post_pls_add_license', [$this, 'handle_license_submission']);
    }

    public function add_menu()
    {
        add_menu_page('Licenses', 'License Keys', 'manage_options', 'pls-licenses', [$this, 'render_page'], 'dashicons-admin-network');
    }

    public function render_page()
    {
        ?>
        <div class="wrap">
            <h1>Manage License Keys</h1>
            <form method="post" action="<?php echo admin_url('admin-post.php'); ?>">
                <input type="hidden" name="action" value="pls_add_license">
                <?php wp_nonce_field('pls_add_license'); ?>
                <table class="form-table">
                    <tr><th>License Key</th><td><input name="license_key" class="regular-text" required></td></tr>
                    <tr><th>Plugin Name</th><td><input name="plugin" class="regular-text" required></td></tr>
                    <tr><th>Expires (YYYY-MM-DD)</th><td><input name="expires" class="regular-text"></td></tr>
                </table>
                <?php submit_button('Add License'); ?>
            </form>
        </div>
        <?php
    }

    public function handle_license_submission()
    {
        check_admin_referer('pls_add_license');
        $key = sanitize_text_field($_POST['license_key']);
        $plugin = sanitize_text_field($_POST['plugin']);
        $expires = sanitize_text_field($_POST['expires']);

        PLS_License_Server::insert_license($key, $plugin, $expires);

        wp_redirect(admin_url('admin.php?page=pls-licenses'));
        exit;
    }
}
