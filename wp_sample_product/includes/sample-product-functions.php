<?php

// Add the Free Sample button after the Add to Cart button
function add_free_sample_button() {
    global $product;

    // Only display for simple products
    if ($product->is_type('simple')) {
        echo '<button id="add-sample-button" class="button alt">Get Free Sample</button>';
    }
}
add_action('woocommerce_after_add_to_cart_button', 'add_free_sample_button');

// Handle AJAX request to add the sample product to the cart
function handle_add_sample_to_cart() {
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
        woocommerce_mini_cart(); // This function outputs the mini cart
        $cart_html = ob_get_clean();

        wp_send_json_success(array('cart_html' => $cart_html));
    } else {
        wp_send_json_error('Sample already in cart');
    }

    
}
add_action('wp_ajax_add_sample_to_cart', 'handle_add_sample_to_cart');
add_action('wp_ajax_nopriv_add_sample_to_cart', 'handle_add_sample_to_cart');


// Modify the price to zero for the sample product
function modify_sample_price($cart_object) {
    foreach ($cart_object->get_cart() as $cart_item_key => $cart_item) {
        if (isset($cart_item['is_sample']) && $cart_item['is_sample']) {
            $cart_item['data']->set_price(0);
        }
    }
}
add_action('woocommerce_before_calculate_totals', 'modify_sample_price');

// Ensure only one sample product can be added to the cart
function limit_sample_product_quantity($passed, $product_id, $quantity, $variation_id = 0, $variations = array()) {
    foreach (WC()->cart->get_cart() as $cart_item) {
        if ($cart_item['product_id'] == $product_id && isset($cart_item['is_sample']) && $cart_item['is_sample']) {
            wc_add_notice(__('You can only add one sample of this product.'), 'error');
            return false;
        }
    }
    return $passed;
}
add_filter('woocommerce_add_to_cart_validation', 'limit_sample_product_quantity', 10, 5);

// Add custom data to the cart item to mark it as a sample
function add_sample_cart_item_data($cart_item_data, $product_id) {
    if (isset($_POST['add_sample'])) {
        $cart_item_data['is_sample'] = true;
    }
    return $cart_item_data;
}
add_filter('woocommerce_add_cart_item_data', 'add_sample_cart_item_data', 10, 2);

// Update the cart item key to differentiate between normal and sample products
function update_cart_item_key($cart_item_key, $product_id, $variation_id, $cart_item_data) {
    if (isset($cart_item_data['is_sample'])) {
        $cart_item_key .= '_sample';
    }
    return $cart_item_key;
}
add_filter('woocommerce_cart_item_key', 'update_cart_item_key', 10, 4);

// Display sample product information in the cart
function display_sample_in_cart($item_data, $cart_item) {
    if (isset($cart_item['is_sample']) && $cart_item['is_sample']) {
        $item_data[] = array(
            'name' => __('Sample'),
            'value' => __('Yes'),
        );
    }
    return $item_data;
}
add_filter('woocommerce_get_item_data', 'display_sample_in_cart', 10, 2);

function customModal(){
    echo '<div id="sample-cart-modal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Sample Cart</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body d-flex align-items-center">
                <div class="sample-cart-info">
                    <h6>Order FREE samples delivered to you. Express shipping Australia-wide.</h6>
                </div>
                <div class="sample-cart-items d-flex">
                    <!-- Repeat this div for each sample item in the cart -->
                    <!-- Add more sample items as needed -->
                </div>
            </div>
            <div class="modal-footer">
                <a href="/cart/" class="btn btn-primary">Checkout</a>
            </div>
        </div>
    </div>
</div>
';
}
add_action('wp_footer', 'customModal'); // Ensure the modal is included in the footer


// Add the Sample Cart button to the footer
function add_sample_cart_button() {
    ?>
    <button id="sample-cart-button" class="sample-cart-button">
        View Sample Cart
    </button>
    <?php
}
add_action('wp_footer', 'add_sample_cart_button');
