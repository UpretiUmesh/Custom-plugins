<?php
namespace TermsEnforcer\Includes;
class Class_call_templates
{
    public static function render($view, $data = [])
    {
        $view_file = TE_PLUGIN_PATH . 'src/resources/views/' . $view . '.php';
        
        if (file_exists($view_file)) {
            extract($data);
            include $view_file;
        } else {
            echo "View file not found: " . esc_html($view_file);
        }
    }
}
