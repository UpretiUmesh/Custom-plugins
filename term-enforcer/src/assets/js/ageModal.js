document.addEventListener('DOMContentLoaded', function() {
    // Debug start
    console.log('[Age Verification] Script loaded');
    
    // Check if age verification is enabled
    if (typeof te_age_settings === 'undefined' || !te_age_settings.is_enabled) {
        console.warn('[Age Verification] Disabled in settings');
        return;
    }

    // DOM Elements
    const modal = document.getElementById('te-age-verification-popup');
    const yesBtn = document.getElementById('te-age-confirm-yes');
    const noBtn = document.getElementById('te-age-confirm-no');
    const deniedMsg = document.getElementById('te-age-denied-msg');
    const placeOrderBtn = document.querySelector('#place_order');
    
    // Debug elements
    console.log('[Age Verification] Elements:', {
        modal,
        yesBtn,
        noBtn,
        deniedMsg,
        placeOrderBtn
    });

    // Check if required elements exist
    if (!modal || !yesBtn || !noBtn) {
        console.error('[Age Verification] Required elements missing');
        return;
    }

    // Show modal immediately with animation
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
        document.body.classList.add('te-modal-open');
        console.log('[Age Verification] Modal shown');
    }, 100);

    // Disable place order button if exists
    if (placeOrderBtn) {
        placeOrderBtn.disabled = true;
        console.log('[Age Verification] Place order button disabled');
    }

    // Yes button handler
    yesBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('[Age Verification] Confirm button clicked');
        
        // Set cookie via AJAX
        fetch(te_age_settings.ajax_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                action: 'te_set_age_cookie',
                cookie_name: te_age_settings.cookie_name,
                cookie_expiry: te_age_settings.cookie_expiry,
                nonce: te_age_settings.nonce
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('[Age Verification] Cookie set successfully');
                // Hide modal
                modal.classList.remove('active');
                document.body.classList.remove('te-modal-open');
                
                // Enable place order button
                if (placeOrderBtn) {
                    placeOrderBtn.disabled = false;
                }
                
                // Remove modal after animation
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
            } else {
                console.error('[Age Verification] Failed to set cookie:', data);
            }
        })
        .catch(error => {
            console.error('[Age Verification] AJAX error:', error);
            // Fallback - proceed without cookie
            modal.style.display = 'none';
            if (placeOrderBtn) {
                placeOrderBtn.disabled = false;
            }
        });
    });

    // No button handler
    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('[Age Verification] Deny button clicked');
        
        // Show denied message
        if (deniedMsg) {
            deniedMsg.style.display = 'block';
        }
        
        // Hide buttons
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
        
        // Keep place order disabled
        if (placeOrderBtn) {
            placeOrderBtn.disabled = true;
        }
    });

    // Debug complete
    console.log('[Age Verification] Initialization complete');
});