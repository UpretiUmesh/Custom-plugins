<?php
namespace WPPropertyCalculator\Includes;

if (!class_exists('WP_List_Table')) {
    require_once ABSPATH . 'wp-admin/includes/class-wp-list-table.php';
}

class Classrateslisttable extends \WP_List_Table {

    function __construct() {
        parent::__construct(array(
            'singular' => 'rate',
            'plural'   => 'rates',
            'ajax'     => false
        ));
    }

    function column_default($item, $column_name) {
        global $wpdb;

        switch ($column_name) {
            case 'price':
            case 'created_at':
                return $item[$column_name];
            case 'property_name':
                $property = $wpdb->get_row($wpdb->prepare("SELECT name FROM {$wpdb->prefix}properties WHERE id = %d", $item['property_id']));
                return $property ? $property->name : 'N/A';
            case 'season_name':
                $season = $wpdb->get_row($wpdb->prepare("SELECT name FROM {$wpdb->prefix}seasons WHERE id = %d", $item['season_id']));
                return $season ? $season->name : 'N/A';
            default:
                return print_r($item, true);
        }
    }

    function get_columns() {
        return array(
            'cb'           => '<input type="checkbox" />',
            'price'        => __('Price', 'property-calculator'),
            'property_name'=> __('Property Name', 'property-calculator'),
            'season_name'  => __('Season Name', 'property-calculator'),
            'created_at'   => __('Created Date', 'property-calculator'),
        );
    }

    function get_sortable_columns() {
        return array(
            'price'        => array('price', true),
            'property_name'=> array('property_name', true),
            'season_name'  => array('season_name', true),
            'created_at'   => array('created_at', true)
        );
    }

    function column_cb($item) {
        return sprintf(
            '<input type="checkbox" name="rate[]" value="%s" />',
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

        $rates_table = $wpdb->prefix . 'rates';
        $orderby = !empty($_GET['orderby']) ? esc_sql($_GET['orderby']) : 'created_at';
        $order = !empty($_GET['order']) ? esc_sql($_GET['order']) : 'desc';

        $current_page = $this->get_pagenum();
        $offset = ($current_page - 1) * $per_page;

        $data = $wpdb->get_results($wpdb->prepare(
            "SELECT * FROM $rates_table ORDER BY $orderby $order LIMIT %d OFFSET %d",
            $per_page, $offset
        ), ARRAY_A);

        $total_items = $wpdb->get_var("SELECT COUNT(id) FROM $rates_table");

        $this->items = $data;

        $this->set_pagination_args(array(
            'total_items' => $total_items,
            'per_page'    => $per_page,
            'total_pages' => ceil($total_items / $per_page)
        ));
    }
}
?>
