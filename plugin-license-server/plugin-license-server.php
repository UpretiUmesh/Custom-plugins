<?php
/*
Plugin Name: Term Enforcer License Server
Description: License key management server for Term Enforcer paid plugins.
Version: 1.0
Author: ITX UU
*/

if (!defined('ABSPATH')) exit;

define('PLS_VERSION', '1.0');
define('PLS_PATH', plugin_dir_path(__FILE__));
define('PLS_URL', plugin_dir_url(__FILE__));

require_once PLS_PATH . 'includes/class-license-server.php';
require_once PLS_PATH . 'includes/class-license-api.php';
require_once PLS_PATH . 'includes/class-license-admin.php';

register_activation_hook(__FILE__, ['PLS_License_Server', 'create_license_table']);

add_action('plugins_loaded', function () {
    new PLS_License_API();
    new PLS_License_Admin();
});
