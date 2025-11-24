<?php
/**
 * Plugin Name: Terms Enforcer for WooCommerce
 * Description: Displays a modal for Terms & Conditions that users must scroll through before accepting.
 * Version: 1.0.0
 * Author: ITX
 * Text Domain: terms-enforcer
 * Domain Path: /languages
 */

if (!defined('ABSPATH')) {
    exit;
}

// Define constants
define('TE_PLUGIN_PATH', plugin_dir_path(__FILE__));
define('TE_PLUGIN_URL', plugin_dir_url(__FILE__));
define('TE_VERSION', '1.0.0');

// WooCommerce Dependency Check
add_action('plugins_loaded', 'te_check_woocommerce_dependency', 5);
function te_check_woocommerce_dependency() {
    if (!in_array('woocommerce/woocommerce.php', apply_filters('active_plugins', get_option('active_plugins')))) {
        add_action('admin_notices', function () {
            echo '<div class="notice notice-error"><p>';
            esc_html_e('Terms Enforcer for WooCommerce requires WooCommerce to be installed and active.', 'terms-enforcer');
            echo '</p></div>';
        });

        deactivate_plugins(plugin_basename(__FILE__));
    }
}

// Optional: Load Composer Autoloader if available
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}

// ✅ Load all class files from src/includes (no composer needed)
add_action('plugins_loaded', 'te_load_all_classes', 6);
function te_load_all_classes() {
    $includes_dir = TE_PLUGIN_PATH . 'src/includes/';
    foreach (glob($includes_dir . '*.php') as $file) {
        require_once $file;
    }
}

// Activation Hook
register_activation_hook(__FILE__, 'te_activate_plugin');
function te_activate_plugin() {
    if (class_exists('TermsEnforcer\Includes\Class_te_db_installer')) {
        \TermsEnforcer\Includes\Class_te_db_installer::install();
    } else {
        error_log('Class_te_db_installer not found on activation.');
    }
}

// Plugin Initialization
add_action('plugins_loaded', 'te_initialize_plugin', 20);
function te_initialize_plugin() {
    if (!defined('TE_PLUGIN_VERSION')) {
        define('TE_PLUGIN_VERSION', TE_VERSION);
    }

    if (class_exists('TermsEnforcer\Includes\Class_init')) {
        new \TermsEnforcer\Includes\Class_init();
    } else {
        error_log('Class_init not found.');
    }
}

// Disable WooCommerce Block Checkout
add_filter('woocommerce_use_block_checkout', '__return_false');
