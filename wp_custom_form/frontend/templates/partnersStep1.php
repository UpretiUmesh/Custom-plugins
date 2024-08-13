<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
include 'blocks/button/button.php';
include 'blocks/number/number.php';
include 'blocks/tel/telephone.php';
include 'blocks/date/date.php';
include 'blocks/email/email.php';
include 'blocks/select/select.php';
include 'blocks/text/text.php';
include 'blocks/media/media.php';

?>
<section data-title="Partner Information" data-step="owner" data-step1="1">
    <form id="formStepOwner" method="post" enctype="multipart/form-data">
        <div class="card mb-4">
            <div class="card-header">
                <h5 class="text-subheader"><strong>Choose Partner Program</strong></h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <?PHP $selectOptions = include 'config/programType/select_options_config.php';
                    $selectFieldConfig = $selectOptions['partnershipType'];
                    echo Select::selectInputField('partnershipType', $selectFieldConfig['label'], $selectFieldConfig['options']); ?>
                </div>
            </div>
        </div>

        <div class="card mb-4">
            <div class="card-header">
                <h5 class="text-subheader"><strong>W-9 Information</strong></h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <?php echo Text::textInputField('companyName', 'Name', 'text'); ?>
                    <?PHP $selectOptions = include 'config/programType/select_options_config.php';
                    $selectFieldConfig = $selectOptions['businessType'];
                    echo Select::selectInputField('businessType', $selectFieldConfig['label'], $selectFieldConfig['options']); ?>
                </div>
                <div class="row">
                    <?php echo Text::textInputField('dbaName', 'Enter DBA Name, if different', 'text'); ?>
                    <?php echo Text::textInputField('federalTaxId', 'Business Tax ID', 'text', '11','' ,$selectOptions['data-number']); ?>
                </div>
                <div class="row">
                    <?php echo Email::emailInputField('contactEmail', 'Main Email', 'email'); ?>
                    <?php echo Telephone::telephoneInputField('contactPhone', 'Mobile Number', 'tel', '14', '', $selectOptions['data-phone']); ?>
                </div>
                <div class="row">
                    <?php echo Text::textInputField('companyAddress', 'Mailing Address', 'text', ''); ?>
                    <?php echo Text::textInputField('companyCity', 'City', 'text', '', '2'); ?>
                    <?PHP $selectOptions = include 'config/programType/select_options_config.php';
                    $selectFieldConfig = $selectOptions['state'];
                    echo Select::selectInputField('companyStateId', $selectFieldConfig['label'], $selectFieldConfig['options']); ?>
                    <?php echo Text::textInputField('companyZip', 'ZIP', 'text', '5', '5', $selectOptions['data-zip']); ?>
                </div>
            </div>
        </div>

        <div id="owners">
            <div class="card mb-3">
                <div class="card-header">
                    <h5 class="text-subheader"><strong>Primary Owner & Signer Information</strong></h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        <?php echo Text::textInputField('ownerFirstName', 'First Name', 'text'); ?>
                        <?php echo Text::textInputField('ownerLastName', 'Last Name', 'text'); ?>
                    </div>
                    <hr>
                    <h5 class="text-subheader mb-3"><strong>Address & Contact Information</strong></h5>
                    <div class="row">
                        <?php echo Text::textInputField('ownerLastName', 'Last Name', 'text'); ?>
                        <?php echo Text::textInputField('ownerCity', 'City', 'text'); ?>
                        <?PHP $selectOptions = include 'config/programType/select_options_config.php';
                        $selectFieldConfig = $selectOptions['state'];
                        echo Select::selectInputField('ownerStateId', $selectFieldConfig['label'], $selectFieldConfig['options']); ?>
                        <?php echo Text::textInputField('ownerZip', 'Zip', 'text', '5', '5', $selectOptions['data-zip']); ?>
                    </div>
                    <div class="row">
                        <?php echo Text::textInputField('ownerPhone', 'Mobile Number', 'text', '14', '', $selectOptions['data-phone']); ?>
                        <?php echo Email::emailInputField('ownerEmail', 'Direct Email', 'email'); ?>
                    </div>
                    <div class="row">
                        <?php echo Text::textInputField('ownerSsn', 'Social Security Number', 'text', '11', '11', $selectOptions['data-number']); ?>
                        <?php echo Text::textInputField('ownerDayOfBirth', 'Date of Birth', 'text', '', '', $selectOptions['data-dob']); ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-3 text-center custom-addOwnerButton">
            <?php echo Button::buttonInputField('addOwner', 'Add Owner', 'button'); ?>
        </div>
        <div class="card mb-4">
            <div class="card-header">
                <h5 class="text-subheader"><strong>Bank Account Information</strong></h5>
                <p class="mb-3">Business bank account (where funds will be deposited)</p>
            </div>
            <div class="card-body">
                <div class="row">
                    <?php echo Text::textInputField('bankName', 'Bank Name', 'text'); ?>
                    <?php echo Text::textInputField('bankOwnershipName', 'Ownership Name on Bank Account', 'text'); ?>
                </div>
                <div class="row">
                    <?php echo Text::textInputField('bankRoutingNumber', 'Bank Routing Number', 'text', '9'); ?>
                    <?php echo Text::textInputField('bankAccountNumber', 'Bank Account Number', 'text', '12'); ?>
                </div>
            </div>
        </div>
    </form>
</section>