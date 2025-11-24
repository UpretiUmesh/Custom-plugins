<?php
namespace TermsEnforcer\Includes;
class Class_term_checkbox
{
    public function __construct()
    {
        add_action('woocommerce_review_order_before_submit', [$this, 'add_terms_checkbox'],20);
        add_action('woocommerce_checkout_process', [$this, 'validate_terms_checkbox']);
        add_action('woocommerce_checkout_update_order_meta', [$this, 'save_terms_checkbox']);
        add_action('woocommerce_admin_order_data_after_billing_address', [$this, 'show_terms_checkbox_in_admin'], 10, 1);
    }    
    public function add_terms_checkbox()
    {
        woocommerce_form_field('te_terms_checkbox', [
            'type'    => 'checkbox',
            'class'   => ['form-row terms'],
            'label'   => __('I have read and agree to the Terms and Conditions', 'terms-enforcer'),
            'required' => true,
        ], WC()->checkout->get_value('te_terms_checkbox'));
    }
    public function validate_terms_checkbox()
    {
        if (empty($_POST['te_terms_checkbox'])) {
            wc_add_notice(__('You must accept the Terms and Conditions to place your order.', 'terms-enforcer'), 'error');
        }
    }
    public function save_terms_checkbox($order_id)
    {
        if (!empty($_POST['te_terms_checkbox'])) {
            update_post_meta($order_id, 'te_terms_checkbox', '1');
        }
    }
    public function show_terms_checkbox_in_admin($order)
    {
        $accepted = get_post_meta($order->get_id(), 'te_terms_checkbox', true);
        echo '<p><strong>' . __('Terms Accepted:', 'terms-enforcer') . '</strong> ' . ($accepted ? 'Yes' : 'No') . '</p>';
    }

}
