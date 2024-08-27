jQuery(document).ready(function ($) {
    $("#add-sample-button").on("click", function (e) {
        e.preventDefault();
     
        $.ajax({
            url: sampleProductData.ajax_url,
            type: "POST",
            data: {
                action: "add_sample_to_cart",
                product_id: sampleProductData.product_id,
                security: sampleProductData.nonce // Include nonce
            },
            
            success: function (response) {
                if (response.success) {
                    // Load the returned cart HTML into the modal
                    $("#add-sample-button").text("Sample Added").prop("disabled", true);
                    $("#sample-cart-modal .sample-cart-items").html(response.data.cart_html);
                    $('#sample-cart-modal').modal('show'); // Show the modal

                    // Optional: Redirect to cart page after showing modal
                    // window.location.href = currentUrl + "/cart/";
                } else {
                    alert(response.data);
                }
            },
            error: function () {
                alert('not working');
                return false;
                alert("There was an error adding the sample to your cart.");
            },
        });
    });

    $("#sample-cart-button").on("click", function () {
        $('#sample-cart-modal').modal('show');
    });
});
jQuery(document).ready(function ($) {
    // Handle the removal of items from the mini cart via AJAX
    $(document).on('click', '.custom-remove-from-cart', function (e) {
        e.preventDefault();

        var cartItemKey = $(this).data('cart_item_key');
        var button = $(this);

        $.ajax({
            type: 'POST',
            url: wc_add_to_cart_params.ajax_url, // WooCommerce AJAX URL
            data: {
                'action': 'remove_cart_item',
                'cart_item_key': cartItemKey
            },
            success: function (response) {
                if (response.success) {
                    // Refresh the mini cart contents
                    $('.custom-mini-cart-items').html(response.data.cart_content);
                    
                    // Optionally update cart totals or other elements
                    $('.custom-mini-cart').find('.custom-mini-cart-footer').html(response.data.cart_totals);
                } else {
                    alert('Failed to remove the item.');
                }
            },
            error: function () {
                alert('Error removing the item from the cart.');
            }
        });
    });
});
