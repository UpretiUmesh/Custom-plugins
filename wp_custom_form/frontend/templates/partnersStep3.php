<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
?>
<section data-title="Contact Details" data-step="email" data-step1="3">
    <form id="formStepEmails" method="post" enctype="multipart/form-data">
        <div class="card mb-4">
            <div class="card-header">
                <h5 class="text-subheader"><strong>Application Status Updates</strong></h5>
            </div>
            <div class="card-body">
                <div class="row">
                <?php echo Email::emailInputField('statusEmail1', 'Notification Email (1 of 2)*', 'email'); ?>
                <?php echo Email::emailInputField('statusEmail2', 'Notification Email (2 of 2)', 'email'); ?>
                </div>
            </div>
        </div>

        <div class="card mb-4">
            <div class="card-header">
                <h5 class="text-subheader"><strong>Residual & Financial Reporting</strong></h5>
            </div>
            <div class="card-body">
                <div class="row">
                <?php echo Text::textInputField('reportName1', 'First Name (1 of 2)*', 'text'); ?>
                <?php echo Email::emailInputField('reportEmail1', 'Notification Email (1 of 2)', 'email'); ?>
                </div>
                <div class="row">
                <?php echo Text::textInputField('reportName2', 'First Name (2 of 2)', 'text'); ?>
                <?php echo Email::emailInputField('reportEmail2', 'Notification Email (2 of 2)', 'email'); ?>
                </div>
            </div>
        </div>

        <div class="card mb-4">
            <div class="card-header">
                <h5 class="text-subheader"><strong>Confirm Primary Contact Information</strong></h5>
            </div>
            <div class="card-body">
                <div class="row">
                <?php echo Text::textInputField('confirmFirstName', 'First Name', 'text'); ?>
                <?php echo Text::textInputField('confirmLastName', 'Last Name', 'text'); ?>
                </div>
                <div class="row">
                <?php echo Telephone::telephoneInputField('confirmBusinessEmail', 'Business Email', 'tel'); ?>
                <?php echo Email::emailInputField('confirmMobileNumber', 'Mobile Number', 'email'); ?>
                </div>
            </div>
        </div>
    </form>
    <div id="contacts"></div>
</section>