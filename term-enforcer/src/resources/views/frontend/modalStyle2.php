<div id="teTermsModal" class="modal-second fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" style="display: none;">
    <div class="relative top-20 mx-auto w-96 rounded-md bg-white twpopup">
        <div class="mt-3">
            <!-- Brand Logo Section - Added at the top -->
            <div class="flex justify-center pt-4">
                <img src="<?php echo $logo_url;?>" alt="Brand Logo" class="h-12 w-auto" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));">
            </div>
            
            <h3 class="text-lg leading-6 font-medium text-gray-900 text-center mt-2">
                <?php echo esc_attr($modal_title); ?>
            </h3>
            
            <div id="te-scroll-box" style="max-height: 60vh; overflow-y: auto; padding: 24px; line-height: 1.6; color: #4a5568; font-size: 0.9375rem;"></div>
            
            <div class="items-center px-4 py-3">
                <button id="mssCloseBtn" class="modal-close px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <?php echo esc_attr($primaryButton); ?>
                </button>
                <button type="button" id="te-continue" class="btn btn-primary modal-button-custom" style="padding: 8px 16px; border-radius: 6px; font-weight: 500; transition: all 0.2s ease;">
                    <?php echo esc_attr($secondaryButton); ?>
                </button>
            </div>
        </div>
    </div>
</div>