<?php

namespace TermsEnforcer\Includes;

if (!defined('ABSPATH')) {
    exit;
}

class Class_acceptance_logger extends \WP_List_Table
{
    private $table;

    public function __construct()
    {
        global $wpdb;
        parent::__construct([
            'singular' => __('Acceptance Log', 'terms-enforcer'),
            'plural'   => __('Acceptance Logs', 'terms-enforcer'),
            'ajax'     => false,
        ]);
        $this->table = $wpdb->prefix . 'te_acceptance_logs';
    }

    public function get_columns()
    {
        return [
            'cb'              => '<input type="checkbox" />',
            'user'            => __('User', 'terms-enforcer'),
            'ip_address'      => __('IP Address', 'terms-enforcer'),
            'accepted_terms'  => __('Terms Accepted', 'terms-enforcer'),
            'accepted_gdpr'   => __('GDPR Accepted', 'terms-enforcer'),
            'page_url'        => __('Page URL', 'terms-enforcer'),
            'accepted_at'     => __('Accepted At', 'terms-enforcer'),
        ];
    }

    protected function get_sortable_columns()
    {
        return [
            'accepted_at' => ['accepted_at', true],
            'user'        => ['user_id', false],
        ];
    }

    protected function column_cb($item)
    {
        return sprintf(
            '<input type="checkbox" name="log[]" value="%s" />',
            esc_attr($item->id)
        );
    }

    public function extra_tablenav($which)
    {
        if ($which === 'top') {
            $export_url = esc_url(add_query_arg([
                'page'     => sanitize_text_field($_GET['page'] ?? ''),
                'action'   => 'export_acceptance_logs',
                '_wpnonce' => wp_create_nonce('export_acceptance_logs_nonce'),
            ]));

            echo '<div class="alignleft actions">';
            echo '<a href="' . $export_url . '" class="button button-primary">'
                . esc_html__('Export CSV', 'terms-enforcer')
                . '</a>';
            echo '</div>';
        }
    }

    public function prepare_items()
    {
        global $wpdb;

        $this->process_bulk_action();

        $columns  = $this->get_columns();
        $sortable = $this->get_sortable_columns();
        $this->_column_headers = [$columns, [], $sortable];

        $per_page     = $this->get_items_per_page('logs_per_page', 20);
        $current_page = $this->get_pagenum();
        $offset       = ($current_page - 1) * $per_page;

        // Build base query
        $sql    = "SELECT * FROM {$this->table}";
        $where  = [];
        $params = [];

        // Search
        if (!empty($_REQUEST['s'])) {
            $search = '%' . sanitize_text_field(wp_unslash($_REQUEST['s'])) . '%';
            $where[]  = "(user_id LIKE %s OR ip_address LIKE %s OR page_url LIKE %s)";
            $params[] = $search;
            $params[] = $search;
            $params[] = $search;
        }
        if ($where) {
            $sql .= ' WHERE ' . implode(' AND ', $where);
        }

        // Order
        $orderby = sanitize_sql_orderby($_REQUEST['orderby'] ?? 'accepted_at') ?: 'accepted_at';
        $order   = (isset($_REQUEST['order']) && strtoupper($_REQUEST['order']) === 'ASC')
            ? 'ASC' : 'DESC';

        $sql .= " ORDER BY {$orderby} {$order} LIMIT %d OFFSET %d";
        $params[] = $per_page;
        $params[] = $offset;

        $this->items = $wpdb->get_results($wpdb->prepare($sql, $params));

        // Pagination
        $total_query = "SELECT COUNT(*) FROM {$this->table}" . ($where ? ' WHERE ' . implode(' AND ', $where) : '');
        $total_items = $wpdb->get_var($wpdb->prepare($total_query, array_slice($params, 0, count($params) - 2)));

        $this->set_pagination_args([
            'total_items' => $total_items,
            'per_page'    => $per_page,
            'total_pages' => ceil($total_items / $per_page),
        ]);
    }

    public function column_default($item, $column_name)
    {
        switch ($column_name) {
            case 'ip_address':
                return esc_html($item->ip_address);

            case 'accepted_terms':
            case 'accepted_gdpr':
                $flag = $item->{$column_name};
                $icon = $flag ? 'yes' : 'no';
                $color = $flag ? 'green' : 'red';
                return sprintf(
                    '<span class="dashicons dashicons-%1$s" style="color:%2$s;"></span>',
                    esc_attr($icon),
                    esc_attr($color)
                );

            case 'page_url':
                return sprintf(
                    '<a href="%1$s" target="_blank">%1$s</a>',
                    esc_url($item->page_url)
                );

            case 'accepted_at':
                return date_i18n(
                    get_option('date_format') . ' ' . get_option('time_format'),
                    strtotime($item->accepted_at)
                );

            case 'user':
                if (!empty($item->user_id)) {
                    $user = get_userdata($item->user_id);
                    if ($user) {
                        return esc_html($user->display_name) . ' (#' . intval($item->user_id) . ')';
                    }
                    return esc_html__('User #', 'terms-enforcer') . intval($item->user_id);
                }
                return esc_html__('Guest', 'terms-enforcer');

            default:
                return print_r($item, true);
        }
    }

    protected function get_bulk_actions()
    {
        return [
            'delete' => __('Delete', 'terms-enforcer'),
        ];
    }

    /**
     * Process bulk actions
     */
    public function process_bulk_action()
    {
        global $wpdb;

        // Check if a bulk action is being triggered
        if ('delete' === $this->current_action()) {
            // Verify the nonce
            check_admin_referer('bulk-' . $this->_args['plural']);

            // Get the array of log IDs to delete
            $log_ids = isset($_REQUEST['log']) ? (array) $_REQUEST['log'] : array();
            $log_ids = array_map('absint', $log_ids);

            if (empty($log_ids)) {
                return;
            }

            // Prepare the SQL query
            $placeholders = implode(',', array_fill(0, count($log_ids), '%d'));
            $query = "DELETE FROM {$this->table} WHERE id IN ($placeholders)";

            // Execute the query
            $wpdb->query($wpdb->prepare($query, $log_ids));

            // Add admin notice
            add_action('admin_notices', function () {
                echo '<div class="notice notice-success is-dismissible"><p>'
                    . esc_html__('Selected logs have been deleted.', 'terms-enforcer')
                    . '</p></div>';
            });
        }
    }
    public function get_total_items()
    {
        global $wpdb;
        return $wpdb->get_var("SELECT COUNT(*) FROM {$this->table}");
    }

    public function get_user_acceptance_count()
    {
        global $wpdb;
        return $wpdb->get_var("SELECT COUNT(*) FROM {$this->table} WHERE user_id > 0");
    }

    public function get_guest_acceptance_count()
    {
        global $wpdb;
        return $wpdb->get_var("SELECT COUNT(*) FROM {$this->table} WHERE user_id = 0");
    }
}
