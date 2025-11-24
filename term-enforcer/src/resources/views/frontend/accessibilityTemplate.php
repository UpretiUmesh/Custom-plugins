<div id="ae-toolbar" class="ae-toolbar" aria-label="<?php echo esc_attr__('Accessibility Tools', 'accessibility-enhancer'); ?>" role="toolbar">
<div class="tools-icon"><svg aria-hidden="true" focusable="false" width="30" height="30" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7,10L12,15L17,10H7Z"></path>
            </svg></div>  
            <div> 
<div class="ae-toolbar-container">
        <button class="ae-tool" data-action="toggleFont" aria-label="<?php echo esc_attr__('Increase font size', 'accessibility-enhancer') ?>" data-tooltip="<?php echo esc_attr__('Text Size', 'accessibility-enhancer') ?>">
            <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M5,7H13V9H7V17H5V7M15,7H17V17H15V7M19,7H21V17H19V7Z" />
            </svg>
            <span class="ae-tool-label"><?php echo esc_html__('Text Size', 'accessibility-enhancer') ?></span>
        </button>

        <button class="ae-tool" data-action="toggleContrast" aria-label="<?php echo esc_attr__('Toggle high contrast mode', 'accessibility-enhancer') ?>" data-tooltip="<?php echo esc_attr__('Contrast', 'accessibility-enhancer') ?>">
            <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
            <span class="ae-tool-label"><?php echo esc_html__('Contrast', 'accessibility-enhancer') ?></span>
        </button>

        <button class="ae-tool" data-action="toggleAnimations" aria-label="<?php echo esc_attr__('Toggle animations', 'accessibility-enhancer') ?>" data-tooltip="<?php echo esc_attr__('Animations', 'accessibility-enhancer') ?>">
            <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
            <span class="ae-tool-label"><?php echo esc_html__('Animations', 'accessibility-enhancer') ?></span>
        </button>

        <button class="ae-tool ae-tool-expand" aria-expanded="false" aria-label="<?php echo esc_attr__('Show more accessibility tools', 'accessibility-enhancer') ?>">
            <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
            </svg>
        </button>
    </div>

    <div class="ae-expanded-tools" aria-hidden="true">
        <button class="ae-tool" data-action="toggleDarkMode" aria-label="<?php echo esc_attr__('Toggle dark mode', 'accessibility-enhancer') ?>">
            <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3Z" />
            </svg>
            <span class="ae-tool-label"><?php echo esc_html__('Dark Mode', 'accessibility-enhancer') ?></span>
        </button>

        <button class="ae-tool" data-action="toggleUnderlineLinks" aria-label="<?php echo esc_attr__('Toggle underlined links', 'accessibility-enhancer') ?>">
            <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z" />
            </svg>
            <span class="ae-tool-label"><?php echo esc_html__('Underline Links', 'accessibility-enhancer') ?></span>
        </button>
    </div>
    </div> 
</div>