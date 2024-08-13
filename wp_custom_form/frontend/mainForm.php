<?php

class MainForm
{
    public function __construct()
    {
        add_shortcode('apply_partners', array($this, 'render_form'));
        add_action('wp_enqueue_scripts', array($this, 'frontendScripts'));
        add_action('wp_ajax_form_action', array($this, 'handle_form_action'));
        add_action('wp_ajax_nopriv_form_action', array($this, 'handle_form_action'));
    }
    public function frontendScripts()
    {
        wp_enqueue_style('wp-custom-multistep', plugin_dir_url(__FILE__) . '/css/style.css');
        wp_enqueue_script('wp-custom-multistep-custom', plugin_dir_url(__FILE__) . '/js/custom.js', array('jquery'), null, true);
        wp_enqueue_script('wp-custom-multistep-custom-steps', plugin_dir_url(__FILE__) . '/js/custom-steps.js', array('jquery'), null, true);
        wp_enqueue_script('wp-custom-multistep-custom-valid', plugin_dir_url(__FILE__) . '/js/custom-valid.js', array('jquery'), null, true);
        wp_enqueue_script('wp-custom-multistep-custom-format', plugin_dir_url(__FILE__) . '/js/custom-format.js', array('jquery'), null, true);
        wp_enqueue_style('bootstrap4', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css');
        wp_enqueue_script('boot1', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js', array('jquery'), '', true);
        wp_enqueue_script('boot2', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js', array('jquery'), '', true);
        wp_enqueue_script('boot3', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js', array('jquery'), '', true);
        wp_enqueue_script('boot4', 'https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js', array('jquery'), '', true);
        wp_enqueue_script('boot4-validate', 'https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js', array('jquery'), '', true);
        wp_localize_script('wp-custom-multistep-custom-steps', 'ajax_object', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce( 'form_action')
        ));
    }
    public function render_form()
    {
        include plugin_dir_path(__FILE__) . 'templates/applyPartners.php';
    }

    function handle_form_action()
    {       
        print_r($_REQUEST);
    }
}
