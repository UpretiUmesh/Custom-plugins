<?php

class sampleProductCart
{

    public function __construct()
    {
        // $this->custoMiniCart();
    }

    public static function custoMiniCart()
    {
        // Custom mini-cart template code
        if (class_exists('WooCommerce') && WC()->cart) {
            ?>
            <div class="custom-mini-cart">
                <ul class="custom-mini-cart-items">
                    <?php
                    foreach (WC()->cart->get_cart() as $cart_item_key => $cart_item) {
                        $_product = apply_filters('woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key);
                        $product_id = apply_filters('woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key);

                        if ($_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters('woocommerce_widget_cart_item_visible', true, $cart_item, $cart_item_key)) {
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
                    }
                    ?>
                </ul>
                <!-- <div class="custom-mini-cart-footer">
                    <a href="<?php echo esc_url(wc_get_cart_url()); ?>" class="custom-mini-cart-view-cart">View Cart</a>
                    <a href="<?php echo esc_url(wc_get_checkout_url()); ?>" class="custom-mini-cart-checkout">Checkout</a>
                </div> -->
            </div>


            <?php
        }
    }
}