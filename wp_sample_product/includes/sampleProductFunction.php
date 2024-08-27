<?php

class sampleProductFunction
{
    public function __construct()
    {
        add_action('woocommerce_after_add_to_cart_button', array($this, 'add_free_sample_button'));
        add_action('wp_ajax_add_sample_to_cart', array($this, 'handle_add_sample_to_cart'));
        add_action('wp_ajax_nopriv_add_sample_to_cart', array($this, 'handle_add_sample_to_cart'));

        add_action('woocommerce_before_calculate_totals', array($this, 'modify_sample_price'));
        add_filter('woocommerce_add_to_cart_validation', array($this, 'limit_sample_product_quantity'), 10, 5);
        add_filter('woocommerce_add_cart_item_data', array($this, 'add_sample_cart_item_data'), 10, 2);
        add_filter('woocommerce_cart_item_key', array($this, 'update_cart_item_key'), 10, 4);
        add_filter('woocommerce_get_item_data', array($this, 'display_sample_in_cart'), 10, 2);

        add_action('wp_ajax_remove_cart_item', array($this, 'custom_remove_cart_item'));
        add_action('wp_ajax_nopriv_remove_cart_item', array($this, 'custom_remove_cart_item'));
        
        
    }
    public function add_free_sample_button()
    {
        global $product;

        $sampleOptions = get_option('spp_plugin_settings', '');
        
        // Only display for simple products
        if ($sampleOptions['spp_enable_product_type']) {
            $current_product_id = get_the_ID(); 
            $is_in_cart = false;
            
            foreach ( WC()->cart->get_cart() as $cart_item ) {
                if ( $cart_item['product_id'] == $current_product_id ) {
                    $is_in_cart = true;
                    break;
                }
            }
            if ( $is_in_cart ) {
                echo '<button id="add-sample-button" class="button alt">'.$sampleOptions['spp_custom_button_text_after'].'</button>';
            } else {
                 echo 'cart not added';
                echo '<button id="add-sample-button" class="button alt">'.$sampleOptions['spp_custom_button_text_before'].'</button>';
            }
           
        }
    }
    public function handle_add_sample_to_cart()
    {
        check_ajax_referer('add_sample_nonce', 'security');

        if (!isset($_POST['product_id'])) {
            wp_send_json_error('No product ID provided');
        }

        $product_id = intval($_POST['product_id']);
        $found = false;

        foreach (WC()->cart->get_cart() as $cart_item_key => $values) {
            if ($values['product_id'] == $product_id && isset($values['is_sample'])) {
                $found = true;
                break;
            }
        }
        if (!$found) {
            WC()->cart->add_to_cart($product_id, 1, 0, array(), array('is_sample' => true));
            wc_add_notice(__('Sample added to your cart.'), 'success');

            // Get cart contents for the response
            ob_start();
            sampleProductCart::custoMiniCart(); // This function outputs the mini cart
            $cart_html = ob_get_clean();

            wp_send_json_success(array(
                'cart_html' => $cart_html,
                'cart_item_count' => WC()->cart->get_cart_contents_count(),
                'cart_totals' => WC()->cart->get_cart_total(),
                'sample_product_removed' => $removed_product_id == $sample_product_id
            ));
        } else {
            wp_send_json_error('Sample already in cart');
        }

    }
    public function modify_sample_price($cart_object)
    {
        foreach ($cart_object->get_cart() as $cart_item_key => $cart_item) {
            if (isset($cart_item['is_sample']) && $cart_item['is_sample']) {
                $cart_item['data']->set_price(0);
            }
        }
    }
    public function limit_sample_product_quantity($passed, $product_id, $quantity, $variation_id = 0, $variations = array())
    {
        foreach (WC()->cart->get_cart() as $cart_item) {
            if ($cart_item['product_id'] == $product_id && isset($cart_item['is_sample']) && $cart_item['is_sample']) {
                wc_add_notice(__('You can only add one sample of this product.'), 'error');
                return false;
            }
        }
        return $passed;
    }
    public function add_sample_cart_item_data($cart_item_data, $product_id)
    {
        if (isset($_POST['add_sample'])) {
            $cart_item_data['is_sample'] = true;
        }
        return $cart_item_data;
    }
    public function update_cart_item_key($cart_item_key, $product_id, $variation_id, $cart_item_data)
    {
        if (isset($cart_item_data['is_sample'])) {
            $cart_item_key .= '_sample';
        }
        return $cart_item_key;
    }
    public function display_sample_in_cart($item_data, $cart_item)
    {
        if (isset($cart_item['is_sample']) && $cart_item['is_sample']) {
            $item_data[] = array(
                'name' => __('Sample'),
                'value' => __('Yes'),
            );
        }
        return $item_data;
    }
    public function custom_remove_cart_item()
    {
        $cart_item_key = sanitize_text_field($_POST['cart_item_key']);
    
        if (WC()->cart->remove_cart_item($cart_item_key)) {
            // Get updated cart content
            ob_start();
            foreach (WC()->cart->get_cart() as $cart_item_key => $cart_item) {
                $_product = apply_filters('woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key);
                $product_name = apply_filters('woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key);
                $thumbnail = apply_filters('woocommerce_cart_item_thumbnail', $_product->get_image(), $cart_item, $cart_item_key);
                $product_price = apply_filters('woocommerce_cart_item_price', WC()->cart->get_product_price($_product), $cart_item, $cart_item_key);
                ?>
                <li class="custom-mini-cart-item">
                    <?php echo $thumbnail; ?>
                    <div class="custom-mini-cart-item-details">
                        <h5><?php echo $product_name; ?></h5>
                        <span class="custom-mini-cart-item-price"><?php echo $product_price; ?></span>
                        <a href="#" class="custom-remove-from-cart"
                            data-cart_item_key="<?php echo esc_attr($cart_item_key); ?>">×</a>
                    </div>
                </li>
                <?php
            }
            $mini_cart = ob_get_clean();
    
            // Get updated cart totals (if needed)
            ob_start();
            wc_get_template('cart/cart-totals.php');
            $cart_totals = ob_get_clean();
    
            wp_send_json_success(array(
                'cart_content' => $mini_cart,
                'cart_totals' => $cart_totals,
                'cart_count' => WC()->cart->get_cart_contents_count()
            ));
        } else {
            wp_send_json_error('Error removing item from cart.');
        }
    }
}







