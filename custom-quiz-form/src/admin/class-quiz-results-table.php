<?php

if (!class_exists('WP_List_Table')) {
    require_once ABSPATH . 'wp-admin/includes/class-wp-list-table.php';
}

class Quiz_Results_Table extends \WP_List_Table
{

    function __construct()
    {
        parent::__construct([
            'singular' => 'quiz_result',
            'plural'   => 'quiz_results',
            'ajax'     => false
        ]);
    }

    function column_default($item, $column_name)
    {
        switch ($column_name) {
            case 'name':
                return esc_html($item['name']);
            case 'email':
                return esc_html($item['email']);
            case 'total_score':
                return esc_html($item['total_score']);
            case 'burden_level':
                return esc_html($item['burden_level']);
            case 'created_at':
                // Check if created_at is a string and convert it to a DateTime object
                if (is_string($item['created_at'])) {
                    $dateTime = new DateTime($item['created_at']);
                    $formattedDate = $dateTime->format("m-d-y h:i A");
                } else {
                    $formattedDate = $item['created_at'];  // If it's already a DateTime object
                }
                return esc_html($formattedDate);
            default:
                return '';  // Return empty string for unhandled columns
        }
    }

    function get_columns()
    {
        return [
            'name'         => 'Name',
            'email'        => 'Email',
            'total_score'  => 'Score',
            'burden_level' => 'Burden Level',
            'created_at'   => 'Date',
        ];
    }

    function prepare_items()
    {
        global $wpdb;
        $per_page = 15;

        $columns = $this->get_columns();
        $hidden = array();
        $sortable = $this->get_sortable_columns();
        $this->_column_headers = array($columns, $hidden, $sortable);

        $properties_table = $wpdb->prefix . 'quiz_results';
        $orderby = !empty($_GET['orderby']) ? esc_sql($_GET['orderby']) : 'created_at';
        $order = !empty($_GET['order']) ? esc_sql($_GET['order']) : 'desc';

        $current_page = $this->get_pagenum();
        $offset = ($current_page - 1) * $per_page;


        // $data = $wpdb->get_results("SELECT * FROM $properties_table ORDER BY $orderby $order", ARRAY_A);

        $data = $wpdb->get_results($wpdb->prepare("SELECT * FROM $properties_table ORDER BY $orderby $order LIMIT %d OFFSET %d", $per_page, $offset), ARRAY_A);

        $total_items = $wpdb->get_var("SELECT COUNT(id) FROM $properties_table");

        $this->items = $data;

        $this->set_pagination_args(array(
            'total_items' => $total_items,
            'per_page'    => $per_page,
            'total_pages' => ceil($total_items / $per_page)
        ));
    }
}
