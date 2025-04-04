<?php
class Database
{
    public function __construct()
    {
        register_activation_hook(__FILE__, [$this, 'create_quiz_results_table']);
    }
    function create_quiz_results_table()
    {
        global $wpdb;
        $table_name = $wpdb->prefix . 'quiz_results';

        $charset_collate = $wpdb->get_charset_collate();

        $sql = "CREATE TABLE $table_name (
        id BIGINT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        answers TEXT NOT NULL,
        total_score INT NOT NULL,
        burden_level VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    ) $charset_collate;";

        require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        dbDelta($sql);
    }
}
