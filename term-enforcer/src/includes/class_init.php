<?php

namespace TermsEnforcer\Includes;

class Class_init
{
    private $styles;
    public function __construct()
    {
        $this->styles = get_option('modal_builder_styles');
        $this->trmInitClass();
        add_action('wp_enqueue_scripts', array($this, 'enqueue_assets'));
    }

    private function load_files()
    {
        require_once TE_PLUGIN_PATH . 'class_acceptacne_logger.php';
    }

    private function trmInitClass()
    {
        new Class_admin_settings();
        new Class_consent_logger();
        new Class_modal_injector();
        new Class_call_templates();
        new Class_modal_builder();
        new Class_modal_display();
        new Class_admin_modal_layout();
        new Class_age_verification();
        new Class_acceptance_log();
        $class = new Class_License_Checker();
        $class->define_pro_constant();
        new Class_accessibility_settings();
        new Class_toolbar_render();

    }

    public function enqueue_assets()
    {
        // Bootstrap CSS & JS
        wp_enqueue_style('bootstrap-css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
        wp_enqueue_script('bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', [], null, true);

        // Custom modal script
        wp_enqueue_script('te-modal-script', TE_PLUGIN_URL . 'src/assets/js/modal.js', ['jquery'], time(), true);
        wp_enqueue_script('te-modal-script', TE_PLUGIN_URL . 'src/assets/js/frontend.js', ['jquery'], time(), true);
        wp_enqueue_style('te-modal-frontend', TE_PLUGIN_URL . 'src/assets/css/frontend.css', array(), TE_PLUGIN_URL);
        wp_enqueue_script('mss-modal-handler', TE_PLUGIN_URL . 'src/assets/js/modal-handler.js', ['jquery'], '1.0', true);


        // Add dynamic inline CSS (must be here)
        if (!empty($this->styles)) {
            $styles = $this->styles;

            $dynamic_css = "
                .teTerms-modals {
                    width: {$styles['size']['width']};
                    height: {$styles['size']['height']};
                    background-color: {$styles['colors']['background']};
                    color: {$styles['colors']['text']};
                    border-radius: {$styles['border']['radius']};
                    border: 1px solid {$styles['border']['color']};
                }
                .teTerms-modals .modal-button-custom {
                    background-color: {$styles['colors']['button_bg']};
                    color: {$styles['colors']['button_text']};
                }
            ";
            wp_add_inline_style('te-modal-frontend', $dynamic_css);
        }

        wp_localize_script('te-modal-script', 'teAjax', [
            'ajax_url' => admin_url('admin-ajax.php'),
            'security' => wp_create_nonce('te_log_acceptance'), // Nonce for default check
        ]);

        // Get settings from DB
        $options = get_option('te_settings_general', []);
        $content = get_option('te_settings_advanced');

        // Determine the terms text
        $termsText = '';
        if (isset($content['terms_page_id']) && !empty($content['terms_page_id'])) {
            // Get the terms page content
            $terms_page = get_post($content['terms_page_id']);
            if ($terms_page) {
                $termsText = apply_filters('the_content', $terms_page->post_content);
            }
        } else {
            // Fallback to modal builder content or default text
            $termsText = isset($content['te_terms_text']) && $content['te_terms_text']
                ? wpautop(wp_kses_post($content['te_terms_text']))
                : __('Please enter your terms in plugin settings.', 'terms-enforcer');
        }

        $thismodalRepeatInterval = isset($options['modal_repeat_interval']) && $options['modal_repeat_interval']
            ? sanitize_text_field($options['modal_repeat_interval'])
            : 'always';

        // Pass data to JS
        wp_localize_script('te-modal-script', 'teModalData', [
            'termsText' => $termsText,
            'buttonText' => isset($options['button_text']) ? esc_html($options['button_text']) : __('Accept Terms', 'terms-enforcer'),
            'enabled'    => !empty($options['enable_condition']),
            'checkboxDelay' => $options['checkbox_delay'] ?? 0,
            'modalRepeatInterval' => $thismodalRepeatInterval,
        ]);
    }
}
