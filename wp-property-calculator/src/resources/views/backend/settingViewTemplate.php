<?php 
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
?>
<div class="wrap">
    <h1><?php _e('Settings', 'property-calculator');?></h1>
    <form method="post">
        <table class="form-table">
            <tr valign="top">
                <th scope="row"><label for="currency"><?php _e('Currency', 'property-calculator');?></label></th>
                <td>
                    <select name="currency" id="currency">
                        <option value="INR" <?php selected($currency, 'INR'); ?>>INR</option>
                        <option value="USD" <?php selected($currency, 'USD'); ?>>USD</option>
                        <option value="EUR" <?php selected($currency, 'EUR'); ?>>EUR</option>
                    </select>
                </td>
            </tr>
            <tr valign="top">
                <th scope="row"><label for="currency_format"><?php _e('Currency Format', 'property-calculator');?></label></th>
                <td>
                    <select name="currency_format" id="currency_format">
                        <option value="en_US" <?php selected($currency_format, 'en_US'); ?>>en_US</option>
                        <option value="en_CA" <?php selected($currency_format, 'en_CA'); ?>>en_CA</option>
                        <option value="de_DE" <?php selected($currency_format, 'de_DE'); ?>>de_DE</option>
                        <option value="fr_CA" <?php selected($currency_format, 'fr_CA'); ?>>fr_CA</option>
                        <option value="en_GB" <?php selected($currency_format, 'en_GB'); ?>>en_GB</option>
                    </select>
                </td>
            </tr>
        </table>
        <p class="submit"><input type="submit" name="submit_settings" class="button-primary" value="<?php _e('Save Settings', 'property-calculator');?>" />
        </p>
    </form>
</div>