<?php
/**
 * Plugin Name: WP Custom MultiForm
 * Description: A plugin to create a multi-step form.
 * Version: 1.0
 * Author: umesh
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Include the main class file
include_once plugin_dir_path(__FILE__) . 'includes/init.php';

// Initialize the plugin
function msf_init() {
    $msf = new Init();
}
add_action('plugins_loaded', 'msf_init');
