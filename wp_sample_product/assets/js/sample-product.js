jQuery(document).ready(function ($) {
    function updateCart() {
        var sampleProductId = sampleProductData.product_id; // Store the sample product ID

        // Common AJAX settings
        var ajaxSettings = {
            type: 'POST',
            url: wc_add_to_cart_params.ajax_url, // WooCommerce AJAX URL
            dataType: 'json',
            success: function (response) {
                if (response.success) {
                    // Update cart contents and item count
                    $('.custom-mini-cart-items').html(response.data.cart_content);
                    $('.custom-mini-cart').find('.custom-mini-cart-footer').html(response.data.cart_totals);

                    // Update the item count on the button
                    var itemCount = response.data.cart_item_count || 0;
                    $("#sample-cart-button .cart-item-count").text(itemCount);

                    // Check if the sample product was removed and update button text
                    if (response.data.sample_product_removed) {
                        $("#add-sample-button").text("Add Sample").prop("disabled", false);
                    }

                    // Close the modal if the cart is empty
                    if ($('.custom-mini-cart-items').children().length === 0) {
                        $('#sample-cart-modal').modal('hide');
                    }
                } else {
                    alert(response.data || 'Failed to update the cart.');
                }
            },
            error: function () {
                alert('Error processing the request.');
            }
        };

        // Add sample product to cart
        $("#add-sample-button").on("click", function (e) {
            e.preventDefault();

            $.ajax($.extend({}, ajaxSettings, {
                url: sampleProductData.ajax_url,
                data: {
                    action: "add_sample_to_cart",
                    product_id: sampleProductId,
                    security: sampleProductData.nonce // Include nonce
                },
                success: function (response) {
                    if (response.success) {
                        $("#add-sample-button").text("Sample Added").prop("disabled", true);
                        $("#sample-cart-modal .sample-cart-items").html(response.data.cart_html);
                        $('#sample-cart-modal').modal('show'); // Show the modal

                        // Update the item count on the button
                        $("#sample-cart-button .cart-item-count").text(response.data.cart_item_count);
                    } else {
                        alert(response.data || 'Failed to add the sample to your cart.');
                    }
                }
            }));
        });

        // Show mini-cart modal
        $("#sample-cart-button").on("click", function () {
            $('#sample-cart-modal').modal('show');
        });

        // Remove item from cart
        $(document).on('click', '.custom-remove-from-cart', function (e) {
            e.preventDefault();

            var cartItemKey = $(this).data('cart_item_key');
            var button = $("#add-sample-button");

            $.ajax($.extend({}, ajaxSettings, {
                data: {
                    'action': 'remove_cart_item',
                    'cart_item_key': cartItemKey
                },
                success: function (response) {
                    if (response.success) {
                        // Check if the removed item was the sample product
                        if (response.data.sample_product_removed) {
                            button.text("Add Sample").prop("disabled", false);
                        }

                        // Update cart contents and item count
                        $('.custom-mini-cart-items').html(response.data.cart_content);
                        $('.custom-mini-cart').find('.custom-mini-cart-footer').html(response.data.cart_totals);

                        // Update the item count on the button
                        var itemCount = response.data.cart_item_count || 0;
                        $("#sample-cart-button .cart-item-count").text(itemCount);

                        // Close the modal if the cart is empty
                        if ($('.custom-mini-cart-items').children().length === 0) {
                            $('#sample-cart-modal').modal('hide');
                        }
                    } else {
                        alert('Failed to remove the item.');
                    }
                }
            }));
        });
    }

    // Run the function on document ready
    updateCart();

    // Also run the function on window load to ensure it executes after all resources are fully loaded
    $(window).on('load', function () {
        updateCart();
    });
});
