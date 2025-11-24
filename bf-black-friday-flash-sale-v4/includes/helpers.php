<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Default settings for the flash sale.
 */
function bf_flash_get_default_settings() {
    return array(
        // Core sale logic
        'enable_sale'             => 1,
        'start_datetime'          => '2025-11-24 00:00:00',
        'duration_hours'          => 48,
        'discount_percent'        => 15,
        'free_shipping_threshold' => 75.00,

        // Banner core toggle
        'enable_banner'           => 1,

        // Banner conditions
        'show_before_sale'        => 0,
        'show_during_sale'        => 1,
        'show_on_desktop'         => 1,
        'show_on_mobile'          => 1,
        'banner_scope'            => 'all', // all | wc | home | custom
        'banner_custom_urls'      => '',
        'allow_close'             => 1,
        'hide_after_close_hours'  => 24,
        'min_cart_for_banner'     => 0,

        // Layout & design
        'style_preset'            => 'gold',      // gold | dark | minimal | custom
        'banner_layout'           => 'top_fixed', // top_fixed | top_inline | bottom_fixed
        'banner_container'        => 'boxed',     // boxed | full
        'banner_bg_color'         => '#D4AF37',
        'banner_text_color'       => '#000000',
        'banner_font_size'        => 'medium',    // small | medium | large
        'banner_rounded'          => 1,
        'banner_top_offset'       => 0,           // px, useful if theme has fixed header
        'cta_bg_color'            => '#111111',
        'cta_text_color'          => '#ffffff',
        'countdown_color'         => '#000000',

        // Content
        'banner_text_live'        => "Till it's Black Friday! Get ready for the best deals of the year.",
        'show_countdown'          => 1,
        // before_text/after_text = inline, above_text/below_text = stacked
        'countdown_position'      => 'before_text', // before_text | after_text | above_text | below_text
        // Countdown layout: verbose labels vs compact
        'countdown_format'        => 'verbose',     // verbose | compact_labels | compact_colon
        'show_cta'                => 1,
        'cta_label'               => 'Shop Now',
        'cta_href'                => '/shop',
        'show_icon'               => 0,
        'icon_text'               => '🔥',
    );
}

/**
 * Retrieve merged settings (saved + defaults).
 * NOTE: no static cache here so changes are always reflected immediately.
 */
function bf_flash_get_config() {
    $defaults = bf_flash_get_default_settings();
    $saved    = get_option( 'bf_flash_settings', array() );
    if ( ! is_array( $saved ) ) {
        $saved = array();
    }
    return array_merge( $defaults, $saved );
}

/**
 * Get DateTime objects for start and end.
 */
function bf_flash_get_window() {
    $cfg = bf_flash_get_config();
    if ( empty( $cfg['start_datetime'] ) ) {
        return null;
    }

    $tz = wp_timezone();
    try {
        $start = new DateTime( $cfg['start_datetime'], $tz );
    } catch ( Exception $e ) {
        return null;
    }

    $end = ( clone $start )->modify( '+' . intval( $cfg['duration_hours'] ) . ' hours' );

    return array(
        'start' => $start,
        'end'   => $end,
    );
}

/**
 * Return "before", "live", "after" or "none" (no window configured).
 */
function bf_flash_get_display_state() {
    $window = bf_flash_get_window();
    if ( ! $window ) {
        return 'none';
    }

    $tz  = wp_timezone();
    $now = new DateTime( 'now', $tz );

    if ( $now < $window['start'] ) {
        return 'before';
    }

    if ( $now > $window['end'] ) {
        return 'after';
    }

    return 'live';
}

/**
 * Check if now is within the live sale window only.
 */
function bf_flash_is_live_window() {
    return ( 'live' === bf_flash_get_display_state() );
}

/**
 * Style presets – used at render time (do not overwrite DB).
 */
function bf_flash_get_style_preset_values( $slug ) {
    switch ( $slug ) {
        case 'dark':
            return array(
                'banner_bg_color'  => '#111111',
                'banner_text_color'=> '#ffffff',
                'cta_bg_color'     => '#ffffff',
                'cta_text_color'   => '#111111',
                'countdown_color'  => '#ffffff',
                'banner_font_size' => 'medium',
                'banner_rounded'   => 1,
            );
        case 'minimal':
            return array(
                'banner_bg_color'  => '#f5f5f5',
                'banner_text_color'=> '#222222',
                'cta_bg_color'     => '#ffffff',
                'cta_text_color'   => '#222222',
                'countdown_color'  => '#555555',
                'banner_font_size' => 'small',
                'banner_rounded'   => 0,
            );
        case 'gold':
        default:
            return array(
                'banner_bg_color'  => '#D4AF37',
                'banner_text_color'=> '#000000',
                'cta_bg_color'     => '#111111',
                'cta_text_color'   => '#ffffff',
                'countdown_color'  => '#000000',
                'banner_font_size' => 'medium',
                'banner_rounded'   => 1,
            );
    }
}
