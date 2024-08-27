<?php

class sampleProductModal
{

    public function __construct()
    {
        add_action('wp_footer', array($this, 'customModal'));
        add_action('wp_footer', array($this, 'add_sample_cart_button'));
    }
    public static function customModal()
    {
        $sampleOptions = get_option('spp_plugin_settings',);
        ?>
        <div id="sample-cart-modal" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title"><?= $sampleOptions['spp_modal_head_text'] ?></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div class="sample-cart-info">
                            <h6><?= $sampleOptions['spp_modal_body_text'] ?></h6>
                        </div>
                    </div>
                    <div class="modal-body d-flex align-items-center">
                        <div class="sample-cart-items d-flex">
                            <!-- Repeat this div for each sample item in the cart -->
                            <!-- Add more sample items as needed -->
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a href="<?php echo esc_url(wc_get_checkout_url()); ?>" class="btn btn-primary">Checkout</a>
                    </div>
                </div>
            </div>
        </div>
        <?php

    }

    public function add_sample_cart_button()
    {
        $sampleOptions = get_option('spp_plugin_settings',);
        echo '<button id="sample-cart-button" class="sample-cart-button">'.$sampleOptions['spp_view_modal_button'].'<span class="cart-count"></span></button>';

    }

}