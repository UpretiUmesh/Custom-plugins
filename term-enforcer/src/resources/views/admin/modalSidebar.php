<div class="modal-builder-container">
    <div class="builder-sidebar">
        <div class="sidebar-tabs">
            <button class="tab-button active" data-tab="content-tab">Content</button>
            <button class="tab-button" data-tab="style-tab" disabled>Styles</button>
        </div>

        <div id="content-tab" class="tab-content active">
            <div class="control-section">
                <h3><?php _e('Modal Content','terms-enforcer'); ?></h3>
                <div class="control-group">
                    <label><?php _e('Title','terms-enforcer');?></label>
                    <input type="text" id="modal-title" value="<?php echo esc_attr($title); ?>">
                </div>
                <div class="control-group">
                    <label><?php _e('Body Content','terms-enforcer');?></label>
                    <?php
                    wp_editor(
                        $body,
                        'modal-body-content',
                        array(
                            'textarea_name' => 'modal-body-content',
                            'media_buttons' => true,
                            'textarea_rows' => 8,
                            'teeny' => true
                        )
                    );
                    ?>
                </div>
            </div>

            <div class="control-section">
                <h3><?php _e('Buttons','terms-enforcer');?></h3>
                <div class="control-group">
                    <label><?php _e('Primary Button Text','terms-enforcer');?></label>
                    <input type="text" id="modal-primary-btn" value="<?php echo esc_attr($primary); ?>">
                </div>
                <div class="control-group">
                    <label><?php _e('Secondary Button Text','terms-enforcer');?></label>
                    <input type="text" id="modal-secondary-btn" value="<?php echo esc_attr($secondary); ?>">
                </div>
            </div>

            <button id="save-modal-content" class="button button-primary"><?php _e('Save Content','terms-enforcer');?></button>
        </div>

        <div id="style-tab" class="tab-content">
            <div class="control-section">
                <h3><?php _e('Size & Position','terms-enforcer');?></h3>
                <div class="control-group">
                    <label><?php _e('Width','terms-enforcer');?></label>
                    <input type="text" id="modal-width" value="600px">
                </div>
                <div class="control-group">
                    <label><?php _e('Height','terms-enforcer');?></label>
                    <input type="text" id="modal-height" value="400px">
                </div>
            </div>

            <div class="control-section">
                <h3><?php _e('Colors','terms-enforcer');?></h3>
                <div class="control-group">
                    <label><?php _e('Background','terms-enforcer');?></label>
                    <input type="text" class="color-picker" id="modal-bg-color" value="#ffffff">
                </div>
                <div class="control-group">
                    <label><?php _e('Text','terms-enforcer');?></label>
                    <input type="text" class="color-picker" id="modal-text-color" value="#333333">
                </div>
            </div>

            <div class="control-section">
                <h3><?php _e('Border','terms-enforcer');?></h3>
                <div class="control-group">
                    <label><?php _e('Radius','terms-enforcer');?></label>
                    <input type="text" id="modal-border-radius" value="5px">
                </div>
                <div class="control-group">
                    <label><?php _e('Color','terms-enforcer');?></label>
                    <input type="text" class="color-picker" id="modal-border-color" value="#dddddd">
                </div>
            </div>

            <div class="control-section">
                <h3><?php _e('Button','terms-enforcer');?></h3>
                <div class="control-group">
                    <label><?php _e('Button Color','terms-enforcer');?></label>
                    <input type="text" class="color-picker" id="modal-pb-color" value="#ffffff">
                </div>
                <div class="control-group">
                    <label><?php _e('Button Text','terms-enforcer');?></label>
                    <input type="text" class="color-picker" id="modal-sb-color" value="#333333">
                </div>
            </div>

            <button id="save-modal-styles" class="button button-primary"><?php _e('Save Styles','terms-enforcer');?></button>
        </div>
    </div>