<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
?>
<div id="terms-checkbox-wrapper" style="cursor:pointer;">
    <p class="form-row terms wc-terms-and-conditions-checkbox">
        <label class="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox">
            <input type="checkbox" id="te_terms_check" />
            <a href="#" id="te_terms_checkbox"><?php echo esc_attr($gdpr_text); ?></a>
        </label>
    </p>
</div>
<script>
    function initTermsModal() {
        jQuery(function($) {
            const selectors = {
                anchor: '#te_terms_checkbox',
                checkbox: '#te_terms_check',
                scrollBox: '#te-scroll-box',
                placeOrderButton: '#place_order',
                continueButton: '#te-continue',
                modal: '#teTermsModal',
                modalClose: '.modal-close, .modal-button'
            };

            const $anchor = $(selectors.anchor);
            const $checkbox = $(selectors.checkbox);
            const $scrollBox = $(selectors.scrollBox);
            const $placeOrderButton = $(selectors.placeOrderButton);
            const $continueButton = $(selectors.continueButton);
            const modalEl = document.querySelector(selectors.modal);

            if (!modalEl || !$anchor.length || !$checkbox.length || !$scrollBox.length || !$placeOrderButton.length) {
                console.warn('Terms modal: Required elements not found.');
                return;
            }

            const modal = new bootstrap.Modal(modalEl);
            let hasScrolledToBottom = false;
            const repeatInterval = typeof teModalData !== 'undefined' ? teModalData.modalRepeatInterval : 'always';

            setupInitialState();
            enforceRepeatInterval();
            bindModalTrigger();
            insertTermsContent();
            bindScrollDetection();
            bindContinueButton();
            preventManualCheck();
            bindModalClose();

            /*** FUNCTIONS ***/

            function setupInitialState() {
                $checkbox.prop({
                    checked: false,
                    disabled: true
                });
                $placeOrderButton.prop('disabled', true);
            }

            function enforceRepeatInterval() {
                const shouldShow = shouldShowModal(repeatInterval);

                if (!shouldShow) {
                    $checkbox.prop({
                        checked: true,
                        disabled: true
                    });
                    $placeOrderButton.prop('disabled', false);
                }
            }

            function shouldShowModal(interval) {
                if (interval === 'always') return true;

                const cookies = document.cookie.split(';').map(c => c.trim());
                const cookie = cookies.find(c => c.startsWith('te_terms_accepted='));

                return !cookie;
            }

            function setRepeatCookie(interval) {
                if (interval === 'always') return;

                const days = parseInt(interval);
                if (isNaN(days)) return;

                const d = new Date();
                d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
                document.cookie = `te_terms_accepted=true; expires=${d.toUTCString()}; path=/`;
            }

            function bindModalTrigger() {
                $anchor.on('click', function(e) {
                    if (!hasScrolledToBottom && shouldShowModal(repeatInterval)) {
                        e.preventDefault();
                        modal.show();
                    }
                });
            }

            function insertTermsContent() {
                const defaultText = '<p>No terms available.</p>';
                const termsText = (typeof teModalData !== 'undefined' && teModalData.termsText) ?
                    teModalData.termsText :
                    defaultText;

                $scrollBox.html(termsText);
            }

            function bindContinueButton() {
                $continueButton.on('click', function() {
                    $scrollBox.animate({
                        scrollTop: $scrollBox[0].scrollHeight
                    }, 500);
                });
            }

            function bindScrollDetection() {
                $scrollBox.on('scroll', function() {
                    if (hasScrolledToBottom) return;

                    const scrollTop = $scrollBox.scrollTop();
                    const visibleHeight = $scrollBox.innerHeight();
                    const totalHeight = $scrollBox[0].scrollHeight;

                    if (scrollTop + visibleHeight >= totalHeight - 10) {
                        handleTermsAccepted();
                    }
                });
            }

            function handleTermsAccepted() {
                hasScrolledToBottom = true;
                $checkbox.prop({
                    disabled: false,
                    checked: true
                });
                $placeOrderButton.prop('disabled', false);
                modal.hide();
                setRepeatCookie(repeatInterval);
            }

            function preventManualCheck() {
                $checkbox.on('click', function(e) {
                    if ($(this).prop('disabled')) {
                        e.preventDefault();
                        return false;
                    }
                });
            }

            function bindModalClose() {
                $(document).on('click', selectors.modalClose, function() {
                    modal.hide();
                });
            }
        });
    }

    // Initialize only when DOM is ready
    jQuery(document).ready(function() {
        initTermsModal();
    });
</script>
<script>
    function initTermsModal() {
        jQuery(function($) {
            const selectors = {
                anchor: '#te_terms_checkbox',
                checkbox: '#te_terms_check',
                scrollBox: '#te-scroll-box',
                placeOrderButton: '#place_order',
                continueButton: '#te-continue',
                modal: '#teTermsModal',
                modalClose: '.modal-close, .modal-button',
                modalOverlay: '#teModalOverlay'
            };

            const $anchor = $(selectors.anchor);
            const $checkbox = $(selectors.checkbox);
            const $scrollBox = $(selectors.scrollBox);
            const $placeOrderButton = $(selectors.placeOrderButton);
            const $continueButton = $(selectors.continueButton);
            const $modal = $(selectors.modal);
            const $overlay = $(selectors.modalOverlay);

            if (!$anchor.length || !$checkbox.length || !$scrollBox.length || !$placeOrderButton.length) {
                console.warn('Terms modal: Required elements not found.');
                return;
            }

            let hasScrolledToBottom = false;
            let hasDelayFinished = false;
            let modalShown = false;
            let timerInterval = null;

            // === Settings ===
            const repeatInterval = typeof teModalData !== 'undefined' ? teModalData.modalRepeatInterval : 'always';
            const checkboxDelay = typeof teModalData !== 'undefined' ? parseInt(teModalData.checkboxDelay) || 0 : 0;
            const termsText = typeof teModalData !== 'undefined' ? teModalData.termsText || '<p>No terms provided.</p>' : '<p>No terms provided.</p>';
            const cookieName = 'te_terms_accepted';

            // === Overlay fallback ===
            if (!$(selectors.modalOverlay).length) {
                $('body').append(`<div id="teModalOverlay" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:9998;"></div>`);
            }

            setupInitialState();
            insertTermsContent();
            bindTriggers();
            preventManualCheck();
            bindModalClose();

            if (!hasAcceptedBefore()) {
                setTimeout(() => showModal(), 500);
            } else {
                $checkbox.prop({
                    checked: true,
                    disabled: true
                });
                $placeOrderButton.prop('disabled', false);
            }

            /*** Core Functions ***/

            function setupInitialState() {
                $checkbox.prop({
                    checked: false,
                    disabled: true
                });
                $placeOrderButton.prop('disabled', true);
            }

            function setAcceptanceCookie() {
    if (repeatInterval === 'always') {
        // Don't store anything if it's always supposed to show
        return;
    }

    const expires = getCookieExpiryDate();

    let cookieString = `${cookieName}=true; path=/;`;

    if (expires) {
        cookieString += ` expires=${expires};`;
    }

    document.cookie = cookieString;
}

function getCookieExpiryDate() {
    if (repeatInterval === 'session') return null;

    const days = parseIntervalToDays(repeatInterval);
    if (days <= 0) return null;

    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + (days * 24 * 60 * 60 * 1000));
    return expiryDate.toUTCString();
}

function parseIntervalToDays(interval) {
    if (typeof interval === 'number') return interval;

    const match = interval.trim().toLowerCase().match(/^(\d+)\s*(day|days)?$/);
    return match ? parseInt(match[1]) : 0;
}

function hasAcceptedBefore() {
    if (repeatInterval === 'always') {
        return false; // Always show the modal, ignore cookies
    }

    return document.cookie.split(';').some(c => c.trim() === `${cookieName}=true`);
}

function clearAcceptanceCookie() {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}



            function showModal() {
                hasScrolledToBottom = false;
                hasDelayFinished = false;

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
                    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                });

                $('#teModalOverlay').show();
                $('body').css('overflow', 'hidden');
                modalShown = true;

                renderDelayBanner();
                bindScroll();
                if (checkboxDelay > 0) startDelayTimer();
            }

            function hideModal() {
                $modal.hide();
                $('#teModalOverlay').hide();
                $('body').css('overflow', 'auto');
                modalShown = false;
            }

            function renderDelayBanner() {
                const bannerId = 'te-delay-timer';
                const existing = $('#' + bannerId);
                const content = `
                <div id="${bannerId}" style="text-align:center;margin-bottom:20px;padding:12px;background:#f5f5f5;border-radius:6px;font-weight:600;font-size:15px;border-left:5px solid #4CAF50;color:#333;">
                    <h3 style="margin-bottom: 8px;">Please read the terms carefully</h3>
                    <div id="te-delay-timer-text">${getDelayMessage(checkboxDelay)}</div>
                </div>`;
                if (!existing.length) {
                    $modal.prepend(content);
                } else {
                    $('#te-delay-timer-text').text(getDelayMessage(checkboxDelay));
                }
            }

            function getDelayMessage(seconds) {
                return seconds > 0 ?
                    `Please wait <span>${seconds}</span> seconds or scroll to the bottom` :
                    'Scroll to the bottom to accept';
            }

            function startDelayTimer() {
                let remaining = checkboxDelay;
                const textEl = $('#te-delay-timer-text');

                timerInterval = setInterval(() => {
                    remaining--;
                    if (remaining > 0) {
                        textEl.html(`Please wait <span>${remaining}</span> seconds or scroll to the bottom`);
                    } else {
                        clearInterval(timerInterval);
                        hasDelayFinished = true;
                        autoAccept();
                    }
                }, 1000);
            }

            function bindScroll() {
                $scrollBox.on('scroll', function() {
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
                if (hasDelayFinished || hasScrolledToBottom) {
                    $scrollBox.animate({
                        scrollTop: $scrollBox[0].scrollHeight
                    }, 300);
                    $checkbox.prop({
                        disabled: false,
                        checked: true
                    });
                    $placeOrderButton.prop('disabled', false);
                    setAcceptanceCookie();
                    hideModal();
                }
            }

            function bindTriggers() {
                $anchor.on('click', function(e) {
                    e.preventDefault();
                    if (!hasAcceptedBefore()) {
                        showModal();
                    }
                });

                $checkbox.on('click', function(e) {
                    if ($(this).prop('disabled')) {
                        e.preventDefault();
                        showModal();
                    }
                });

                $continueButton.on('click', function() {
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
                $checkbox.on('click', function(e) {
                    if ($(this).prop('disabled')) {
                        e.preventDefault();
                    }
                });
            }

            function insertTermsContent() {
                $scrollBox.html(termsText);
            }

            // Expose function globally
            window.showTermsModal = showModal;
        });
    }

    jQuery(document).ready(function() {
        initTermsModal();
    });
</script>