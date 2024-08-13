<?php

class Init
{
    public function __construct()
    {
        // Admin
        if (is_admin()) {
            include_once plugin_dir_path(__FILE__) . '../admin/admin.php';
            new Admin();
            include_once plugin_dir_path(__FILE__) . '../frontend/mainForm.php';
            new MainForm();  
        }

        // Frontend
        if (!is_admin()) {
            include_once plugin_dir_path(__FILE__) . '../admin/admin.php';
            new Admin();
            include_once plugin_dir_path(__FILE__) . '../frontend/mainForm.php';
            new MainForm();              
        }
        
    }
}
?>