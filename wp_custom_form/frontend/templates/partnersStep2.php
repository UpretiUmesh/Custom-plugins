<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
?>
<section data-title="Agent Information" data-step="agent" data-step1="2">
    <form id="formStepAgent" method="post" enctype="multipart/form-data">
        <div class="card mb-4 custom-application-details">
            <div class="card-header">
                <h5 class="text-subheader custom-heading-title"><strong>Confirm Application Link <span></span></strong></h5>
                <p class="mb-3">AllayPay will create your own application link, so when you or your merchants complete the application form, it will automatically assign it to your account. See top of this page for example.</p>
            </div>
            <div class="card-body">
                <div class="row">
                <?php echo Text::textInputField('rURL', 'Request different application URL', 'text'); ?>
                <?php echo Text::textInputField('specialistName', 'Specialist name on your application page', 'text'); ?>
                </div>
                <div class="row">
                <?php echo Telephone::telephoneInputField('appPhone', 'Phone listed on your application page', 'tel'); ?>
                <?php echo Email::emailInputField('appEmail', 'Email on your application page', 'email'); ?>
                </div>
            </div>
        </div>
        <div class="custom-append-data custom-additional-agent-information" style="display: none;">
            <div class="panel overflow-hidden mb-3">
                <div class="panel-header with-form">
                    <h5 class="text-subheader">
                        <strong>Additional Agent Information</strong>
                    </h5>
                </div>
                <div class="panel-content with-form">
                    <div class="form-row row">
                    <?php echo Text::textInputField('agentownerfirstname', 'First Name', 'text'); ?>
                    <?php echo Text::textInputField('agentownerlastname', 'Last Name', 'text'); ?>
                    </div>
                    <div class="form-row row">
                    <?php echo Telephone::telephoneInputField('agentownerphone', 'Mobile Number', 'tel'); ?>
                    <?php echo Email::emailInputField('agentowneremail', 'Business Email', 'email'); ?>                        
                    </div>
                    <hr>
                </div>
            </div>
            <div class="panel-header with-form">
                <h5 class="text-subheader agent-for-text"><strong>Confirmed Application Link for <span>Agent</span></strong></h5>
                <p class="mb-3">AllayPay will create your own application link, so when you or your merchants complete the application form, it will automatically assign it to your account. See top of this page for example.</p>
            </div>
            <div class="panel-content with-form">
                <div class="row">
                <?php echo Text::textInputField('additionalrurl', 'Request different application URL', 'text'); ?>
                <?php echo Text::textInputField('additionalspecialistname', 'Specialist name on your application page', 'text'); ?>
                </div>
                <div class="form-row row">
                <?php echo Telephone::telephoneInputField('additionalappphone', 'Phone listed on your application page', 'tel'); ?>
                <?php echo Email::emailInputField('additionalappemail', 'Email on your application page', 'email'); ?>  
                </div>
            </div>
        </div>
        <div class="append-data-custom"></div>

    </form>
    <div class="mb-3 text-center">
    <?php echo Button::buttonInputField('addAgent', 'Add Agent', 'button'); ?> 
        <!-- <button type="button" id="addAgent" class="btn btn-primary" data-action="addAgent">Add Agent</button> -->
    </div>
</section>