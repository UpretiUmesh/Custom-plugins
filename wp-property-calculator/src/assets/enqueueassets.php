<?php

namespace WPPropertyCalculator\Assets;

class Enqueueassets
{
    public function __construct()
    {
        add_action('admin_enqueue_scripts', array($this, 'wp_property_calculator_admin_enqueue_scripts'));
        add_action('wp_enqueue_scripts', array($this, 'wp_property_calculator_enqueue_assets'));
    }
    function wp_property_calculator_admin_enqueue_scripts($hook_suffix)
    {
        if (strpos($hook_suffix, 'property-calculator') !== false) {
            wp_enqueue_script('jquery-ui-datepicker');
            wp_enqueue_style('jquery-ui-datepicker-style', 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css');
            wp_enqueue_style('hazeways-property-admin-css', plugin_dir_url(__FILE__), 'css/style.css');
            wp_enqueue_script('hazeways-property-admin-js', plugin_dir_url(__FILE__) . 'js/custom.js', array('jquery', 'jquery-ui-datepicker'), null, true);
        }
    }
    function wp_property_calculator_enqueue_assets()
    {
        wp_enqueue_style('hazeways-property-css', plugin_dir_url(__FILE__) . 'css/style.css');
        wp_enqueue_script('hazeways-property-js', plugin_dir_url(__FILE__) . 'js/custom.js', array('jquery', 'jquery-ui-datepicker'), null, true);
        wp_enqueue_style('bootstrap4', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css');
        wp_enqueue_script('boot1', 'https://code.jquery.com/jquery-3.3.1.slim.min.js', array('jquery'), '', true);
        wp_enqueue_script('boot2', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js', array('jquery'), '', true);
        wp_enqueue_script('boot3', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js', array('jquery'), '', true);
    }
}
