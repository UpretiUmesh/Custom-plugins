<?php
/*
Plugin Name: Escapia Search API Plugin
Description: Escapia api property search plugin.
Version: 1.0
Author: admin
*/

define("DIR_PATH", plugin_dir_path(__FILE__));
define('ESCAPIA_PLUGIN_URL', plugin_dir_url(__FILE__));
define('ESCAPIA_STYLE_PATH', 'assets/css/style.css');
define('ESCAPIA_SCRIPT_PATH', 'assets/js/custom_script.js');


require_once DIR_PATH . 'includes/shortcodes.php';
require_once DIR_PATH . 'includes/property_list.php';
require_once DIR_PATH . 'includes/single-property.php';
require_once DIR_PATH . 'includes/init.php';
require_once DIR_PATH . 'includes/getTemplates.php';


add_action('plugins_loaded', function () {
    new Init();
});
