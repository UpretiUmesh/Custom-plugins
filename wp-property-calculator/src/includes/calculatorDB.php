<?php

namespace WPPropertyCalculator\Includes;

class CalculatorDB
{
    public static function activate()
    {
        self::wp_property_calculator_install();
    }

    public static function wp_property_calculator_install()
    {
        global $wpdb;
        $charset_collate = $wpdb->get_charset_collate();

        // Create Properties Table
        $properties_table = $wpdb->prefix . 'Properties';
        $sql = "CREATE TABLE $properties_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        created_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
        PRIMARY KEY  (id)
    ) $charset_collate;";
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);

        // Create Seasons Table
        $seasons_table = $wpdb->prefix . 'Seasons';
        $sql = "CREATE TABLE $seasons_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        start_time date NOT NULL,
        end_time date NOT NULL,
        created_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
        PRIMARY KEY  (id)
    ) $charset_collate;";
        dbDelta($sql);

        // Create Rates Table
        $rates_table = $wpdb->prefix . 'Rates';
        $sql = "CREATE TABLE $rates_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        price float NOT NULL,
        property_id mediumint(9) NOT NULL,
        season_id mediumint(9) NOT NULL,
        created_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
        PRIMARY KEY  (id),
        FOREIGN KEY (property_id) REFERENCES $properties_table(id),
        FOREIGN KEY (season_id) REFERENCES $seasons_table(id)
    ) $charset_collate;";
        dbDelta($sql);

        $email_templates_table = $wpdb->prefix . 'email_templates';
        $sql = "CREATE TABLE $email_templates_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        subject varchar(255) NOT NULL,
        body text NOT NULL,
        created_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
        PRIMARY KEY  (id)
    ) $charset_collate;";
        dbDelta($sql);
    }
}
