<?php
/*
Plugin Name: WP Property Calculator
Description: A plugin to manage properties, seasons, rates, and calculate property prices based on seasons.
Version: 1.0
Author: Glocify
*/

defined('ABSPATH') || exit;

// Autoload dependencies
require_once __DIR__ . '/vendor/autoload.php';

// Define plugin constants
define('WPCALC_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('WPCALC_PLUGIN_URL', plugin_dir_url(__FILE__));
define('WPCALC_PLUGIN_BASE', plugin_basename(__FILE__));

// Register activation hook
register_activation_hook(__FILE__, ['WPPropertyCalculator\Includes\CalculatorDB', 'activate']);

// Initialize the plugin
add_action('plugins_loaded', function() {
    new WPPropertyCalculator\Includes\Initializer();
});

