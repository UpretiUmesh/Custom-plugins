<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
?>
<div class="custom-popup" style="display: none;">
    <div class="popup-content">
        <h3 id="popup-title">Verification</h3>
        <p id="popup-text">Re-enter your details:</p>
        <input type="text" id="popup-input" placeholder="Enter value">
        <div class="popup-buttons">
            <button id="verifyButton">Verify</button>
            <button id="closeButton">Close</button>
        </div>
    </div>
</div>
