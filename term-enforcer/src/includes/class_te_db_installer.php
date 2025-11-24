<?php

namespace TermsEnforcer\Includes;

if (!defined('ABSPATH')) {
    exit;
}

class Class_te_db_installer {

    public static function install() {
        global $wpdb;

        $table_name = $wpdb->prefix . 'te_acceptance_logs';
        $charset_collate = $wpdb->get_charset_collate();

        $sql = "CREATE TABLE $table_name (
            id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            user_id BIGINT UNSIGNED DEFAULT 0,
            ip_address VARCHAR(45),
            accepted_terms TINYINT(1) DEFAULT 0,
            accepted_gdpr TINYINT(1) DEFAULT 0,
            page_url TEXT,
            user_agent TEXT,
            accepted_at DATETIME DEFAULT CURRENT_TIMESTAMP
        ) $charset_collate;";

        require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        dbDelta($sql);
    }
}
