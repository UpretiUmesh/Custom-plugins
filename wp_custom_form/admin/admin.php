<?php
// include 'reusable_field.php';
class Admin
{
    public function __construct()
    {
        // Add admin-specific hooks and functionality here
        add_action('admin_menu', array($this, 'add_admin_menu'));
    }

    public function add_admin_menu()
    {
        add_menu_page(
            'Step Form Settings',
            'Step Form',
            'manage_options',
            'step-form',
            array($this, 'settings_page')
        );
    }

    public function settings_page()
    {
?>
        <div class="wrap">
            <h1>Step Form Settings</h1>
            <div class="container mt-5">
                <?php
                // Include the reusable field function

                // Initialize label texts with default values
                

                // Update label texts based on user input
                if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                    $field = $_POST['field'];
                    if (isset($_POST['labelText'])) {
                        $labelTexts[$field] = htmlspecialchars($_POST['labelText']);
                    }
                }
                ?>

                <!-- Form for updating Bank Routing Number Label -->
                <form method="post" action="">
                    <div class="form-group col-md-6">
                        <label class="form-label" for="bankRoutingNumberLabel">Enter Bank Routing Number Label</label>
                        <input type="text" id="bankRoutingNumberLabel" name="labelText" class="form-control" placeholder="Type something...">
                        <input type="hidden" name="field" value="bankRoutingNumber">
                        <button type="submit" class="btn btn-primary mt-2">Update Label</button>
                    </div>
                </form>

                <!-- Form for updating Account Number Label -->
                <form method="post" action="">
                    <div class="form-group col-md-6">
                        <label class="form-label" for="accountNumberLabel">Enter Account Number Label</label>
                        <input type="text" id="accountNumberLabel" name="labelText" class="form-control" placeholder="Type something...">
                        <input type="hidden" name="field" value="accountNumber">
                        <button type="submit" class="btn btn-primary mt-2">Update Label</button>
                    </div>
                </form>

                <!-- Form for updating SWIFT Code Label -->
                <form method="post" action="">
                    <div class="form-group col-md-6">
                        <label class="form-label" for="swiftCodeLabel">Enter SWIFT Code Label</label>
                        <input type="text" id="swiftCodeLabel" name="labelText" class="form-control" placeholder="Type something...">
                        <input type="hidden" name="field" value="swiftCode">
                        <button type="submit" class="btn btn-primary mt-2">Update Label</button>
                    </div>
                </form>

                <div class="mt-4">
                    <?php

                    ?>
                </div>
            </div>
            <form method="post" action="options.php">
                <?php
                settings_fields('step_form_settings_group');
                do_settings_sections('step_form_settings');
                submit_button();
                ?>
            </form>
        </div>
<?php
    }
}
?>