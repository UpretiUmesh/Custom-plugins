<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
?>
<form id="hazeways-property-form" class="hazeways-form" method="post">
    <input type="hidden" name="property_id" value="<?php echo esc_attr($prop_id); ?>">
    <p><?php _e('Period', 'property-calculator'); ?>: <span id="period"> <?php echo $dropdown; ?> </span></p>
    <p><?php _e('Nights', 'property-calculator');?>: <span id="nights"> <?php echo esc_attr($nightS); ?> </span></p>
    <p><?php _e('Price', 'property-calculator');?>: <span id="price"> <?php echo esc_attr($priceTotal); ?> </span></p>

    <label for="date_range"><?php _e('Select Rental Period', 'property-calculator')?></label>
    <input type="text" id="date_range" name="date_range" value="<?php echo esc_attr($period); ?>" required>
    <?php // echo $dropdown; 
            ?>

    <!-- <input name="start_date" type="date" id="start_time" class="regular-text datepicker" value="<?php echo $startDate; ?>" required />
    <input name="end_date" type="date" id="end_time" class="regular-text datepicker" value="<?php echo $endDate; ?>" required /> -->

    <label for="date_range"><?php _e('Nights', 'property-calculator');?>:</label>
    <input type="text" id="nights_hidden" name="nights" value="<?php echo esc_attr($nightS); ?>">
    <label for="date_range"><?php _e('Price', 'property-calculator');?>:</label>
    <input type="text" id="price_hidden" name="price" value="<?php echo esc_attr($priceTotal); ?>">

    <div class="flexible-options">
        <label><input type="checkbox" name="flexible_days" value="3"> +/- 3 <?php _e('Days', 'property-calculator');?></label>
        <label><input type="checkbox" name="flexible_week" value="7"> +/- 1 <?php _e('Week', 'property-calculator');?></label>
    </div>

    <div class="payment-methods">
        <label><input type="checkbox" name="payment_method" value="Bank Transfer"> <?php _e('Bank Transfer', 'property-calculator');?></label>
        <label><input type="checkbox" name="payment_method" value="Credit Card"> <?php _e('Credit Card', 'property-calculator');?></label>
    </div>

    <div class="adults-children-infants">
        <div>
            <label for="adults"><?php _e('Adults', 'property-calculator');?>:</label>
            <select name="adults" id="adults">
                <?php for ($i = 1; $i <= 10; $i++) {
                            echo "<option value='$i'>$i</option>";
                        } ?>
            </select>
        </div>
        <div>
            <label for="children"><?php _e('Children', 'property-calculator');?>:</label>
            <select name="children" id="children">
                <?php for ($i = 0; $i <= 10; $i++) {
                            echo "<option value='$i'>$i</option>";
                        } ?>
            </select>
        </div>
        <div>
            <label for="infants"><?php _e('Infants', 'property-calculator');?>:</label>
            <select name="infants" id="infants">
                <?php for ($i = 0; $i <= 10; $i++) {
                            echo "<option value='$i'>$i</option>";
                        } ?>
            </select>
        </div>
    </div>

    <label for="name"><?php _e('Name', 'property-calculator');?>*</label>
    <input type="text" name="name" id="name" required>

    <label for="phone"><?php _e('Phone with country code', 'property-calculator');?>*</label>
    <input type="text" name="phone" id="phone" required>

    <label for="email"><?php _e('Email', 'property-calculator');?>*</label>
    <input type="email" name="email" id="email" required>

    <label for="comment"><?php _e('Comment', 'property-calculator');?>...</label>
    <textarea name="comment" id="comment"></textarea>

    <input type="submit" name="submit_hazeways_property_form" class="submit-button" value="<?php _e('Submit', 'property-calculator');?>">
</form>