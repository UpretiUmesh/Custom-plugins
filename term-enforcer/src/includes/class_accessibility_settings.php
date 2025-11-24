<?php

namespace TermsEnforcer\Includes;

class Class_accessibility_settings
{
    private $option_name = 'ae_accessibility_settings';
    private $is_premium = false;

    public function __construct()
    {
        $this->is_premium = defined('TE_PREMIUM_VERSION') && TE_PREMIUM_VERSION;

        add_action('admin_menu', [$this, 'register_submenu_page']);
        add_action('admin_init', [$this, 'register_settings']);
    }

    public function register_submenu_page()
    {
        add_submenu_page(
            'te-settings',
            __('Accessibility Settings', 'term-enforcer'),
            __('Accessibility', 'term-enforcer'),
            'manage_options',
            'term-enforcer-accessibility',
            [$this, 'render_settings_page']
        );
    }

    public function register_settings()
    {
        register_setting('term_enforcer_accessibility_group', $this->option_name);

        add_settings_section(
            'ae_section_main',
            __('Accessibility Features', 'term-enforcer'),
            [$this, 'section_main_description'],
            'term-enforcer-accessibility'
        );

        $base_fields = [
            'enable_skip_link' => [
                'label' => 'Add Skip to Content Link',
                'description' => 'Adds a "Skip to content" link for keyboard users'
            ],
            'enable_contrast' => [
                'label' => 'Basic Contrast Mode',
                'description' => 'Provides a basic contrast color scheme option'
            ]
        ];

        $premium_fields = [
            'enable_toolbar' => [
                'label' => 'Enable Accessibility Toolbar',
                'description' => 'Shows a floating toolbar with accessibility options',
                'premium' => true
            ],
            'enable_focus_trap' => [
                'label' => 'Enable Focus Trap in Modals',
                'description' => 'Keeps keyboard focus within open modal dialogs',
                'premium' => true
            ],
            'enable_font_toggle' => [
                'label' => 'Font Size Toggle',
                'description' => 'Allows users to increase font sizes',
                'premium' => true
            ],
            'pause_animations' => [
                'label' => 'Allow Pausing Animations',
                'description' => 'Adds controls to reduce or remove motion',
                'premium' => true
            ],
        ];

        // Merge fields based on premium status
        $fields = $this->is_premium ? array_merge($base_fields, $premium_fields) : $base_fields;

        foreach ($fields as $key => $field) {
            add_settings_field(
                $key,
                $this->get_field_label($field),
                function () use ($key, $field) {
                    $this->render_settings_field($key, $field);
                },
                'term-enforcer-accessibility',
                'ae_section_main'
            );
        }
    }

    private function get_field_label($field)
    {
        $label = __($field['label'], 'term-enforcer');

        if (isset($field['premium']) && $field['premium'] && !$this->is_premium) {
            $label .= ' <span class="ae-premium-badge">PRO</span>';
        }

        return $label;
    }

    public function section_main_description()
    {
        echo '<div class="ae-section-description">';
        echo '<p>' . esc_html__('Configure accessibility features for Term Enforcer. These options help make your content more accessible to all users.', 'term-enforcer') . '</p>';

        if (!$this->is_premium) {
            echo '<div class="ae-upgrade-notice">';
            echo '<p><strong>' . esc_html__('Unlock more accessibility features:', 'term-enforcer') . '</strong></p>';
            echo '<p>' . esc_html__('Upgrade to Term Enforcer Premium to get advanced accessibility tools like the floating toolbar, font size controls, and animation pausing.', 'term-enforcer') . '</p>';
            echo '<a href="' . esc_url(admin_url('admin.php?page=term-enforcer-pricing')) . '" class="button button-primary">' . esc_html__('Upgrade Now', 'term-enforcer') . '</a>';
            echo '</div>';
        }

        echo '</div>';
    }

    public function render_settings_field($key, $field)
    {
        $options = get_option($this->option_name);
        $value = $options[$key] ?? '';
        $is_premium_feature = isset($field['premium']) && $field['premium'];

        echo '<div class="ae-field-wrapper' . ($is_premium_feature && !$this->is_premium ? ' ae-premium-field' : '') . '">';

        if ($is_premium_feature && !$this->is_premium) {
            echo '<div class="ae-premium-overlay"></div>';
        }

        echo '<label class="ae-toggle">';
        echo '<input type="checkbox" name="' . esc_attr($this->option_name) . '[' . esc_attr($key) . ']" value="1"' .
            checked(1, $value, false) .
            ($is_premium_feature && !$this->is_premium ? ' disabled' : '') . ' />';
        echo '<span class="ae-toggle-slider"></span>';
        echo '</label>';
        echo '<p class="description">' . esc_html__($field['description'], 'term-enforcer') . '</p>';

        echo '</div>';
    }

    public function render_settings_page()
    {
        Class_call_templates::render('admin/accessibilityAdminTemplate',[
            'is_premium' => $this->is_premium 
        ]);
    }
}
