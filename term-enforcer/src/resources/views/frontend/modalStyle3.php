<div id="teTermsModal" class="mss-minimal-modal modal-third-type" style="display:none;position:fixed;top:0;left:0;width:90%;height:100%;background-color:rgba(0,0,0,0.5);z-index:9999;">
    <div style="position:relative;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;background:#fff;padding:20px;border-radius:5px;width:60%;">
        <h3 style="margin-top:0;">
            <?php echo esc_attr($modal_title); ?>
        </h3>
        <div id="te-scroll-box" style="max-height: 60vh; overflow-y: auto;overflow-x:hidden; padding: 24px; line-height: 1.6; color: #4a5568; font-size: 0.9375rem;"></div>
        <div class="footer-btns">
        <button id="mssCloseBtn" class="modal-close" style="margin-top:15px;padding:8px 16px;background:#eee;border:1px solid #ddd;border-radius:3px;">
            <?php echo esc_attr($primaryButton); ?>
        </button>
        <button type="button" id="te-continue" class="btn btn-primary modal-button-custom" style="padding: 8px 16px; border-radius: 6px; font-weight: 500; transition: all 0.2s ease;">
            <?php echo esc_attr($secondaryButton); ?>
        </button>
        </div>
    </div>
</div>