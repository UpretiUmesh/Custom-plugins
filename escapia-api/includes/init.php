<?php

use PropertyList;
use SingleProperty;
use FrontEndFilterForm;

class Init
{
    public function __construct()
    {
        add_action('wp_enqueue_scripts', [$this, 'escapia_files']);
        add_action('init', [$this, 'add_cors_headers']);
        add_filter('allowed_http_origins', [$this, 'add_allowed_origins']);
        $this->init();
    }
    function escapia_files()
    {
        wp_enqueue_style('escapia-style', ESCAPIA_PLUGIN_URL . ESCAPIA_STYLE_PATH);
        wp_enqueue_script('escapia-js', ESCAPIA_PLUGIN_URL . ESCAPIA_STYLE_PATH, array('jquery'), '0.2', true);

        $script_data_array = array(
            'ajax_url' => admin_url('admin-ajax.php'),
        );
        wp_localize_script('escapia-js', 'my_ajax_object', $script_data_array);

        wp_enqueue_style(
            'bootstrap-css',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css',
            array(),
            '5.3.0',
            'all'
        );

        // Enqueue Bootstrap JS
        wp_enqueue_script(
            'bootstrap-js',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js',
            array('jquery'),
            '5.3.0',
            true
        );
    }
    function add_cors_headers()
    {
        if (strpos($_SERVER['REQUEST_URI'], 'admin-ajax.php') !== false) {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
            header('Access-Control-Allow-Credentials: true');
        }
    }
    function add_allowed_origins($origins)
    {
        $origins[] = 'https://tidestopinestg.wpenginepowered.com/';
        return $origins;
    }

    function init()
    {
        new PropertyList();
        new SingleProperty();
        new FrontEndFilterForm();
    }
}
