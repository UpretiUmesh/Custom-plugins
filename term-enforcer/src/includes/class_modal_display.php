<?php

namespace TermsEnforcer\Includes;

class Class_modal_display
{
    private $styles;

    public function __construct()
    {
        // $this->styles = get_option('modal_builder_styles');
        // add_action('wp_enqueue_scripts', array($this, 'enqueue_frontend_assets'));
        // add_action('wp_footer', array($this, 'display_modal'));
    }

    public function enqueue_frontend_assets()
    {
        wp_enqueue_style(
            'modal-builder-frontend',
            TE_PLUGIN_URL . 'src/assets/css/frontend.css',
            array(),
            TE_PLUGIN_URL
        );

        // Add dynamic inline CSS (must be here)
        if (!empty($this->styles)) {
            $styles = $this->styles;

            $dynamic_css = "
                .modal-builder-modal {
                    width: {$styles['size']['width']};
                    height: {$styles['size']['height']};
                    background-color: {$styles['colors']['background']};
                    color: {$styles['colors']['text']};
                    border-radius: {$styles['border']['radius']};
                    border: 1px solid {$styles['border']['color']};
                }
                .modal-builder-modal .modal-button {
                    background-color: {$styles['colors']['button_bg']};
                    color: {$styles['colors']['button_text']};
                }
            ";

            wp_add_inline_style('modal-builder-frontend', $dynamic_css);
        }

        wp_enqueue_script(
            'modal-builder-frontend',
            TE_PLUGIN_URL . 'src/assets/js/frontend.js',
            array('jquery'),
            TE_PLUGIN_URL,
            true
        );
    }

    public function display_modal()
    {
        if (empty($this->styles)) {
            return;
        }
?>
        <div class="modal-builder-modal" style="display: none;">
            <div class="modal-header">
                <h3>Modal Title</h3>
                <span class="modal-close">&times;</span>
            </div>
            <div class="modal-content">
                <p>This is your modal content. You can drag me around and resize me!</p>
                <p>Customize my appearance using the controls on the left.</p>
            </div>
            <div class="modal-footer">
                <button class="modal-button">Close</button>
                <button class="modal-button primary">Save</button>
            </div>
        </div>
<?php
    }
}
