<?php

namespace WPPropertyCalculator\Includes;

class Helpers
{
    function wp_property_calculator_get_currency_symbol($currency)
    {
        $symbols = array(
            'INR' => '₹',
            'USD' => '$',
            'EUR' => '€'
        );
        return isset($symbols[$currency]) ? $symbols[$currency] : '';
    }
    function wp_property_calculator_format_currency($value)
    {
        $currency = get_option('wp_property_calculator_currency', 'USD');
        $format = get_option('wp_property_calculator_currency_format', 'en_US');

        $symbol = $this->wp_property_calculator_get_currency_symbol($currency);

        // Apply number formatting based on locale
        switch ($format) {
            case 'en_US':
            case 'en_CA':
            case 'en_GB':
                $formatted_value = number_format($value, 2, '.', ',');
                break;
            case 'de_DE':
                $formatted_value = number_format($value, 2, ',', '.');
                break;
            case 'fr_CA':
                $formatted_value = number_format($value, 2, ',', ' ');
                break;
            default:
                $formatted_value = number_format($value, 2, '.', ',');
                break;
        }

        return $symbol . ' ' . $formatted_value;
    }
    function wp_property_calculator_calculate_price($property_id, $start_date, $end_date)
    {
        global $wpdb;

        // Get seasons and rates
        $rates_table = $wpdb->prefix . 'rates';
        $seasons_table = $wpdb->prefix . 'seasons';

        // Fetch rates
        $query = $wpdb->prepare("
        SELECT r.price, s.start_time, s.end_time 
        FROM $rates_table r
        INNER JOIN $seasons_table s ON r.season_id = s.id
        WHERE r.property_id = %d
    ", $property_id);

        $rates = $wpdb->get_results($query);

        if (!$rates) {
            return 0; // No rates found for the property
        }

        // Calculate total price
        $total_price = 0;
        $current_date = strtotime($start_date);
        $end_date = strtotime($end_date);

        while ($current_date <= $end_date) {
            foreach ($rates as $rate) {
                $season_start = strtotime($rate->start_time);
                $season_end = strtotime($rate->end_time);
                // $season_start = strtotime(date('Y') . '-' . $rate->start_time);
                // $season_end = strtotime(date('Y') . '-' . $rate->end_time);

                // Handle crossing year boundary for seasons
                if ($season_start > $season_end) {
                    if ($current_date >= $season_start || $current_date <= $season_end) {
                        $total_price += $rate->price;
                        break;
                    }
                } else {
                    if ($current_date >= $season_start && $current_date <= $season_end) {
                        $total_price += $rate->price;
                        break;
                    }
                }
            }
            $current_date = strtotime('+1 day', $current_date);
        }

        return $total_price;
    }
}
