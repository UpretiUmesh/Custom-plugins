<?php

namespace TermsEnforcer\Includes;

if (! defined('ABSPATH')) {
    exit;
}

// Ensure WP_List_Table is available
if (! class_exists('\WP_List_Table')) {
    require_once ABSPATH . 'wp-admin/includes/class-wp-list-table.php';
}

/**
 * Renders the “Acceptance Logs” admin page.
 */
class Class_acceptance_log
{
    public function __construct()
    {
        add_action('admin_menu', [$this, 'add_logs_submenu']);
        add_action('admin_init', [$this, 'maybe_export_csv']);
    }

    public function add_logs_submenu()
    {
        add_submenu_page(
            'te-settings',
            __('User Acceptance Logs', 'terms-enforcer'),
            __('Acceptance Logs',      'terms-enforcer'),
            'manage_options',
            'te-acceptance-logs',
            [$this, 'render_logs_admin_page']
        );
    }

    /**
     * Handle export action if requested.
     */
    public function maybe_export_csv()
    {
        if (
            isset($_GET['action'], $_GET['_wpnonce'])
            && $_GET['action'] === 'export_acceptance_logs'
            && wp_verify_nonce(sanitize_text_field(wp_unslash($_GET['_wpnonce'])), 'export_acceptance_logs_nonce')
        ) {
            $this->export_acceptance_logs_csv();
        }
    }

    /**
     * Output the CSV and exit.
     */
    protected function export_acceptance_logs_csv()
    {
        global $wpdb;
        $table = $wpdb->prefix . 'te_acceptance_logs';

        $logs = $wpdb->get_results("SELECT * FROM {$table} ORDER BY accepted_at DESC", ARRAY_A);

        if (empty($logs)) {
            wp_die(__('No acceptance logs found.', 'terms-enforcer'));
        }

        // Send CSV headers
        header('Content-Type: text/csv; charset=utf-8');
        header('Content-Disposition: attachment; filename=acceptance-logs-' . date('Y-m-d') . '.csv');

        $output = fopen('php://output', 'w');
        fputcsv($output, array_keys($logs[0]));

        foreach ($logs as $row) {
            fputcsv($output, $row);
        }

        fclose($output);
        exit;
    }

    /**
     * Render the logs page and list table.
     */

   function render_logs_admin_page()
{
    $logs_table = new Class_acceptance_logger();
    $logs_table->prepare_items();

    Class_call_templates::render('admin/termsLogsTemplate', [
        'logs_table' => $logs_table
    ]);
}
}
