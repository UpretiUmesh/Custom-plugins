<?php
namespace WPPropertyCalculator\Includes;

if (!class_exists('WP_List_Table')) {
    require_once ABSPATH . 'wp-admin/includes/class-wp-list-table.php';
}

class PropertiesListTable extends \WP_List_Table
{

    function __construct()
    {
        parent::__construct(array(
            'singular' => 'property',
            'plural'   => 'properties',
            'ajax'     => false
        ));
    }

    function column_default($item, $column_name)
    {
        switch ($column_name) {
            case 'name':
            case 'created_at':
                return $item[$column_name];
            case 'shortcode':
                return '[HazewaysProperty prop_id="' . $item['id'] . '"]';
            default:
                return print_r($item, true);
        }
    }

    function get_columns()
    {
        return array(
            'cb'         => '<input type="checkbox" />',
            'name'       => __('Name', 'property-calculator'),
            'created_at' => __('Created Date', 'property-calculator'),
            'shortcode'  => __('Shortcode', 'property-calculator'),
        );
    }

    function get_sortable_columns()
    {
        return array(
            'name'       => array('name', true),
            'created_at' => array('created_at', true)
        );
    }

    function column_cb($item)
    {
        return sprintf(
            '<input type="checkbox" name="property[]" value="%s" />',
            $item['id']
        );
    }

    function prepare_items()
    {
        global $wpdb;
        $per_page = 5;

        $columns = $this->get_columns();
        $hidden = array();
        $sortable = $this->get_sortable_columns();
        $this->_column_headers = array($columns, $hidden, $sortable);

        $properties_table = $wpdb->prefix . 'properties';
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
