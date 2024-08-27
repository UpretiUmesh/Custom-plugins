// Remove default related products
remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );

function custom_display_related_products() {
    global $post;

    // Get the related products
    $related_products = wc_get_related_products( $post->ID, 6 ); // Change 6 to the number of related products you want

    if ( !empty( $related_products ) ) {
        echo '<section class="custom-related-products related products">';
        echo '<h2>' . esc_html__( 'Related products', 'woocommerce' ) . '</h2>';

        // Start the loop to display related products
        echo '<ul class="products">';
        foreach ( $related_products as $related_product_id ) {
            $post_object = get_post( $related_product_id );

            setup_postdata( $GLOBALS['post'] =& $post_object );

            // Display the product
            wc_get_template_part( 'content', 'product' );
        }
        echo '</ul>';

        // Restore original Post Data
        wp_reset_postdata();

        echo '</section>';
    }
}
add_action( 'woocommerce_after_single_product', 'custom_display_related_products', 20 );