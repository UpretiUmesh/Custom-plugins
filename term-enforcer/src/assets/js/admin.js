jQuery(function($) {
    // Shared variables
    const $preview = $('#modal-preview');
    const $modalBuilderVars = window.modalBuilderVars || {};
    const styleMap = {
        'modal-bg-color': 'background-color',
        'modal-text-color': 'color',
        'modal-width': 'width',
        'modal-height': 'height',
        'modal-border-radius': 'border-radius',
        'modal-border-color': 'border-color'
    };
    const previews = {
        'bootstrap': '<div class="modal-content" style="border:1px solid #dee2e6;border-radius:.3rem;"><div class="modal-header" style="padding:1rem;border-bottom:1px solid #dee2e6;background:#f8f9fa;"><h5 style="margin:0;">Bootstrap Modal Preview</h5></div><div class="modal-body" style="padding:1rem;">This is how your modal will look with Bootstrap styling</div></div>',
        'tailwind': '<div style="background:white;padding:1.5rem;border-radius:.5rem;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);"><h3 style="font-weight:600;margin-top:0;">Tailwind Modal Preview</h3><p style="margin-bottom:0;">This is how your modal will look with Tailwind styling</p></div>',
        'minimal': '<div style="border:1px solid #e0e0e0;padding:1rem;"><h4 style="margin:0 0 1rem 0;">Minimal Modal Preview</h4><p style="margin:0;">This is how your modal will look with minimal styling</p></div>',
        'dark': '<div style="background:#2d3748;color:white;padding:1.5rem;border-radius:.25rem;"><h3 style="color:white;margin-top:0;">Dark Modal Preview</h3><p style="margin-bottom:0;color:#e2e8f0;">This is how your modal will look in dark mode</p></div>'
    };

    // Initialization
    function init() {
        $('.color-picker').wpColorPicker();
        initInteract();
        bindEvents();
        loadSavedStyles();
    }

    // Interact.js setup
    function initInteract() {
        interact('#modal-preview')
            .draggable({ onmove: handleDragMove })
            .resizable({
                edges: { left: true, right: true, bottom: true, top: true },
                listeners: { move: handleResizeMove }
            });
    }

    // Event handlers
    function handleDragMove(e) {
        const x = (parseFloat($preview.attr('data-x'))) + e.dx || 0;
        const y = (parseFloat($preview.attr('data-y'))) + e.dy || 0;

        $preview.css('transform', `translate(${x}px, ${y}px)`).attr({ 'data-x': x, 'data-y': y });
        $('#position-x').val(x);
        $('#position-y').val(y);
    }

    function handleResizeMove(e) {
        const x = parseFloat($preview.attr('data-x')) || 0;
        const y = parseFloat($preview.attr('data-y')) || 0;
        const width = Math.round(e.rect.width);
        const height = Math.round(e.rect.height);

        $preview.css({
            width: `${width}px`,
            height: `${height}px`,
            transform: `translate(${x}px, ${y}px)`
        }).attr({ 'data-x': x, 'data-y': y });

        $('#modal-width').val(`${width}px`);
        $('#modal-height').val(`${height}px`);
    }

    // Event binding
    function bindEvents() {
        // Style controls
        $('.control-group input').on('input change', function() {
            const id = this.id;
            if (styleMap[id]) $preview.css(styleMap[id], this.value);
        });

        // Save actions
        $('#save-modal-styles').on('click', () => saveModal('save_modal_styles', getStyleData(), 'Styles saved successfully!'));
        $('#save-modal-content').on('click', () => saveModal('save_modal_content', getContentData(), 'Content saved successfully!'));

        // Tabs
        $('.tab-button').on('click', function() {
            const tabId = $(this).data('tab');
            $('.tab-button').removeClass('active').filter(this).addClass('active');
            $('.tab-content').removeClass('active').filter(`#${tabId}`).addClass('active');
        });

        // Style options
        const $styleOptions = $('.mss-style-option');
        const $hiddenInput = $('#mss_modal_style');
        
        $styleOptions.on('click', function() {
            const style = $(this).data('style');
            $hiddenInput.val(style);
            $styleOptions.removeClass('selected').filter(this).addClass('selected');
            $('#mss-live-preview-container').html(previews[style] || '<p>Preview not available</p>');
        });

        // Help panel
        $('#te-help-panel').on('click', function(e) {
            if ($(e.target).hasClass('te-help-panel')) $(this).removeClass('visible');
        });

        // Date validation
        $('.te-filter-form').on('submit', function() {
            const from = $('#date_from').val();
            const to = $('#date_to').val();
            if (from && to && new Date(from) > new Date(to)) {
                alert('The "From" date cannot be after the "To" date');
                return false;
            }
        });
    }

    // Data helpers
    function getStyleData() {
        return {
            positionX: $preview.attr('data-x') || '0',
            positionY: $preview.attr('data-y') || '0',
            width: $('#modal-width').val(),
            height: $('#modal-height').val(),
            bgColor: $('#modal-bg-color').val(),
            textColor: $('#modal-text-color').val(),
            buttonBgColor: $('#modal-pb-color').val(),
            buttonTextColor: $('#modal-sb-color').val(),
            borderRadius: $('#modal-border-radius').val(),
            borderColor: $('#modal-border-color').val()
        };
    }

    function getContentData() {
        return {
            modalTitle: $('#modal-title').val(),
            content: tinyMCE.get('modal-body-content')?.getContent() || $('#modal-body-content').val(),
            primaryBtnText: $('#modal-primary-btn').val(),
            secondaryBtnText: $('#modal-secondary-btn').val()
        };
    }

    // AJAX handler
    function saveModal(action, data, successMsg) {
        $.post($modalBuilderVars.ajaxUrl, {
            action: action,
            nonce: $modalBuilderVars.nonce,
            ...data
        })
        .done(() => alert(successMsg))
        .fail(() => alert('Error saving. Please try again.'));
    }

    // Load saved styles
    function loadSavedStyles() {
        if (!$modalBuilderVars.currentStyles) return;

        const s = $modalBuilderVars.currentStyles;
        $preview.css({
            'width': s.size.width,
            'height': s.size.height,
            'background-color': s.colors.background,
            'color': s.colors.text,
            'border-radius': s.border.radius,
            'border-color': s.border.color
        });

        $('#modal-width').val(s.size.width);
        $('#modal-height').val(s.size.height);
        $('#modal-bg-color').val(s.colors.background).wpColorPicker('color', s.colors.background);
        $('#modal-text-color').val(s.colors.text).wpColorPicker('color', s.colors.text);
        $('#modal-border-radius').val(s.border.radius);
        $('#modal-border-color').val(s.border.color).wpColorPicker('color', s.border.color);
        
        // Initialize preview with current selection
        $('#mss-live-preview-container').html(previews[$('#mss_modal_style').val()] || '<p>Preview not available</p>');
    }

    // Initialize everything
    init();
});
document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('terms-checkbox'); // Your checkbox ID
    const delay = parseInt(te_settings.checkbox_delay) || 0; // Get the delay from your settings
    
    if (delay > 0 && checkbox) {
        checkbox.disabled = true;
        
        setTimeout(function() {
            checkbox.disabled = false;
            // Optional: Add a visual indication that it's now enabled
            checkbox.parentNode.classList.add('checkbox-enabled');
        }, delay * 1000);
    }
});
