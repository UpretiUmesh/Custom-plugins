<?php
namespace WPPropertyCalculator\Includes;

class PropertyCalculatorForm {
    public static function render($view, $data = []) {
        $view_file = plugin_dir_path(__FILE__) . '../resources/views/' . $view . '.php';
        if (file_exists($view_file)) {
            extract($data);
            include $view_file;
        } else {
            echo "View file not found: " . esc_html($view_file);
        }
    }
}
