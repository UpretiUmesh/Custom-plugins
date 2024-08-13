<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
global $wpdb;

$rates_table = $wpdb->prefix . 'rates';
$properties_table = $wpdb->prefix . 'properties';
$seasons_table = $wpdb->prefix . 'seasons';
?>
<div class="wrap">
    <h1><?php _e('Rates', 'property-calculator');?></h1>
    <form method="post">
        <table class="form-table">
            <tr valign="top">
                <th scope="row"><label for="price"><?php _e('Price', 'property-calculator');?></label></th>
                <td><input type="number" step="0.01" name="price" id="price" class="regular-text" required /></td>
            </tr>
            <tr valign="top">
                <th scope="row"><label for="property_id"><?php _e('Property', 'property-calculator');?></label></th>
                <td>
                    <select name="property_id" id="property_id" required>
                        <option value=""><?php _e('Select Property', 'property-calculator');?></option>
                        <?php
                        $properties = $wpdb->get_results("SELECT id, name FROM $properties_table");
                        foreach ($properties as $property) {
                            echo '<option value="' . esc_attr($property->id) . '">' . esc_html($property->name) . '</option>';
                        }
                        ?>
                    </select>
                </td>
            </tr>
            <tr valign="top">
                <th scope="row"><label for="season_id"><?php _e('Season', 'property-calculator');?></label></th>
                <td>
                    <select name="season_id" id="season_id" required>
                        <option value=""><?php _e('Select Season', 'property-calculator');?></option>
                        <?php
                        $seasons = $wpdb->get_results("SELECT id, name FROM $seasons_table");
                        foreach ($seasons as $season) {
                            echo '<option value="' . esc_attr($season->id) . '">' . esc_html($season->name) . '</option>';
                        }
                        ?>
                    </select>
                </td>
            </tr>
        </table>
        <p class="submit"><input type="submit" name="submit_rate" class="button-primary" value="<?php _e('Add Rate', 'property-calculator');?>" /></p>
    </form>

    <h2><?php _e('Existing Rates', 'property-calculator');?></h2>
    <form method="post">
        <input type="hidden" name="page" value="property-calculator-rates">
    </form>
</div>