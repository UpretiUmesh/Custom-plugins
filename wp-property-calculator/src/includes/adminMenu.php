<?php

namespace WPPropertyCalculator\Includes;

class AdminMenu
{
    public function __construct()
    {
        add_action('admin_menu', array($this, 'wp_property_calculator_menu'));
    }

    public function wp_property_calculator_menu()
    {
        add_menu_page('Property Calculator', __('Property Calculator', 'property-calculator'), 'manage_options', 'property-calculator', array($this, 'wp_property_calculator_properties_page'));
        add_submenu_page('property-calculator', __('Properties', 'property-calculator'), 'Properties', 'manage_options', 'property-calculator-properties', array($this, 'wp_property_calculator_properties_page'));
        add_submenu_page('property-calculator', __('Seasons', 'property-calculator'), 'Seasons', 'manage_options', 'property-calculator-seasons', array($this, 'wp_property_calculator_seasons_page'));
        add_submenu_page('property-calculator', __('Rates', 'property-calculator'), 'Rates', 'manage_options', 'property-calculator-rates', array($this, 'wp_property_calculator_rates_page'));
        add_submenu_page('property-calculator', __('Email Templates', 'property-calculator'), 'Email Templates', 'manage_options', 'property-calculator-email-templates', array($this, 'wp_property_calculator_email_templates_page'));
        add_submenu_page('property-calculator', __('Settings', 'property-calculator'), 'Settings', 'manage_options', 'property-calculator-settings', array($this, 'wp_property_calculator_settings_page'));
        // Other submenu pages...
    }
    public function wp_property_calculator_properties_page()
    {
        global $wpdb;

        $properties_table = $wpdb->prefix . 'properties';

        // Handle Form Submission
        if (isset($_POST['submit_property'])) {
            $property_name = sanitize_text_field($_POST['property_name']);
            if (!empty($property_name)) {
                $wpdb->insert($properties_table, array(
                    'name' => $property_name,
                    'created_at' => current_time('mysql')
                ));
                echo '<div class="updated"><p>Property added successfully.</p></div>';
            }
        }

        // Create an instance of our custom list table class
        $properties_list_table = new PropertiesListTable();
        $properties_list_table->prepare_items();
        PropertyCalculatorForm::render('backend/propertyViewForm');
        $properties_list_table->display();
    }

    public function wp_property_calculator_seasons_page()
    {
        global $wpdb;

        $seasons_table = $wpdb->prefix . 'seasons';

        // Handle Form Submission
        if (isset($_POST['submit_season'])) {
            $season_name = sanitize_text_field($_POST['season_name']);
            $start_time = sanitize_text_field($_POST['start_time']);
            $end_time = sanitize_text_field($_POST['end_time']);
            if (!empty($season_name) && !empty($start_time) && !empty($end_time)) {
                $wpdb->insert($seasons_table, array(
                    'name' => $season_name,
                    'start_time' => $start_time,
                    'end_time' => $end_time,
                    'created_at' => current_time('mysql')
                ));
                echo '<div class="updated"><p>Season added successfully.</p></div>';
            }
        }

        // Create an instance of our custom list table class
        $seasons_list_table = new Classseasonslisttable();
        $seasons_list_table->prepare_items();

        PropertyCalculatorForm::render('backend/seasonsViewForm');
        $seasons_list_table->display();
    }

    public function wp_property_calculator_rates_page()
    {
        global $wpdb;

        $rates_table = $wpdb->prefix . 'rates';
        $properties_table = $wpdb->prefix . 'properties';
        $seasons_table = $wpdb->prefix . 'seasons';

        // Handle Form Submission
        if (isset($_POST['submit_rate'])) {
            $price = sanitize_text_field($_POST['price']);
            $property_id = sanitize_text_field($_POST['property_id']);
            $season_id = sanitize_text_field($_POST['season_id']);
            if (!empty($price) && !empty($property_id) && !empty($season_id)) {
                $wpdb->insert($rates_table, array(
                    'price' => $price,
                    'property_id' => $property_id,
                    'season_id' => $season_id,
                    'created_at' => current_time('mysql')
                ));
                echo '<div class="updated"><p>Rate added successfully.</p></div>';
            }
        }

        // Create an instance of our custom list table class
        $rates_list_table = new Classrateslisttable();
        $rates_list_table->prepare_items();

        PropertyCalculatorForm::render('backend/rateViewForm', ['properties_table' => $properties_table, 'seasons_table' => $seasons_table]);
        $rates_list_table->display();
    }
    public function wp_property_calculator_email_templates_page()
    {
        global $wpdb;

        $email_templates_table = $wpdb->prefix . 'email_templates';

        // Handle Form Submission for Adding/Updating Email Template
        if (isset($_POST['submit_email_template'])) {
            $template_id = isset($_POST['template_id']) ? intval($_POST['template_id']) : 0;
            $template_name = sanitize_text_field($_POST['template_name']);
            $template_subject = sanitize_text_field($_POST['template_subject']);
            $template_body = wp_kses_post($_POST['template_body']);

            if ($template_id > 0) {
                // Update existing template
                $wpdb->update($email_templates_table, array(
                    'name' => $template_name,
                    'subject' => $template_subject,
                    'body' => $template_body,
                ), array('id' => $template_id));
                echo '<div class="updated"><p>Email template updated successfully.</p></div>';
            } else {
                // Insert new template
                $wpdb->insert($email_templates_table, array(
                    'name' => $template_name,
                    'subject' => $template_subject,
                    'body' => $template_body,
                    'created_at' => current_time('mysql')
                ));
                echo '<div class="updated"><p>Email template added successfully.</p></div>';
            }
        }

        // Handle Delete Template
        if (isset($_GET['action']) && $_GET['action'] == 'delete' && isset($_GET['template_id'])) {
            $template_id = intval($_GET['template_id']);
            $wpdb->delete($email_templates_table, array('id' => $template_id));
            echo '<div class="updated"><p>Email template deleted successfully.</p></div>';
        }

        // Fetch all email templates
        $email_templates = $wpdb->get_results("SELECT * FROM $email_templates_table");
        PropertyCalculatorForm::render('backend/emailViewTemplate', ['email_templates' => $email_templates]);
    }
    public function wp_property_calculator_settings_page()
    {
        // Handle form submission
        if (isset($_POST['submit_settings'])) {
            update_option('wp_property_calculator_currency', sanitize_text_field($_POST['currency']));
            update_option('wp_property_calculator_currency_format', sanitize_text_field($_POST['currency_format']));
            echo '<div class="updated"><p>'.__('Settings saved successfully.', 'property-calculator').'</p></div>';
        }

        // Get current settings
        $currency = get_option('wp_property_calculator_currency', 'USD');
        $currency_format = get_option('wp_property_calculator_currency_format', 'en_US');

        PropertyCalculatorForm::render('backend/settingViewTemplate', ['currency' => $currency, 'currency_format' => $currency_format]);
        // echo wp_property_calculator_format_currency(100); // Displays the formatted currency value based on settings

    }
}
