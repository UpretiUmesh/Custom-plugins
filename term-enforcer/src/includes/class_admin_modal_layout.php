<?php

namespace TermsEnforcer\Includes;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class Class_admin_modal_layout
{
    private $styles = [
        'bootstrap' => [
            'name' => 'Bootstrap',
            'description' => 'Traditional responsive framework',
            'preview' => '<div class="modal-content" style="border:1px solid #dee2e6;border-radius:.3rem;"><div class="modal-header" style="padding:1rem;border-bottom:1px solid #dee2e6;background:#f8f9fa;"><h5 style="margin:0;">Bootstrap Modal</h5></div><div class="modal-body" style="padding:1rem;">Clean, professional look</div></div>',
            'css' => 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
            'js' => 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
        ],
        'tailwind' => [
            'name' => 'Tailwind',
            'description' => 'Modern utility-first CSS',
            'preview' => '<div style="background:white;padding:1.5rem;border-radius:.5rem;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);"><h3 style="font-weight:600;margin-top:0;">Tailwind Modal</h3><p style="margin-bottom:0;">Sleek, modern appearance</p></div>',
            'css' => 'https://cdn.jsdelivr.net/npm/tailwindcss@3.0.0/dist/tailwind.min.css',
            'js' => ''
        ],
        'minimal' => [
            'name' => 'Minimal',
            'description' => 'Simple lightweight style',
            'preview' => '<div style="border:1px solid #e0e0e0;padding:1rem;"><h4 style="margin:0 0 1rem 0;">Minimal Modal</h4><p style="margin:0;">No-frills approach</p></div>',
            'css' => '',
            'js' => ''
        ],
        'dark' => [
            'name' => 'Dark Mode',
            'description' => 'Dark color scheme',
            'preview' => '<div style="background:#2d3748;color:white;padding:1.5rem;border-radius:.25rem;"><h3 style="color:white;margin-top:0;">Dark Modal</h3><p style="margin-bottom:0;color:#e2e8f0;">Easy on the eyes</p></div>',
            'css' => '',
            'js' => ''
        ]
    ];

    /**
     * Get all available modal styles
     * 
     * @return array
     */
    public function get_styles(): array
    {
        return apply_filters('terms_enforcer_modal_styles', $this->styles);
    }

    /**
     * Enqueue assets for the selected modal style
     * 
     * @param string $style
     */
    public function enqueue_assets(string $style): void
    {
        $styles = $this->get_styles();

        if (!isset($styles[$style])) {
            return;
        }

        $selected_style = $styles[$style];

        if (!empty($selected_style['css'])) {
            wp_enqueue_style('terms-enforcer-modal-css', esc_url($selected_style['css']), [], null);
        }

        if (!empty($selected_style['js'])) {
            wp_enqueue_script('terms-enforcer-modal-js', esc_url($selected_style['js']), [], null, ['in_footer' => true]);
        }
    }

    /**
     * Render the style selector field
     * 
     * @param string $option_name
     * @param string $current_style
     */
    public function render_style_selector(string $option_name, string $current_style, $is_pro): void
    {
        $styles = $this->get_styles();

        // Pass the option_name to the template so it can use it for the hidden input
        Class_call_templates::render('admin/modalLayoutPre', [
            'current_style' => $current_style,
            'styleData' => $styles,
            'option_name' => $option_name,
            'is_pro' => $is_pro
        ]);
    }
}
