<?php
namespace TermsEnforcer\Includes;
class Class_consent_logger{
    public function __construct() {
        add_action('woocommerce_checkout_update_order_meta', [$this, 'log_consent']);
    }

    public function log_consent($order_id) {
        if (isset($_POST['terms'])) {
            update_post_meta($order_id, '_te_terms_consent_timestamp', current_time('mysql'));
        }
    }
}