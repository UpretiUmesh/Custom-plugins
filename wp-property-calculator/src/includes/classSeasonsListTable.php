<?php
namespace WPPropertyCalculator\Includes;

if (!class_exists('WP_List_Table')) {
    require_once ABSPATH . 'wp-admin/includes/class-wp-list-table.php';
}

class Classseasonslisttable extends \WP_List_Table {

    function __construct() {
        parent::__construct(array(
            'singular' => 'season',
            'plural'   => 'seasons',
            'ajax'     => false
        ));
    }

    function column_default($item, $column_name) {
        switch ($column_name) {
            case 'name':
            case 'start_time':
            case 'end_time':
            case 'created_at':
                return $item[$column_name];
            default:
                return print_r($item, true);
        }
    }

    function get_columns() {
        return array(
            'cb'         => '<input type="checkbox" />',
            'name'       => __('Name', 'property-calculator'),
            'start_time' => __('Start Time', 'property-calculator'),
            'end_time'   => __('End Time', 'property-calculator'),
            'created_at' => __('Created Date', 'property-calculator')
        );
    }

    function get_sortable_columns() {
        return array(
            'name'       => array('name', true),
            'start_time' => array('start_time', true),
            'end_time'   => array('end_time', true),
            'created_at' => array('created_at', true)
        );
    }

    function column_cb($item) {
        return sprintf(
            '<input type="checkbox" name="season[]" value="%s" />',
            $item['id']
        );
    }

    function prepare_items() {
        global $wpdb;
        $per_page = 5;

        $columns = $this->get_columns();
        $hidden = array();
        $sortable = $this->get_sortable_columns();
        $this->_column_headers = array($columns, $hidden, $sortable);

        $seasons_table = $wpdb->prefix . 'seasons';
        $orderby = !empty($_GET['orderby']) ? esc_sql($_GET['orderby']) : 'created_at';
        $order = !empty($_GET['order']) ? esc_sql($_GET['order']) : 'desc';

        $current_page = $this->get_pagenum();
        $offset = ($current_page - 1) * $per_page;

        /*$data = $wpdb->get_results("SELECT * FROM $seasons_table ORDER BY $orderby $order", ARRAY_A);*/

        $data = $wpdb->get_results($wpdb->prepare("SELECT * FROM $seasons_table ORDER BY $orderby $order LIMIT %d OFFSET %d", $per_page, $offset), ARRAY_A);

        $total_items = $wpdb->get_var("SELECT COUNT(id) FROM $seasons_table");

        $this->items = $data;

        $this->set_pagination_args(array(
            'total_items' => $total_items,
            'per_page'    => $per_page,
            'total_pages' => ceil($total_items / $per_page)
        ));
    }
}
?>
