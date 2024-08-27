<?php
/*
Plugin Name: Sample Product Plugin
Description: Adds a Free Sample button to product pages.
Version: 1.0
Author: Your Name
*/

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Include the main functionality
require_once plugin_dir_path(__FILE__) . 'includes/sample-product-functions.php';

function enqueue_sample_product_scripts() {
    // Ensure jQuery is loaded
    wp_enqueue_script('jquery');

    // Enqueue your custom script
    wp_enqueue_script(
        'sample-product-script', 
        plugins_url('/assets/js/sample-product.js', __FILE__), 
        array('jquery'), 
        '1.0', 
        true
    );

    // Localize script to pass data to JavaScript
    wp_localize_script('sample-product-script', 'sampleProductData', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'product_id' => get_the_ID(),
        'nonce' => wp_create_nonce('add_sample_nonce')
    ));

    wp_enqueue_style('bootstrap-css', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
    wp_enqueue_script('bootstrap-js', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', array('jquery'), '4.3.1', true);
}
add_action('wp_enqueue_scripts', 'enqueue_sample_product_scripts');

// Load custom WooCommerce template
function load_custom_single_product_template($template) {
    if (is_product()) {
        $plugin_template = plugin_dir_path(__FILE__) . 'templates/single-product/sample-product-template.php';
        if (file_exists($plugin_template)) {
            return $plugin_template;
        }
    }
    return $template;
}
add_filter('template_include', 'load_custom_single_product_template');
