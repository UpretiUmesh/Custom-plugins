jQuery(document).ready(function ($) {

    // Log acceptance when "Continue" is clicked
    $('#te-continue').on('click', function () {
        const gdprChecked = window.teAccepted ? 1 : ($('#te_terms_check').is(':checked') ? 1 : 0);
        console.log('GDPR checked:', gdprChecked);

        $.post(teAjax.ajax_url, {
            action: 'te_log_acceptance',
            gdpr: 1,
            security: teAjax.security
        });
    });

    // Only run modal logic on checkout page
    if (window.location.pathname.includes('/checkout')) {
        initTermsModal();
    }

    function initTermsModal() {
        const selectors = {
            anchor: '#te_terms_checkbox',
            checkbox: '#te_terms_check',
            scrollBox: '#te-scroll-box',
            placeOrderButton: 'button.wc-block-components-checkout-place-order-button, button[name="place-order"]',
            continueButton: '#te-continue',
            modal: '#teTermsModal',
            modalClose: '.modal-close, .modal-button',
            modalOverlay: '#teModalOverlay'
        };

        const $anchor = $(selectors.anchor);
        const $checkbox = $(selectors.checkbox);
        const $scrollBox = $(selectors.scrollBox);
        let $placeOrderButton = $(selectors.placeOrderButton);
        const $continueButton = $(selectors.continueButton);
        const $modal = $(selectors.modal);
        const $overlay = $(selectors.modalOverlay);

        let hasScrolledToBottom = false;
        let hasDelayFinished = false;
        let timerInterval = null;

        const repeatInterval = teModalData?.modalRepeatInterval || 'always';
        const checkboxDelay = parseInt(teModalData?.checkboxDelay) || 0;
        const termsText = teModalData?.termsText || '<p>No terms provided.</p>';
        const buttonText = teModalData?.buttonText || 'Accept';
        const lastShownKey = 'teModalLastShown';

        const now = new Date().getTime();
        const lastShown = parseInt(localStorage.getItem(lastShownKey));
        let shouldShow = true;

        switch (repeatInterval) {
            case 'once':
                if (lastShown) shouldShow = false;
                break;
            case '1':
                shouldShow = !lastShown || now - lastShown > 86400000;
                break;
            case '7':
                shouldShow = !lastShown || now - lastShown > 7 * 86400000;
                break;
            case '30':
                shouldShow = !lastShown || now - lastShown > 30 * 86400000;
                break;
            case 'always':
            default:
                shouldShow = true;
        }

        // If not showing modal due to repeat interval, auto-enable
        if (!shouldShow) {
            $checkbox.prop({ checked: true, disabled: true });
            $placeOrderButton.prop('disabled', false);
            window.teAccepted = true;
            return;
        }

        setupInitialState();
        insertTermsContent();
        bindTriggers();
        preventManualCheck();
        bindModalClose();

        setTimeout(() => showModal(), 300);

        function setupInitialState() {
            $checkbox.prop({ checked: false, disabled: true });

            // Retry if place order button not yet available
            $placeOrderButton = $(selectors.placeOrderButton);
            if (!$placeOrderButton.length) {
                console.warn('Place Order button not found, retrying...');
                setTimeout(setupInitialState, 300);
                return;
            }

            $placeOrderButton.prop('disabled', true);
        }

        function showModal() {
            hasScrolledToBottom = false;
            hasDelayFinished = checkboxDelay <= 0;

            localStorage.setItem(lastShownKey, now.toString());

            if (!$overlay.length) {
                $('body').append(`<div id="teModalOverlay" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:9998;"></div>`);
            }

            $modal.css({
                display: 'block',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: '9999',
                background: '#fff',
                padding: '25px',
                borderRadius: '8px',
                maxWidth: '90%',
                maxHeight: '85vh',
                overflow: 'auto',
                boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
            });

            $('#teModalOverlay').show();
            $('body').css('overflow', 'hidden');

            renderDelayBanner();
            bindScroll();

            if (checkboxDelay > 0) startDelayTimer();
        }

        function hideModal() {
            $modal.hide();
            $('#teModalOverlay').hide();
            $('body').css('overflow', 'auto');
        }

        function renderDelayBanner() {
            const content = `
                    <div id="te-delay-timer" style="text-align:center;margin-bottom:20px;padding:12px;background:#f5f5f5;border-radius:6px;font-weight:600;font-size:15px;border-left:5px solid #4CAF50;color:#333;">
                        <h3 style="margin-bottom: 8px;">Please read the terms carefully</h3>
                        <div id="te-delay-timer-text">${getDelayMessage(checkboxDelay)}</div>
                    </div>`;
            $modal.prepend(content);
        }

        function getDelayMessage(seconds) {
            return seconds > 0
                ? `Please wait <span>${seconds}</span> seconds or scroll to the bottom`
                : 'Scroll to the bottom to accept';
        }

        function startDelayTimer() {
            let remaining = checkboxDelay;
            const $textEl = $('#te-delay-timer-text');

            timerInterval = setInterval(() => {
                remaining--;
                if (remaining > 0) {
                    $textEl.html(`Please wait <span>${remaining}</span> seconds or scroll to the bottom`);
                } else {
                    clearInterval(timerInterval);
                    hasDelayFinished = true;
                    autoAccept();
                }
            }, 1000);
        }

        function bindScroll() {
            $scrollBox.on('scroll', function () {
                const scrollTop = $scrollBox.scrollTop();
                const visible = $scrollBox.innerHeight();
                const total = $scrollBox[0].scrollHeight;

                if (!hasScrolledToBottom && scrollTop + visible >= total - 10) {
                    hasScrolledToBottom = true;
                    autoAccept();
                }
            });
        }

        function autoAccept() {
            if (hasScrolledToBottom || hasDelayFinished) {
                $checkbox.prop({ checked: true, disabled: false });
                $placeOrderButton.prop('disabled', false);
                window.teAccepted = true; // ✅ Needed for logging
                console.log('Terms accepted, enabling place order');
                hideModal();
            }
        }

        function bindTriggers() {
            $anchor.on('click', function (e) {
                e.preventDefault();
                showModal();
            });

            $checkbox.on('click', function (e) {
                if ($(this).prop('disabled')) {
                    e.preventDefault();
                    showModal();
                }
            });

            $continueButton.on('click', function () {
                $scrollBox.animate({
                    scrollTop: $scrollBox[0].scrollHeight
                }, 500);
            });
        }

        function bindModalClose() {
            $(document).on('click', selectors.modalClose, hideModal);
            $(selectors.modalOverlay).on('click', hideModal);
        }

        function preventManualCheck() {
            $checkbox.on('click', function (e) {
                if ($(this).prop('disabled')) {
                    e.preventDefault();
                }
            });
        }

        function insertTermsContent() {
            $scrollBox.html(termsText);
            $continueButton.text(buttonText);
        }
    }
});