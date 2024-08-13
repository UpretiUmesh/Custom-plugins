<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
?>
<div class="wrap">
    <h1><?php _e('Properties', 'property-calculator');?></h1>
    <form method="post">
        <table class="form-table">
            <tr valign="top">
                <th scope="row"><label for="property_name"><?php _e('Property Name', 'property-calculator');?></label></th>
                <td><input name="property_name" type="text" id="property_name" class="regular-text" required /></td>
            </tr>
        </table>
        <p class="submit"><input type="submit" name="submit_property" class="button-primary" value="<?php _e('Add Property', 'property-calculator');?>" /></p>
    </form>

    <h2><?php _e('Existing Properties', 'property-calculator');?></h2>
    <form method="post">
        <input type="hidden" name="page" value="property-calculator-properties">
    </form>
</div>