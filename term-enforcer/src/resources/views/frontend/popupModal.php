<div class="modal fade" id="teTermsModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content teTerms-modals" style="border: none; border-radius: 8px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);">
            <div class="modal-header" style="border-bottom: 1px solid #f0f0f0; padding: 20px 24px; background-color: #f9fafb; border-radius: 8px 8px 0 0;">
                <h5 class="modal-title" style="font-size: 1.25rem; font-weight: 600; color: #2d3748;"><?php echo esc_attr($modal_title); ?></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="font-size: 0.75rem;"></button>
            </div>
            <div class="modal-body" style="padding: 0;">
                <div id="te-scroll-box" style="max-height: 60vh; overflow-y: auto; padding: 24px; line-height: 1.6; color: #4a5568; font-size: 0.9375rem;"></div>
            </div>
            <div class="modal-footer" style="border-top: 1px solid #f0f0f0; padding: 16px 24px; background-color: #f9fafb; border-radius: 0 0 8px 8px;">
                <button class="modal-button btn btn-outline-secondary modal-button-custom" style="padding: 8px 16px; border-radius: 6px; font-weight: 500; transition: all 0.2s ease;"> <?php echo esc_attr($primaryButton); ?></button>
                <button type="button" id="te-continue" class="btn btn-primary modal-button-custom" style="padding: 8px 16px; border-radius: 6px; font-weight: 500; transition: all 0.2s ease;">
                    <?php echo esc_attr($secondaryButton); ?>
                </button>
            </div>
        </div>
    </div>
</div>