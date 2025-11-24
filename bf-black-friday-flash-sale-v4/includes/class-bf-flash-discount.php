<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class BF_Flash_Discount {

    public function __construct() {
        add_action( 'woocommerce_cart_calculate_fees', array( $this, 'apply_discount' ), 20, 1 );
        add_filter( 'woocommerce_package_rates', array( $this, 'apply_free_shipping' ), 20, 2 );
    }

    /**
     * Apply discount as a negative fee during live sale window.
     */
    public function apply_discount( $cart ) {
        if ( is_admin() && ! defined( 'DOING_AJAX' ) ) {
            return;
        }
        if ( ! WC()->cart || WC()->cart->is_empty() ) {
            return;
        }

        $cfg = bf_flash_get_config();
        if ( empty( $cfg['enable_sale'] ) ) {
            return;
        }

        if ( ! bf_flash_is_live_window() ) {
            return;
        }

        $discount_percent = floatval( $cfg['discount_percent'] );
        $cart_subtotal    = floatval( $cart->get_subtotal() ); // excludes taxes

        if ( $cart_subtotal <= 0 || $discount_percent <= 0 ) {
            return;
        }

        $decimals        = wc_get_price_decimals();
        $discount_amount = round( $cart_subtotal * ( $discount_percent / 100 ), $decimals );
        if ( $discount_amount <= 0 ) {
            return;
        }

        $label   = sprintf( 'Black Friday %d%% OFF — Flash Sale', intval( $discount_percent ) );
        $taxable = false; // change to true if discount is taxable
        $cart->add_fee( $label, -1 * $discount_amount, $taxable );
    }

    /**
     * Free shipping when cart subtotal >= threshold (live only).
     */
    public function apply_free_shipping( $rates, $package ) {
        if ( is_admin() && ! defined( 'DOING_AJAX' ) ) {
            return $rates;
        }

        $cfg = bf_flash_get_config();
        if ( empty( $cfg['enable_sale'] ) ) {
            return $rates;
        }

        if ( ! bf_flash_is_live_window() ) {
            return $rates;
        }

        $threshold = floatval( $cfg['free_shipping_threshold'] );
        if ( $threshold <= 0 ) {
            return $rates;
        }

        // Use cart subtotal (pre-tax) if available
        $cart_subtotal = 0;
        if ( WC()->cart ) {
            $cart_subtotal = floatval( WC()->cart->get_subtotal() );
        } elseif ( ! empty( $package['contents'] ) ) {
            foreach ( $package['contents'] as $item ) {
                $product       = $item['data'];
                $cart_subtotal += floatval( $product->get_price() ) * intval( $item['quantity'] );
            }
        }

        if ( $cart_subtotal >= $threshold ) {
            foreach ( $rates as $rate_id => $rate ) {
                $rates[ $rate_id ]->cost  = 0;
                $rates[ $rate_id ]->label = 'Free Shipping';
                $rates[ $rate_id ]->taxes = array();
            }
        }

        return $rates;
    }
}
