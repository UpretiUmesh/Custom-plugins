<?php

namespace WPPropertyCalculator\Includes;

use WPPropertyCalculator\Assets\EnqueueAssets;
// use WPPropertyCalculator\Language\LanguageSwitcher;

class Initializer
{
    public function __construct()
    {
        $this->loadtextDomain();
        // Load necessary files
        $this->load_files();

        // Initialize classes
        $this->init_classes();
        
    }

    private function load_files()
    {
        require_once plugin_dir_path(__FILE__) . 'classRatesListTable.php';
        require_once plugin_dir_path(__FILE__) . 'classSeasonsListTable.php';
        require_once plugin_dir_path(__FILE__) . 'propertiesListTable.php';
    }

    private function init_classes()
    {
        new AdminMenu();
        new CalculatorDB();
        new EmailProperty();
        new Helpers();
        new Shortcode();
        new EnqueueAssets();
        new PropertyCalculatorForm();
        // new LanguageSwitcher();
    }

    public function loadtextDomain()
    {   
        global $wp_version;
        
        $clvrpos_lang_dir =   dirname(WPCALC_PLUGIN_BASE).'/languages/';
        
        $clvrpos_lang_dir = apply_filters('dimaond_calculator_languages_directory', $clvrpos_lang_dir);

        $get_locale = get_locale();

        if ($wp_version >= 4.7) {
            $get_locale = get_user_locale();
        }

        $locale = apply_filters('plugin_locale',  $get_locale, 'property-calculator');
        $mofile = sprintf('%1$s-%2$s.mo', 'clover-pos-sync', $locale);

        $mofile_global = WP_LANG_DIR . '/plugins/' . basename(plugin_dir_path(__FILE__)) . '/' . $mofile;
        
        if (file_exists($mofile_global)) { 
            load_textdomain('property-calculator', $mofile_global);
        } else { 
            load_plugin_textdomain('property-calculator', false, $clvrpos_lang_dir);
        }
    }
}
