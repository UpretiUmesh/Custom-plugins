<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class BF_Flash_Banner {

    public function __construct() {
        add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_assets' ) );
        add_action( 'wp_body_open', array( $this, 'output_root' ) );
        add_action( 'wp_footer', array( $this, 'output_root_footer' ) );
    }

    /**
     * Enqueue inline CSS/JS + localize config.
     */
    public function enqueue_assets() {
        if ( ! $this->should_show_here() ) {
            return;
        }

        // Register dummy handles so we can attach inline CSS/JS
        wp_register_script( 'bf-flash-countdown', false );
        wp_enqueue_script( 'bf-flash-countdown' );

        wp_register_style( 'bf-flash-inline', false );
        wp_enqueue_style( 'bf-flash-inline' );

        // Inline CSS & JS
        wp_add_inline_style( 'bf-flash-inline', $this->inline_css() );
        wp_add_inline_script( 'bf-flash-countdown', $this->inline_js() );

        // Localize data for JS
        $data = $this->localize_data();
        if ( $data ) {
            wp_localize_script( 'bf-flash-countdown', 'bfFlashConfig', $data );
        }
    }

    /**
     * Decide if the banner should show on this request, based on:
     * - banner enabled
     * - state (before/live) matching settings
     * - page scope
     * - min cart value (if configured)
     */
    private function should_show_here() {
        $cfg = bf_flash_get_config();
        if ( empty( $cfg['enable_banner'] ) ) {
            return false;
        }

        $state   = bf_flash_get_display_state(); // before | live | after | none
        $before  = ! empty( $cfg['show_before_sale'] );
        $during  = ! empty( $cfg['show_during_sale'] );

        if ( 'before' === $state && ! $before ) {
            return false;
        }
        if ( 'live' === $state && ! $during ) {
            return false;
        }
        if ( 'after' === $state || 'none' === $state ) {
            return false;
        }

        // Page scope
        $scope = isset( $cfg['banner_scope'] ) ? $cfg['banner_scope'] : 'all';

        if ( 'home' === $scope ) {
            if ( ! ( is_front_page() || is_home() ) ) {
                return false;
            }
        } elseif ( 'wc' === $scope ) {
            if ( ! function_exists( 'is_woocommerce' ) ) {
                return false;
            }
            if ( ! ( is_woocommerce() || is_cart() || is_checkout() || is_account_page() ) ) {
                return false;
            }
        } elseif ( 'custom' === $scope ) {
            $urls_raw = isset( $cfg['banner_custom_urls'] ) ? $cfg['banner_custom_urls'] : '';
            $urls     = preg_split( '/[\r\n,]+/', $urls_raw );
            $urls     = array_filter( array_map( 'trim', $urls ) );

            if ( ! empty( $urls ) ) {
                global $wp;
                $current = home_url( add_query_arg( array(), $wp->request ) );
                $match   = false;
                foreach ( $urls as $u ) {
                    if ( '' === $u ) {
                        continue;
                    }
                    if ( false !== strpos( $current, $u ) ) {
                        $match = true;
                        break;
                    }
                }
                if ( ! $match ) {
                    return false;
                }
            }
        }

        // Min cart requirement
        $min = isset( $cfg['min_cart_for_banner'] ) ? floatval( $cfg['min_cart_for_banner'] ) : 0;
        if ( $min > 0 && class_exists( 'WooCommerce' ) && function_exists( 'WC' ) ) {
            $cart = WC()->cart;
            if ( $cart ) {
                $subtotal = floatval( $cart->get_subtotal() );
                if ( $subtotal < $min ) {
                    return false;
                }
            }
        }

        return true;
    }

    private function localize_data() {
        $cfg    = bf_flash_get_config();
        $window = bf_flash_get_window();
        if ( ! $window ) {
            return false;
        }

        $state = bf_flash_get_display_state();
        $mode  = ( 'before' === $state ) ? 'before' : 'live';

        // Countdown target: before sale -> start, during sale -> end
        $target = ( 'before' === $mode ) ? $window['start'] : $window['end'];

        return array(
            'state'                   => $mode,
            'start_iso'               => $window['start']->format( DATE_W3C ),
            'end_iso'                 => $window['end']->format( DATE_W3C ),
            'countdown_target_iso'    => $target->format( DATE_W3C ),
            'discount_percent'        => intval( $cfg['discount_percent'] ),
            'free_shipping_threshold' => number_format( floatval( $cfg['free_shipping_threshold'] ), 2, '.', '' ),
            'texts'                   => array(
                'live' => $cfg['banner_text_live'],
            ),
            'cta_href'                => ! empty( $cfg['cta_href'] ) ? $cfg['cta_href'] : '/shop',
            'cta_label'               => ! empty( $cfg['cta_label'] ) ? $cfg['cta_label'] : 'Shop Now',
            'show_cta'                => ! empty( $cfg['show_cta'] ),
            'show_countdown'          => ! empty( $cfg['show_countdown'] ),
            'countdown_position'      => ! empty( $cfg['countdown_position'] ) ? $cfg['countdown_position'] : 'before_text',
            'countdown_format'        => ! empty( $cfg['countdown_format'] ) ? $cfg['countdown_format'] : 'verbose',
            'allow_close'             => ! empty( $cfg['allow_close'] ),
            'hide_after_close_hours'  => isset( $cfg['hide_after_close_hours'] ) ? (int) $cfg['hide_after_close_hours'] : 24,
            'show_icon'               => ! empty( $cfg['show_icon'] ),
            'icon_text'               => isset( $cfg['icon_text'] ) ? $cfg['icon_text'] : '',
        );
    }

    private function inline_css() {
        $cfg   = bf_flash_get_config();

        // Apply style preset at render time (non-destructive to DB)
        $preset_slug   = isset( $cfg['style_preset'] ) ? $cfg['style_preset'] : 'gold';
        $preset_values = bf_flash_get_style_preset_values( $preset_slug );

        // base from DB
        $bg    = ! empty( $cfg['banner_bg_color'] ) ? $cfg['banner_bg_color'] : '#D4AF37';
        $color = ! empty( $cfg['banner_text_color'] ) ? $cfg['banner_text_color'] : '#000000';
        $countdown_color = ! empty( $cfg['countdown_color'] ) ? $cfg['countdown_color'] : $color;
        $font_size = isset( $cfg['banner_font_size'] ) ? $cfg['banner_font_size'] : 'medium';
        $rounded   = ! empty( $cfg['banner_rounded'] );
        $cta_bg    = ! empty( $cfg['cta_bg_color'] ) ? $cfg['cta_bg_color'] : '#111111';
        $cta_color = ! empty( $cfg['cta_text_color'] ) ? $cfg['cta_text_color'] : '#ffffff';

        if ( 'custom' !== $preset_slug && is_array( $preset_values ) ) {
            if ( ! empty( $preset_values['banner_bg_color'] ) ) {
                $bg = $preset_values['banner_bg_color'];
            }
            if ( ! empty( $preset_values['banner_text_color'] ) ) {
                $color = $preset_values['banner_text_color'];
            }
            if ( ! empty( $preset_values['cta_bg_color'] ) ) {
                $cta_bg = $preset_values['cta_bg_color'];
            }
            if ( ! empty( $preset_values['cta_text_color'] ) ) {
                $cta_color = $preset_values['cta_text_color'];
            }
            if ( ! empty( $preset_values['countdown_color'] ) ) {
                $countdown_color = $preset_values['countdown_color'];
            }
            if ( ! empty( $preset_values['banner_font_size'] ) ) {
                $font_size = $preset_values['banner_font_size'];
            }
            $rounded = isset( $preset_values['banner_rounded'] ) ? (bool) $preset_values['banner_rounded'] : $rounded;
        }

        $layout    = isset( $cfg['banner_layout'] ) ? $cfg['banner_layout'] : 'top_fixed';
        $container = isset( $cfg['banner_container'] ) ? $cfg['banner_container'] : 'boxed';
        $offset    = isset( $cfg['banner_top_offset'] ) ? (int) $cfg['banner_top_offset'] : 0;

        $wrap_pos  = '';
        if ( 'top_fixed' === $layout ) {
            $wrap_pos = 'position:fixed; top: ' . $offset . 'px; left: 0;';
        } elseif ( 'bottom_fixed' === $layout ) {
            $wrap_pos = 'position:fixed; bottom: 0; left: 0;';
        } else { // top_inline
            $wrap_pos = 'position:static;';
        }

        // Font size mapping
        $font_css = 'font-size: 1rem;';
        if ( 'small' === $font_size ) {
            $font_css = 'font-size: 0.9rem;';
        } elseif ( 'large' === $font_size ) {
            $font_css = 'font-size: 1.1rem;';
        }

        $radius = $rounded ? '8px' : '0';

        // Desktop/mobile show/hide
        $cfg_show_desktop = ! empty( $cfg['show_on_desktop'] );
        $cfg_show_mobile  = ! empty( $cfg['show_on_mobile'] );

        $css = '
        #bf-flash-root { position: relative; z-index: 9999; width:100%; }
        #bf-flash-banner-wrap {
            ' . $wrap_pos . '
            width: 100%;
            display:flex;
            justify-content:center;
            box-sizing: border-box;
            background: ' . esc_attr( $bg ) . ';
            box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }

        #bf-flash-banner {
            box-sizing:border-box;
            ' . ( 'boxed' === $container ? 'max-width:1200px;' : '' ) . '
            width: 100%;
            padding:10px 16px;
            border-radius:' . $radius . ';
            display:flex;
            gap:14px;
            align-items:center;
            background:transparent;
            color:' . esc_attr( $color ) . ';
            font-family:inherit;
            margin:0;
            ' . $font_css . '
        }
        #bf-flash-banner .bf-left{
            margin: auto;
            font-weight:700;
            display:flex;
            align-items:center;
            gap:8px;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
            justify-content: center;
            flex-wrap: wrap;
        }
        #bf-flash-banner .bf-stack-vertical{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            text-align:center;
            gap:4px;
        }
        #bf-flash-banner .bf-countdown{
            font-family:monospace;
            font-weight:800;
            margin-left:6px;
            font-size: 1.1em;
            color:' . esc_attr( $countdown_color ) . ';
        }
        #bf-flash-banner .bf-text{
            font-size:0.95rem;
            opacity:0.95;
            margin-left:12px;
            white-space:nowrap;
        }
        .bf-cta{
            margin-left:auto;
            background:' . esc_attr( $cta_bg ) . ';
            color:' . esc_attr( $cta_color ) . ';
            padding:8px 14px;
            border-radius:6px;
            text-decoration:none;
            font-weight:700;
            display:inline-flex;
            align-items:center;
        }
        .bf-icon{
            margin-right:6px;
        }
        .bf-close{
            margin-left:8px;
            background:transparent;
            border:none;
            font-size:1.1rem;
            cursor:pointer;
        }

        @media (max-width:640px){
            #bf-flash-banner {
                flex-direction:column;
                align-items:flex-start;
                gap:6px;
                padding:12px;
                border-radius:0;
                width:calc(100% - 20px);
            }
            .bf-cta{ margin-left:0; }
            #bf-flash-banner .bf-text{ margin-left:0; white-space:normal; }
            #bf-flash-banner .bf-left{ justify-content:flex-start; }
        }

        body { ' . ( 'top_fixed' === $layout ? 'padding-top: 62px;' : '' ) . ' }
        ';

        // Device-specific visibility
        if ( ! $cfg_show_desktop ) {
            $css .= '
            @media (min-width:769px){
                #bf-flash-root { display:none !important; }
            }';
        }
        if ( ! $cfg_show_mobile ) {
            $css .= '
            @media (max-width:768px){
                #bf-flash-root { display:none !important; }
            }';
        }

        return $css;
    }

    private function inline_js() {
        return <<<'JS'
(function(){
    if (!window.bfFlashConfig) return;

    function pad2(num) {
        return num < 10 ? '0' + num : String(num);
    }

    function formatDiff(ms, format) {
        if (ms <= 0) {
            if (format === 'compact_labels') {
                return '00d 00h 00m 00s';
            }
            if (format === 'compact_colon') {
                return '00:00:00:00';
            }
            return '00 Days 00 Hours 00 Minutes 00 Seconds';
        }

        var s = Math.floor(ms / 1000);
        var d = Math.floor(s / 86400);
        s -= d * 86400;

        var h = Math.floor(s / 3600);
        s -= h * 3600;

        var m = Math.floor(s / 60);
        var sec = s - m * 60;

        if (format === 'compact_labels') {
            return (
                pad2(d) + 'd ' +
                pad2(h) + 'h ' +
                pad2(m) + 'm ' +
                pad2(sec) + 's'
            );
        }

        if (format === 'compact_colon') {
            return (
                pad2(d) + ':' +
                pad2(h) + ':' +
                pad2(m) + ':' +
                pad2(sec)
            );
        }

        // verbose
        return (
            pad2(d) + ' Days ' +
            pad2(h) + ' Hours ' +
            pad2(m) + ' Minutes ' +
            pad2(sec) + ' Seconds'
        );
    }

    var target = new Date(window.bfFlashConfig.countdown_target_iso);
    var format = window.bfFlashConfig.countdown_format || 'verbose';

    function closedRecently(){
        if (!window.bfFlashConfig.allow_close) return false;
        try {
            var ts = localStorage.getItem('bfFlashClosedAt');
            if (!ts) return false;
            var closedAt = parseInt(ts, 10);
            if (!closedAt) return false;
            var now = Date.now();
            var diffHours = (now - closedAt) / (1000 * 60 * 60);
            return diffHours < (window.bfFlashConfig.hide_after_close_hours || 24);
        } catch(e){
            return false;
        }
    }

    if (closedRecently()) {
        return;
    }

    function removeRoot(){
        var r = document.getElementById('bf-flash-root');
        if (r) r.remove();
        try { document.body.style.paddingTop = ''; } catch(e){}
    }

    function render(now){
        var root = document.getElementById('bf-flash-root');
        if (!root) return;

        var wrap = document.getElementById('bf-flash-banner-wrap');
        if (!wrap) {
            wrap = document.createElement('div');
            wrap.id = 'bf-flash-banner-wrap';
            root.appendChild(wrap);
        }

        var showCountdown = !!window.bfFlashConfig.show_countdown;
        var countdownStr = '';
        if (showCountdown) {
            countdownStr = formatDiff(target - now, format);
        }

        var textHtml = '<span class="bf-text">' + (window.bfFlashConfig.texts.live || '') + '</span>';
        var countdownHtml = showCountdown ? '<span class="bf-countdown">' + countdownStr + '</span>' : '';

        var mainContent = '';
        var position = window.bfFlashConfig.countdown_position || 'before_text';

        if (!showCountdown) {
            mainContent = textHtml;
        } else if (position === 'after_text') {
            mainContent = textHtml + ' ' + countdownHtml;
        } else if (position === 'above_text') {
            mainContent = '<div class="bf-stack-vertical">' + countdownHtml + textHtml + '</div>';
        } else if (position === 'below_text') {
            mainContent = '<div class="bf-stack-vertical">' + textHtml + countdownHtml + '</div>';
        } else {
            // before_text (inline)
            mainContent = countdownHtml + ' ' + textHtml;
        }

        var iconHtml = '';
        if (window.bfFlashConfig.show_icon && window.bfFlashConfig.icon_text) {
            iconHtml = '<span class="bf-icon">' + window.bfFlashConfig.icon_text + '</span>';
        }

        var ctaHtml = '';
        if (window.bfFlashConfig.show_cta && window.bfFlashConfig.cta_href) {
            var label = window.bfFlashConfig.cta_label || 'Shop Now';
            ctaHtml = '<a class="bf-cta" href="' + window.bfFlashConfig.cta_href + '">' + label + '</a>';
        }

        var closeHtml = '';
        if (window.bfFlashConfig.allow_close) {
            closeHtml = '<button type="button" class="bf-close" aria-label="Close banner">&times;</button>';
        }

        wrap.innerHTML =
            '<div id="bf-flash-banner">' +
                '<div class="bf-left">' +
                    iconHtml +
                    mainContent +
                '</div>' +
                ctaHtml +
                closeHtml +
            '</div>';

        if (window.bfFlashConfig.allow_close) {
            var btn = wrap.querySelector('.bf-close');
            if (btn) {
                btn.addEventListener('click', function(){
                    try {
                        localStorage.setItem('bfFlashClosedAt', String(Date.now()));
                    } catch(e){}
                    removeRoot();
                });
            }
        }
    }

    function tick(){
        var now = new Date();
        render(now);
    }

    tick();
    window.__bf_flash_interval = setInterval(tick, 1000);
})();
JS;
    }

    /**
     * Output root element.
     */
    public function output_root() {
        if ( ! $this->should_show_here() ) {
            return;
        }

        echo '<div id="bf-flash-root" aria-live="polite" style="width:100%;"></div>';
    }

    /**
     * Footer fallback if theme does not call wp_body_open.
     */
    public function output_root_footer() {
        static $printed = false;
        if ( $printed ) {
            return;
        }

        if ( did_action( 'wp_body_open' ) ) {
            $printed = true;
            return;
        }

        if ( ! $this->should_show_here() ) {
            return;
        }

        echo '<div id="bf-flash-root" aria-live="polite" style="width:100%;"></div>';
        $printed = true;
    }
}
