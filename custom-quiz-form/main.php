<?php
/*
Plugin Name: Multi Quiz From
Description: Create Manageable Quiz From Admin
Version: 1.0
Author: CreativeTech
*/

define("QUIZE_DIR_PATH", plugin_dir_path(__FILE__));
define('QUIZ_PLUGIN_URL', plugin_dir_url(__FILE__));

/* Enqueue Bootstrap */

require_once QUIZE_DIR_PATH . '/src/includes/init.php';

add_action('plugins_loaded', function () {
    new Init();
});
