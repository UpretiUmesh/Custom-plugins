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
                alert("There was an error adding the sample to your cart.");
            },
        });
    });

    $("#sample-cart-button").on("click", function () {
        $('#sample-cart-modal').modal('show');
    });
});
