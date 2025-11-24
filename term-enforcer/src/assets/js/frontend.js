jQuery(document).ready(function($) {
    // Initialize toolbar functionality
    function initAccessibilityToolbar() {
        // Check for saved preferences
        loadPreferences();
        
        // Toggle expanded tools
        $('.ae-tool-expand').on('click', function(e) {
            e.preventDefault();
            const isExpanded = $(this).attr('aria-expanded') === 'true';
            $(this).attr('aria-expanded', !isExpanded);
            $('.ae-expanded-tools').attr('aria-hidden', isExpanded);
        });
        
        // Handle tool button clicks
        $('.ae-tool[data-action]').on('click', function(e) {
            e.preventDefault();
            const action = $(this).data('action');
            handleToolAction(action, $(this));
        });
        
        // Close toolbar when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('#ae-toolbar').length) {
                $('.ae-tool-expand').attr('aria-expanded', 'false');
                $('.ae-expanded-tools').attr('aria-hidden', 'true');
            }
        });
    }
    
    // Handle tool actions
    function handleToolAction(action, button) {
        switch(action) {
            case 'toggleFont':
                toggleFontSize(button);
                break;
            case 'toggleContrast':
                toggleContrast(button);
                break;
            case 'toggleAnimations':
                toggleAnimations(button);
                break;
            case 'toggleDarkMode':
                toggleDarkMode(button);
                break;
            case 'toggleUnderlineLinks':
                toggleUnderlineLinks(button);
                break;
        }
    }
    
    // Accessibility functions
    function toggleFontSize(button) {
        $('html').toggleClass('ae-large-text');
        savePreference('fontSize', $('html').hasClass('ae-large-text'));
    }
    
    function toggleContrast(button) {
        $('html').toggleClass('ae-high-contrast');
        $('#ae-toolbar').toggleClass('dark-mode');
        savePreference('highContrast', $('html').hasClass('ae-high-contrast'));
    }
    
    function toggleAnimations(button) {
        const isReduced = $('html').toggleClass('ae-reduced-motion').hasClass('ae-reduced-motion');
        savePreference('reducedMotion', isReduced);
        
        // Update button state
        if (isReduced) {
            button.addClass('active').attr('aria-pressed', 'true');
        } else {
            button.removeClass('active').attr('aria-pressed', 'false');
        }
    }
    
    function toggleDarkMode(button) {
        const isDark = $('html').toggleClass('ae-dark-mode').hasClass('ae-dark-mode');
        savePreference('darkMode', isDark);
        
        // Update button state
        if (isDark) {
            button.addClass('active').attr('aria-pressed', 'true');
        } else {
            button.removeClass('active').attr('aria-pressed', 'false');
        }
    }
    
    function toggleUnderlineLinks(button) {
        const isUnderlined = $('html').toggleClass('ae-underline-links').hasClass('ae-underline-links');
        savePreference('underlineLinks', isUnderlined);
        
        // Update button state
        if (isUnderlined) {
            button.addClass('active').attr('aria-pressed', 'true');
        } else {
            button.removeClass('active').attr('aria-pressed', 'false');
        }
    }
    
    // Save preferences to localStorage
    function savePreference(key, value) {
        const preferences = JSON.parse(localStorage.getItem('aePreferences') || '{}');
        preferences[key] = value;
        localStorage.setItem('aePreferences', JSON.stringify(preferences));
    }
    
    // Load saved preferences
    function loadPreferences() {
        const preferences = JSON.parse(localStorage.getItem('aePreferences') || '{}');
        
        if (preferences.fontSize) $('html').addClass('ae-large-text');
        if (preferences.highContrast) {
            $('html').addClass('ae-high-contrast');
            $('#ae-toolbar').addClass('dark-mode');
        }
        if (preferences.reducedMotion) {
            $('html').addClass('ae-reduced-motion');
            $('[data-action="toggleAnimations"]').addClass('active').attr('aria-pressed', 'true');
        }
        if (preferences.darkMode) {
            $('html').addClass('ae-dark-mode');
            $('[data-action="toggleDarkMode"]').addClass('active').attr('aria-pressed', 'true');
        }
        if (preferences.underlineLinks) {
            $('html').addClass('ae-underline-links');
            $('[data-action="toggleUnderlineLinks"]').addClass('active').attr('aria-pressed', 'true');
        }
    }
    
    // Initialize the toolbar
    initAccessibilityToolbar();
}); 