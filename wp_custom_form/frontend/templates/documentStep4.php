<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
?>
<section data-title="Documents" data-step="document" data-step1="4">
    <div class="container mt-5">
        <div class="upload-container">
            <div class="upload-header">
                <h3>Documents Upload</h3>
            </div>
            <div class="required-docs mb-4">
                <p><strong>Required documents:</strong></p>
                <p><span class="text-danger">&#10003;</span> Owner's Driver's License(s)</p>
                <p><span class="text-danger">&#10003;</span> Voided Check/Screenshot Showing Routing and Account Numbers</p>
            </div>
            <div class="upload-area">
                <form id="formStepDocuments">
                <?php echo Media::mediaInputField('fileUpload', 'Drag & drop your documents or click here to browse for a document to upload.', 'file'); ?>
                    <!-- <input type="file" name="documents[]" id="fileUpload" class="d-none" multiple>
                    <label for="fileUpload" class="d-block">
                        <img src="https://via.placeholder.com/64" alt="Upload Icon" class="mb-3">
                        <p>Drag & drop your documents or click here to browse for a document to upload.</p>
                        <p>Only .jpg, .png, .bmp, .pdf, .doc, .docx, .xls, .xlsx will be accepted.</p>
                    </label> -->
                </form>
            </div>
        </div>
    </div>
</section>