<?php

namespace WPPropertyCalculator\Includes;

class Shortcode
{
    public function __construct()
    {
        $this->handle_hazeways_property_form_submission();
        add_shortcode('HazewaysProperty', array($this, 'hazeways_property_shortcode'));
        add_action('init', array($this, 'handle_hazeways_property_form_submission'));
    }
    function hazeways_property_shortcode($atts)
    {
        global $wpdb;

        // Extract property ID from shortcode attributes
        $atts = shortcode_atts(array('prop_id' => 0), $atts, 'HazewaysProperty');
        $prop_id = intval($atts['prop_id']);

        // Get property details
        $property = $wpdb->get_row($wpdb->prepare("SELECT * FROM {$wpdb->prefix}properties WHERE id = %d", $prop_id));

        $rates_table = $wpdb->prefix . 'rates';
        $seasons_table = $wpdb->prefix . 'seasons';

        $prodCond = !empty($_REQUEST['id']) ? 'r.id = "' . $_REQUEST['id'] . '"' : 'r.property_id = "' . $prop_id . '"';

        $queryTable = $wpdb->get_results($wpdb->prepare("
        SELECT r.id, r.price, s.start_time, s.end_time 
        FROM $rates_table r
        INNER JOIN $seasons_table s ON r.season_id = s.id
        WHERE r.property_id = %d
        ", $prop_id));

        $queryrateTableID = $wpdb->get_row($wpdb->prepare("
        SELECT r.price, s.start_time, s.end_time 
        FROM $rates_table r
        INNER JOIN $seasons_table s ON r.season_id = s.id
        WHERE $prodCond"));


        $dropdown = '<select name="select_date_range" id="select_date_range">';
        foreach ($queryTable as $rate) {
            $selected = (!empty($_REQUEST['id']) && $_REQUEST['id'] == $rate->id) ? 'selected' : '';
            $dropdown .= '<option value="' . $rate->id . '" ' . $selected . '>' . $rate->start_time . ' - ' . $rate->end_time . '</option>';
        }
        $dropdown .= '</select>';

        $startDate = isset($queryrateTableID->start_time) ? $queryrateTableID->start_time : '';
        $endDate = isset($queryrateTableID->end_time) ? $queryrateTableID->end_time : '';
        if (!empty($startDate) && !empty($endDate)) {
            $period = $startDate . ' - ' . $endDate;
            $startdate = new \DateTime($startDate);
            $enddate = new \DateTime($endDate);

            $interval = $startdate->diff($enddate);
            $nightS = $interval->days;

            $total_cost = isset($queryrateTableID->price) ? $queryrateTableID->price : '';
            $number_of_days = $nightS;
            $cost_per_day = $total_cost / $number_of_days;
            $costTotal = $cost_per_day * $nightS;
            $callingHelper = new Helpers();
            $priceTotal = $callingHelper->wp_property_calculator_format_currency($costTotal);
        } else {
            $period = '';
            $nightS = '';
            $priceTotal = '';
        }

        if (!$property) {
            return '<p>'.__('Property not found.', 'property-calculator').'</p>';
        }

        ob_start();

        PropertyCalculatorForm::render('frontend/viewfile', [
            'prop_id' => $prop_id,
            'dropdown' => $dropdown,
            'nightS' => $nightS,
            'priceTotal' => $priceTotal,
            'period' => $period
        ]);

        return ob_get_clean();
    }
    function handle_hazeways_property_form_submission()
    {
        if (isset($_POST['submit_hazeways_property_form'])) {
            global $wpdb;

            $property_id = intval($_POST['property_id']);
            $date_range = sanitize_text_field($_POST['date_range']);
            // $end_date = sanitize_text_field($_POST['end_date']);
            // $nights = intval($_POST['nights']);
            // $price = floatval($_POST['price']);
            $flexible_days = isset($_POST['flexible_days']) ? sanitize_text_field($_POST['flexible_days']) : '';
            $flexible_week = isset($_POST['flexible_week']) ? sanitize_text_field($_POST['flexible_week']) : '';
            $payment_method = isset($_POST['payment_method']) ? sanitize_text_field($_POST['payment_method']) : '';
            $adults = intval($_POST['adults']);
            $children = intval($_POST['children']);
            $infants = intval($_POST['infants']);
            $name = sanitize_text_field($_POST['name']);
            $phone = sanitize_text_field($_POST['phone']);
            $email = sanitize_email($_POST['email']);
            $comment = sanitize_textarea_field($_POST['comment']);

            list($start_date, $end_date) = explode(' - ', $date_range);

            $callHelper = new Helpers();
            $price = $callHelper->wp_property_calculator_calculate_price($property_id, $start_date, $end_date);
            $formatted_price = $callHelper->wp_property_calculator_format_currency($price);

            $email_content_array = array(
                "period" => $date_range,
                // "nights" => $nights,
                "price" => $formatted_price,
                "adults" => $adults,
                "children" => $children,
                "infants" => $infants,
                "name" => $name,
                "phone" => $phone,
                "email" => $email,
                "comment" => $comment
            );

            $callEmail = new Emailproperty();
            $callEmail->wp_property_calculator_send_email(1, $email, $email_content_array);
            echo '<div class="updated"><p>'.__('Your request has been sent successfully.', 'property-calculator').'</p></div>';
        }
    }
}