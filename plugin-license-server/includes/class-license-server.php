<?php

class PLS_License_Server
{
    public static $table;

    public static function init()
    {
        global $wpdb;
        self::$table = $wpdb->prefix . 'pls_license_keys';
    }

    public static function create_license_table()
    {
        global $wpdb;
        self::init();

        $charset_collate = $wpdb->get_charset_collate();
        $sql = "CREATE TABLE " . self::$table . " (
            id BIGINT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            license_key VARCHAR(255) NOT NULL UNIQUE,
            status VARCHAR(20) DEFAULT 'valid',
            domain VARCHAR(255) DEFAULT NULL,
            plugin VARCHAR(100) DEFAULT NULL,
            expires DATE DEFAULT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        ) $charset_collate;";

        require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        dbDelta($sql);
    }

    public static function get_license($key)
    {
        global $wpdb;
        self::init();
        return $wpdb->get_row($wpdb->prepare("SELECT * FROM " . self::$table . " WHERE license_key = %s", $key));
    }

    public static function update_license_domain($id, $domain)
    {
        global $wpdb;
        self::init();
        return $wpdb->update(self::$table, ['domain' => $domain], ['id' => $id]);
    }

    public static function insert_license($key, $plugin, $expires)
    {
        global $wpdb;
        self::init();
        return $wpdb->insert(self::$table, [
            'license_key' => $key,
            'plugin' => $plugin,
            'expires' => $expires,
            'status' => 'valid'
        ]);
    }
}
