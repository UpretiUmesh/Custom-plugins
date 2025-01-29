<?php
class GetTemplates
{
    public static function render($view, $data = [])
    {
        $view_file = DIR_PATH . 'templates' . $view . '.php';
        if (file_exists($view_file)) {
            extract($data);
            include $view_file;
        } else {
            echo "View file not found: " . esc_html($view_file);
        }
    }
}
