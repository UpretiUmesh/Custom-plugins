<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
include 'blocks/steps/steps.php';
?>
<div class="part-content">
    <div class="row" id="validation">
        <div class="col-xl-8 col-10 offset-xl-2 offset-1 wizard-content">
            <?php
            $steps = [1, 2, 3, 4];
            $labels = ['Partner Information', 'Agent Information', 'Contact Details', 'Documents'];

            // Generate the steps indicator
            echo Steps::stepsInputField($steps, $labels); ?>

            <div class="wizard">