<?php
/**
 * Plugin Name: Black Friday Flash Sale (Custom)
 * Description: Adds a Black Friday flash sale discount, free shipping, and a highly configurable countdown banner with tabbed admin settings and style presets.
 * Author: Umesh
 * Version: 3.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

define( 'BF_FLASH_VERSION', '3.1.0' );
define( 'BF_FLASH_DIR', plugin_dir_path( __FILE__ ) );
define( 'BF_FLASH_URL', plugin_dir_url( __FILE__ ) );

/**
 * Load helper functions and settings first.
 */
require_once BF_FLASH_DIR . 'includes/helpers.php';
require_once BF_FLASH_DIR . 'includes/class-bf-flash-settings.php';

// Initialize settings page.
new BF_Flash_Settings();

// Get current config and window state.
$bf_cfg        = bf_flash_get_config();
$state         = bf_flash_get_display_state(); // before | live | after | none
$is_live       = ( 'live' === $state );
$enable_sale   = ! empty( $bf_cfg['enable_sale'] );
$enable_banner = ! empty( $bf_cfg['enable_banner'] );
$show_before   = ! empty( $bf_cfg['show_before_sale'] );
$show_during   = ! empty( $bf_cfg['show_during_sale'] );

/**
 * Load discount / shipping logic file only if:
 * - Sale is enabled, and
 * - We are within the live window.
 */
if ( $enable_sale && $is_live ) {
    require_once BF_FLASH_DIR . 'includes/class-bf-flash-discount.php';
    new BF_Flash_Discount();
}

/**
 * Decide whether to load the banner logic at all.
 * Banner can be shown:
 * - BEFORE sale (countdown to start), if enabled in settings
 * - DURING sale (countdown to end), if enabled in settings
 */
$load_banner = false;
if ( $enable_banner ) {
    if ( 'before' === $state && $show_before ) {
        $load_banner = true;
    } elseif ( 'live' === $state && $show_during ) {
        $load_banner = true;
    }
}

if ( $load_banner ) {
    require_once BF_FLASH_DIR . 'includes/class-bf-flash-banner.php';
    new BF_Flash_Banner();
}
