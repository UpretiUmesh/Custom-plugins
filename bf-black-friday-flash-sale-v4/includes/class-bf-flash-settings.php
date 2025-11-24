<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class BF_Flash_Settings {

    public function __construct() {
        add_action( 'admin_menu', array( $this, 'add_admin_menu' ) );
    }

    public function add_admin_menu() {
        add_options_page(
            'Black Friday Flash Sale',
            'Black Friday Flash Sale',
            'manage_options',
            'bf-flash-settings',
            array( $this, 'render_settings_page' )
        );
    }

    public function render_settings_page() {
        if ( ! current_user_can( 'manage_options' ) ) {
            return;
        }

        $active_tab = isset( $_GET['tab'] ) ? sanitize_key( $_GET['tab'] ) : 'sale';

        if ( isset( $_POST['bf_flash_save_settings'] ) ) {
            $this->save_settings();
        }

        $cfg        = bf_flash_get_config();
        $start_dt   = $cfg['start_datetime'];
        $start_date = '';
        $start_time = '';

        if ( ! empty( $start_dt ) ) {
            $parts = explode( ' ', $start_dt );
            if ( ! empty( $parts[0] ) ) {
                $start_date = $parts[0];
            }
            if ( ! empty( $parts[1] ) ) {
                $time_parts = explode( ':', $parts[1] );
                if ( count( $time_parts ) >= 2 ) {
                    $start_time = $time_parts[0] . ':' . $time_parts[1];
                }
            }
        }

        ?>
        <div class="wrap">
            <h1>Black Friday Flash Sale Settings</h1>

            <h2 class="nav-tab-wrapper">
                <a href="<?php echo esc_url( admin_url( 'options-general.php?page=bf-flash-settings&tab=sale' ) ); ?>" class="nav-tab <?php echo $active_tab === 'sale' ? 'nav-tab-active' : ''; ?>">Sale Logic</a>
                <a href="<?php echo esc_url( admin_url( 'options-general.php?page=bf-flash-settings&tab=conditions' ) ); ?>" class="nav-tab <?php echo $active_tab === 'conditions' ? 'nav-tab-active' : ''; ?>">Banner Conditions</a>
                <a href="<?php echo esc_url( admin_url( 'options-general.php?page=bf-flash-settings&tab=layout' ) ); ?>" class="nav-tab <?php echo $active_tab === 'layout' ? 'nav-tab-active' : ''; ?>">Layout & Design</a>
                <a href="<?php echo esc_url( admin_url( 'options-general.php?page=bf-flash-settings&tab=content' ) ); ?>" class="nav-tab <?php echo $active_tab === 'content' ? 'nav-tab-active' : ''; ?>">Content</a>
            </h2>

            <form method="post">
                <?php wp_nonce_field( 'bf_flash_save_settings_nonce' ); ?>
                <input type="hidden" name="bf_tab" value="<?php echo esc_attr( $active_tab ); ?>" />

                <table class="form-table" role="presentation">
                    <?php
                    switch ( $active_tab ) {
                        case 'sale':
                            ?>
                            <tr>
                                <th scope="row">Enable Sale Logic</th>
                                <td>
                                    <label>
                                        <input type="checkbox" name="enable_sale" <?php checked( $cfg['enable_sale'], 1 ); ?> />
                                        Enable discount &amp; free shipping
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Start Date</th>
                                <td>
                                    <input type="date" name="start_date" value="<?php echo esc_attr( $start_date ); ?>" />
                                    <p class="description">Site timezone: <?php echo esc_html( wp_timezone_string() ); ?></p>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Start Time</th>
                                <td>
                                    <input type="time" name="start_time" value="<?php echo esc_attr( $start_time ); ?>" />
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Duration (hours)</th>
                                <td>
                                    <input type="number" name="duration_hours" value="<?php echo esc_attr( $cfg['duration_hours'] ); ?>" min="1" />
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Discount Percent (%)</th>
                                <td>
                                    <input type="number" name="discount_percent" value="<?php echo esc_attr( $cfg['discount_percent'] ); ?>" min="0" step="0.1" />
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Free Shipping Threshold</th>
                                <td>
                                    <input type="number" name="free_shipping_threshold" value="<?php echo esc_attr( $cfg['free_shipping_threshold'] ); ?>" min="0" step="0.01" />
                                </td>
                            </tr>
                            <?php
                            break;

                        case 'conditions':
                            ?>
                            <tr>
                                <th scope="row">Enable Banner</th>
                                <td>
                                    <label>
                                        <input type="checkbox" name="enable_banner" <?php checked( $cfg['enable_banner'], 1 ); ?> />
                                        Show countdown banner
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">When to Show Banner</th>
                                <td>
                                    <label>
                                        <input type="checkbox" name="show_before_sale" <?php checked( $cfg['show_before_sale'], 1 ); ?> />
                                        Show before sale (countdown to start)
                                    </label>
                                    <br />
                                    <label>
                                        <input type="checkbox" name="show_during_sale" <?php checked( $cfg['show_during_sale'], 1 ); ?> />
                                        Show during sale (countdown to end)
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Devices</th>
                                <td>
                                    <label>
                                        <input type="checkbox" name="show_on_desktop" <?php checked( $cfg['show_on_desktop'], 1 ); ?> />
                                        Show on desktop
                                    </label>
                                    <br />
                                    <label>
                                        <input type="checkbox" name="show_on_mobile" <?php checked( $cfg['show_on_mobile'], 1 ); ?> />
                                        Show on mobile
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Pages</th>
                                <td>
                                    <select name="banner_scope">
                                        <option value="all" <?php selected( $cfg['banner_scope'], 'all' ); ?>>All pages</option>
                                        <option value="wc" <?php selected( $cfg['banner_scope'], 'wc' ); ?>>WooCommerce pages only</option>
                                        <option value="home" <?php selected( $cfg['banner_scope'], 'home' ); ?>>Home page only</option>
                                        <option value="custom" <?php selected( $cfg['banner_scope'], 'custom' ); ?>>Custom URLs</option>
                                    </select>
                                    <p class="description">For "Custom URLs", enter one URL or path per line below.</p>
                                    <textarea name="banner_custom_urls" rows="4" cols="50"><?php echo esc_textarea( $cfg['banner_custom_urls'] ); ?></textarea>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Dismiss / Close Behavior</th>
                                <td>
                                    <label>
                                        <input type="checkbox" name="allow_close" <?php checked( $cfg['allow_close'], 1 ); ?> />
                                        Allow user to close the banner
                                    </label>
                                    <br />
                                    <label>
                                        Hide for
                                        <input type="number" name="hide_after_close_hours" value="<?php echo esc_attr( $cfg['hide_after_close_hours'] ); ?>" min="0" style="width:80px;" />
                                        hours after closing
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Minimum Cart Value</th>
                                <td>
                                    <input type="number" name="min_cart_for_banner" value="<?php echo esc_attr( $cfg['min_cart_for_banner'] ); ?>" min="0" step="0.01" />
                                    <p class="description">0 means "always show". If set, banner will only show when cart subtotal is at least this amount (on WooCommerce pages).</p>
                                </td>
                            </tr>
                            <?php
                            break;

                        case 'layout':
                            ?>
                            <tr>
                                <th scope="row">Style Preset</th>
                                <td>
                                    <select name="style_preset">
                                        <option value="gold" <?php selected( $cfg['style_preset'], 'gold' ); ?>>Gold (default)</option>
                                        <option value="dark" <?php selected( $cfg['style_preset'], 'dark' ); ?>>Dark</option>
                                        <option value="minimal" <?php selected( $cfg['style_preset'], 'minimal' ); ?>>Minimal</option>
                                        <option value="custom" <?php selected( $cfg['style_preset'], 'custom' ); ?>>Custom (use colors below)</option>
                                    </select>
                                    <p class="description">Presets adjust colors and basic styling at render time. "Custom" uses your manual color settings.</p>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Banner Layout</th>
                                <td>
                                    <select name="banner_layout">
                                        <option value="top_fixed" <?php selected( $cfg['banner_layout'], 'top_fixed' ); ?>>Top – fixed (sticky)</option>
                                        <option value="top_inline" <?php selected( $cfg['banner_layout'], 'top_inline' ); ?>>Top – inline (not sticky)</option>
                                        <option value="bottom_fixed" <?php selected( $cfg['banner_layout'], 'bottom_fixed' ); ?>>Bottom – fixed (sticky)</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Container Width</th>
                                <td>
                                    <select name="banner_container">
                                        <option value="boxed" <?php selected( $cfg['banner_container'], 'boxed' ); ?>>Boxed (max 1200px)</option>
                                        <option value="full" <?php selected( $cfg['banner_container'], 'full' ); ?>>Full width</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Banner Background Color</th>
                                <td>
                                    <input type="text" name="banner_bg_color" value="<?php echo esc_attr( $cfg['banner_bg_color'] ); ?>" class="regular-text" />
                                    <p class="description">Hex color, e.g. #D4AF37</p>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Banner Text Color</th>
                                <td>
                                    <input type="text" name="banner_text_color" value="<?php echo esc_attr( $cfg['banner_text_color'] ); ?>" class="regular-text" />
                                    <p class="description">Hex color, e.g. #000000</p>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Countdown Color</th>
                                <td>
                                    <input type="text" name="countdown_color" value="<?php echo esc_attr( $cfg['countdown_color'] ); ?>" class="regular-text" />
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Font Size</th>
                                <td>
                                    <select name="banner_font_size">
                                        <option value="small" <?php selected( $cfg['banner_font_size'], 'small' ); ?>>Small</option>
                                        <option value="medium" <?php selected( $cfg['banner_font_size'], 'medium' ); ?>>Medium</option>
                                        <option value="large" <?php selected( $cfg['banner_font_size'], 'large' ); ?>>Large</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Rounded Corners</th>
                                <td>
                                    <label>
                                        <input type="checkbox" name="banner_rounded" <?php checked( $cfg['banner_rounded'], 1 ); ?> />
                                        Use rounded corners
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Top Offset (px)</th>
                                <td>
                                    <input type="number" name="banner_top_offset" value="<?php echo esc_attr( $cfg['banner_top_offset'] ); ?>" step="1" />
                                    <p class="description">Useful if your theme has a fixed header. Only affects fixed layouts.</p>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">CTA Background Color</th>
                                <td>
                                    <input type="text" name="cta_bg_color" value="<?php echo esc_attr( $cfg['cta_bg_color'] ); ?>" class="regular-text" />
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">CTA Text Color</th>
                                <td>
                                    <input type="text" name="cta_text_color" value="<?php echo esc_attr( $cfg['cta_text_color'] ); ?>" class="regular-text" />
                                </td>
                            </tr>
                            <?php
                            break;

                        case 'content':
                        default:
                            ?>
                            <tr>
                                <th scope="row">Main Banner Text</th>
                                <td>
                                    <input type="text" class="regular-text" name="banner_text_live" value="<?php echo esc_attr( $cfg['banner_text_live'] ); ?>" />
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Countdown</th>
                                <td>
                                    <label>
                                        <input type="checkbox" name="show_countdown" <?php checked( $cfg['show_countdown'], 1 ); ?> />
                                        Show countdown
                                    </label>
                                    <br /><br />
                                    <label>
                                        Position:
                                        <select name="countdown_position">
                                            <option value="before_text" <?php selected( $cfg['countdown_position'], 'before_text' ); ?>>Inline – before text</option>
                                            <option value="after_text" <?php selected( $cfg['countdown_position'], 'after_text' ); ?>>Inline – after text</option>
                                            <option value="above_text" <?php selected( $cfg['countdown_position'], 'above_text' ); ?>>Stacked – countdown above text</option>
                                            <option value="below_text" <?php selected( $cfg['countdown_position'], 'below_text' ); ?>>Stacked – countdown below text</option>
                                        </select>
                                    </label>
                                    <br /><br />
                                    <label>
                                        Layout:
                                        <select name="countdown_format">
                                            <option value="verbose" <?php selected( $cfg['countdown_format'], 'verbose' ); ?>>01 Days 02 Hours 03 Minutes 04 Seconds</option>
                                            <option value="compact_labels" <?php selected( $cfg['countdown_format'], 'compact_labels' ); ?>>01d 02h 03m 04s</option>
                                            <option value="compact_colon" <?php selected( $cfg['countdown_format'], 'compact_colon' ); ?>>01:02:03:04 (D:H:M:S)</option>
                                        </select>
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">CTA Button</th>
                                <td>
                                    <label>
                                        <input type="checkbox" name="show_cta" <?php checked( $cfg['show_cta'], 1 ); ?> />
                                        Show CTA button
                                    </label>
                                    <br /><br />
                                    <label>
                                        Label:
                                        <input type="text" name="cta_label" value="<?php echo esc_attr( $cfg['cta_label'] ); ?>" />
                                    </label>
                                    <br />
                                    <label>
                                        URL:
                                        <input type="text" class="regular-text" name="cta_href" value="<?php echo esc_attr( $cfg['cta_href'] ); ?>" />
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Icon / Emoji</th>
                                <td>
                                    <label>
                                        <input type="checkbox" name="show_icon" <?php checked( $cfg['show_icon'], 1 ); ?> />
                                        Show icon before text
                                    </label>
                                    <br />
                                    <label>
                                        Icon text:
                                        <input type="text" name="icon_text" value="<?php echo esc_attr( $cfg['icon_text'] ); ?>" style="width:80px;" />
                                    </label>
                                </td>
                            </tr>
                            <?php
                            break;
                    }
                    ?>
                </table>

                <p class="submit">
                    <button type="submit" name="bf_flash_save_settings" class="button button-primary">Save Settings</button>
                </p>
            </form>
        </div>
        <?php
    }

    private function save_settings() {
        if ( ! isset( $_POST['bf_flash_save_settings'] ) ) {
            return;
        }

        check_admin_referer( 'bf_flash_save_settings_nonce' );

        $current = bf_flash_get_config();
        $tab     = isset( $_POST['bf_tab'] ) ? sanitize_key( $_POST['bf_tab'] ) : 'sale';

        switch ( $tab ) {
            case 'sale':
                $start_date  = isset( $_POST['start_date'] ) ? sanitize_text_field( $_POST['start_date'] ) : '';
                $start_time  = isset( $_POST['start_time'] ) ? sanitize_text_field( $_POST['start_time'] ) : '00:00';
                if ( empty( $start_time ) ) {
                    $start_time = '00:00';
                }

                $start_datetime = '';
                if ( ! empty( $start_date ) ) {
                    $start_datetime = $start_date . ' ' . $start_time . ':00';
                }

                $current['enable_sale']             = isset( $_POST['enable_sale'] ) ? 1 : 0;
                $current['start_datetime']          = $start_datetime;
                $current['duration_hours']          = isset( $_POST['duration_hours'] ) ? (int) $_POST['duration_hours'] : $current['duration_hours'];
                $current['discount_percent']        = isset( $_POST['discount_percent'] ) ? floatval( $_POST['discount_percent'] ) : $current['discount_percent'];
                $current['free_shipping_threshold'] = isset( $_POST['free_shipping_threshold'] ) ? floatval( $_POST['free_shipping_threshold'] ) : $current['free_shipping_threshold'];
                break;

            case 'conditions':
                $current['enable_banner']          = isset( $_POST['enable_banner'] ) ? 1 : 0;
                $current['show_before_sale']       = isset( $_POST['show_before_sale'] ) ? 1 : 0;
                $current['show_during_sale']       = isset( $_POST['show_during_sale'] ) ? 1 : 0;
                $current['show_on_desktop']        = isset( $_POST['show_on_desktop'] ) ? 1 : 0;
                $current['show_on_mobile']         = isset( $_POST['show_on_mobile'] ) ? 1 : 0;
                $current['banner_scope']           = isset( $_POST['banner_scope'] ) ? sanitize_key( $_POST['banner_scope'] ) : $current['banner_scope'];
                $current['banner_custom_urls']     = isset( $_POST['banner_custom_urls'] ) ? wp_kses_post( wp_unslash( $_POST['banner_custom_urls'] ) ) : $current['banner_custom_urls'];
                $current['allow_close']            = isset( $_POST['allow_close'] ) ? 1 : 0;
                $current['hide_after_close_hours'] = isset( $_POST['hide_after_close_hours'] ) ? (int) $_POST['hide_after_close_hours'] : $current['hide_after_close_hours'];
                $current['min_cart_for_banner']    = isset( $_POST['min_cart_for_banner'] ) ? floatval( $_POST['min_cart_for_banner'] ) : $current['min_cart_for_banner'];
                break;

            case 'layout':
                $current['style_preset']      = isset( $_POST['style_preset'] ) ? sanitize_key( $_POST['style_preset'] ) : $current['style_preset'];
                $current['banner_layout']     = isset( $_POST['banner_layout'] ) ? sanitize_key( $_POST['banner_layout'] ) : $current['banner_layout'];
                $current['banner_container']  = isset( $_POST['banner_container'] ) ? sanitize_key( $_POST['banner_container'] ) : $current['banner_container'];
                $current['banner_bg_color']   = isset( $_POST['banner_bg_color'] ) ? sanitize_hex_color( $_POST['banner_bg_color'] ) : $current['banner_bg_color'];
                $current['banner_text_color'] = isset( $_POST['banner_text_color'] ) ? sanitize_hex_color( $_POST['banner_text_color'] ) : $current['banner_text_color'];
                $current['countdown_color']   = isset( $_POST['countdown_color'] ) ? sanitize_hex_color( $_POST['countdown_color'] ) : $current['countdown_color'];
                $current['banner_font_size']  = isset( $_POST['banner_font_size'] ) ? sanitize_key( $_POST['banner_font_size'] ) : $current['banner_font_size'];
                $current['banner_rounded']    = isset( $_POST['banner_rounded'] ) ? 1 : 0;
                $current['banner_top_offset'] = isset( $_POST['banner_top_offset'] ) ? (int) $_POST['banner_top_offset'] : $current['banner_top_offset'];
                $current['cta_bg_color']      = isset( $_POST['cta_bg_color'] ) ? sanitize_hex_color( $_POST['cta_bg_color'] ) : $current['cta_bg_color'];
                $current['cta_text_color']    = isset( $_POST['cta_text_color'] ) ? sanitize_hex_color( $_POST['cta_text_color'] ) : $current['cta_text_color'];
                break;

            case 'content':
            default:
                $current['banner_text_live']   = isset( $_POST['banner_text_live'] ) ? sanitize_text_field( $_POST['banner_text_live'] ) : $current['banner_text_live'];
                $current['show_countdown']     = isset( $_POST['show_countdown'] ) ? 1 : 0;
                $current['countdown_position'] = isset( $_POST['countdown_position'] ) ? sanitize_key( $_POST['countdown_position'] ) : $current['countdown_position'];
                $current['countdown_format']   = isset( $_POST['countdown_format'] ) ? sanitize_key( $_POST['countdown_format'] ) : $current['countdown_format'];
                $current['show_cta']           = isset( $_POST['show_cta'] ) ? 1 : 0;
                $current['cta_label']          = isset( $_POST['cta_label'] ) ? sanitize_text_field( $_POST['cta_label'] ) : $current['cta_label'];
                $current['cta_href']           = isset( $_POST['cta_href'] ) ? esc_url_raw( $_POST['cta_href'] ) : $current['cta_href'];
                $current['show_icon']          = isset( $_POST['show_icon'] ) ? 1 : 0;
                $current['icon_text']          = isset( $_POST['icon_text'] ) ? sanitize_text_field( $_POST['icon_text'] ) : $current['icon_text'];
                break;
        }

        update_option( 'bf_flash_settings', $current );

        echo '<div class="updated"><p>Black Friday Flash Sale settings saved.</p></div>';
    }
}
