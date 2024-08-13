<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
?>
<div class="wrap">
    <h1><?php _e('Seasons', 'property-calculator');?></h1>
    <form method="post">
        <table class="form-table">
            <tr valign="top">
                <th scope="row"><label for="season_name"><?php _e('Season Name', 'property-calculator');?></label></th>
                <td><input name="season_name" type="text" id="season_name" class="regular-text" required /></td>
            </tr>
            <tr valign="top">
                <th scope="row"><label for="start_time"><?php _e('Start Time', 'property-calculator');?></label></th>
                <td><input name="start_time" type="date" id="start_time" class="regular-text datepicker" required />
                </td>
            </tr>
            <tr valign="top">
                <th scope="row"><label for="end_time"><?php _e('End Time', 'property-calculator');?></label></th>
                <td><input name="end_time" type="date" id="end_time" class="regular-text datepicker" required /></td>
            </tr>
        </table>
        <p class="submit"><input type="submit" name="submit_season" class="button-primary" value="Add Season" /></p>
    </form>

    <h2><?php _e('Existing Seasons', 'property-calculator');?></h2>
    <form method="post">
        <input type="hidden" name="page" value="property-calculator-seasons">
    </form>
</div>