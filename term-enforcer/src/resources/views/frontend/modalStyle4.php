<div id="teTermsModal" class="mss-dark-modal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.7);z-index:9999;">
    <div style="position:relative;top:50%;left:50%;transform:translate(-50%,-50%);width:80%;max-width:900px;background:#2d3748;color:#fff;padding:25px;border-radius:8px;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
        <h3 style="margin-top:0;color:#fff;">
            <?php echo esc_attr($modal_title); ?>
        </h3>
        <div id="te-scroll-box" style="max-height: 60vh; overflow-y: auto; padding: 24px; line-height: 1.6; color: #fff; font-size: 0.9375rem;"></div>
        <button id="mssCloseBtn" class="modal-close" style="margin-top:20px;padding:8px 20px;background:#4a5568;color:#fff;border:none;border-radius:4px;cursor:pointer;">
            <?php echo esc_attr($primaryButton); ?>
        </button>
        <button type="button" id="te-continue" class="btn btn-primary modal-button-custom" style="padding: 8px 16px; border-radius: 6px; font-weight: 500; transition: all 0.2s ease;">
            <?php echo esc_attr($secondaryButton); ?>
        </button>
    </div>
</div>