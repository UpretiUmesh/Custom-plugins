<?php

namespace TermsEnforcer\Includes;

if (!defined('ABSPATH')) {
    exit;
}

class Class_admin_settings
{
    private $option_prefix = 'te_settings_';
    private $modal_layout;
    private $tabs;
    private $styles = [
    'bootstrap' => [
        'css' => 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
        'js'  => 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
    ]
];

    private $logo_uploader;

    public function __construct()
    {
        $this->modal_layout = new Class_admin_modal_layout();
        $is_premiums = Class_License_Checker::is_pro();
        $this->logo_uploader = new Class_Admin_Logo_Uploader($this->option_prefix . 'advanced', $is_premiums);
        $this->setup_tabs();

        add_action('admin_menu', [$this, 'add_menu']);
        add_action('admin_init', [$this, 'register_settings']);
        add_action('wp_head', [$this, 'output_custom_css']);
        add_action('wp_footer', [$this, 'output_custom_js']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_modal_assets']);
    }

    private function setup_tabs()
    {
        $this->tabs = [
            'general' => [
                'title' => __('General Settings', 'terms-enforcer'),
                'icon' => 'dashicons-admin-settings',
                'option_name' => $this->option_prefix . 'general',
                'sections' => [
                    'general_section' => [
                        'title' => __('Core Functionality', 'terms-enforcer'),
                        'description' => __('Control the basic behavior of the terms enforcement system.', 'terms-enforcer'),
                        'fields' => [
                            'enable_condition' => [
                                'label' => __('Enable Terms Enforcement', 'terms-enforcer'),
                                'description' => __('Toggle the entire terms enforcement system on or off.', 'terms-enforcer'),
                                'callback' => 'field_enable_condition_cb',
                                'premium' => true
                            ],
                            'modal_repeat_interval' => [
                                'label' => __('Repeat Modal Interval', 'terms-enforcer'),
                                'description' => __('How often should users see the modal?', 'terms-enforcer'),
                                'callback' => 'field_modal_repeat_interval_cb',
                                'premium' => true
                            ],
                            'checkbox_delay' => [
                                'label' => __('Checkbox Enable Delay', 'terms-enforcer'),
                                'description' => __('Seconds to wait before enabling the accept checkbox (0 for immediate)', 'terms-enforcer'),
                                'callback' => 'field_checkbox_delay_cb',
                                'premium' => true
                            ],
                        ]
                    ]
                ]
            ],
            'modal_layout' => [
                'title' => __('Design & Appearance', 'terms-enforcer'),
                'icon' => 'dashicons-art',
                'option_name' => $this->option_prefix . 'modal_layout',
                'sections' => [
                    'modal_layout_section' => [
                        'title' => __('Modal Styling', 'terms-enforcer'),
                        'description' => __('Customize how your terms modal looks and behaves.', 'terms-enforcer'),
                        'fields' => [
                            'modal_layout' => [
                                'label' => __('Modal Style Preset', 'terms-enforcer'),
                                'description' => __('Choose from pre-designed modal templates.', 'terms-enforcer'),
                                'callback' => 'render_modal_layout_field',
                                'premium' => true
                            ],
                            'custom_css' => [
                                'label' => __('Custom CSS', 'terms-enforcer'),
                                'description' => __('Add your own CSS rules for advanced customization.', 'terms-enforcer'),
                                'callback' => 'render_custom_css_field',
                                'premium' => true
                            ],
                            'custom_js' => [
                                'label' => __('Custom JavaScript', 'terms-enforcer'),
                                'description' => __('Add custom JavaScript for advanced functionality.', 'terms-enforcer'),
                                'callback' => 'render_custom_js_field',
                                'premium' => true
                            ],
                        ]
                    ]
                ]
            ],
            'advanced' => [
                'title' => __('Content & Text', 'terms-enforcer'),
                'icon' => 'dashicons-edit',
                'option_name' => $this->option_prefix . 'advanced',
                'sections' => [
                    'advance_section' => [
                        'title' => __('Modal Content', 'terms-enforcer'),
                        'description' => __('Customize all text elements that appear in the modal.', 'terms-enforcer'),
                        'fields' => [
                            'modal_title' => [
                                'label' => __('Modal Title', 'terms-enforcer'),
                                'description' => __('The heading that appears at the top of the modal.', 'terms-enforcer'),
                                'callback' => 'field_modal_title_cb',
                                'premium' => true
                            ],
                            'modal_logo' => [
                                'label' => __('Modal Logo', 'terms-enforcer'),
                                'description' => __('Upload a logo to display at the top of the modal.', 'terms-enforcer'),
                                'callback' => 'field_modal_logo_cb',
                                'premium' => true
                            ],
                            'modal_content' => [
                                'label' => __('Terms Content', 'terms-enforcer'),
                                'description' => __('The main content of your terms agreement.', 'terms-enforcer'),
                                'callback' => 'field_terms_text_cb'
                            ],
                            'terms_page_id' => [
                                'label' => __('Terms Page', 'terms-enforcer'),
                                'description' => __('Link to your full terms and conditions page.', 'terms-enforcer'),
                                'callback' => 'field_terms_page_select_cb',
                                'premium' => true
                            ],
                            'privacy_page_id' => [
                                'label' => __('Privacy Page', 'terms-enforcer'),
                                'description' => __('Link to your privacy policy page.', 'terms-enforcer'),
                                'callback' => 'field_privacy_page_select_cb',
                                'premium' => true
                            ],
                            'modal_button' => [
                                'label' => __('Accept Button Text', 'terms-enforcer'),
                                'description' => __('The text for the main call-to-action button.', 'terms-enforcer'),
                                'callback' => 'field_button_text_cb',
                                'premium' => true
                            ],
                            'gdpr_notice' => [
                                'label' => __('GDPR Compliance', 'terms-enforcer'),
                                'description' => __('Enable GDPR consent checkbox for data processing.', 'terms-enforcer'),
                                'callback' => 'field_enable_gdpr_notice_cb',
                                'premium' => true
                            ],
                            'gdpr_text' => [
                                'label' => __('GDPR Consent Text', 'terms-enforcer'),
                                'description' => __('The text that appears next to the GDPR checkbox.', 'terms-enforcer'),
                                'callback' => 'field_gdpr_notice_text_cb',
                                'premium' => true
                            ],
                        ]
                    ]
                ]
            ],
            'age_verification' => [
                'title' => __('Age Gate', 'terms-enforcer'),
                'icon' => 'dashicons-lock',
                'option_name' => $this->option_prefix . 'age_verification',
                'sections' => [
                    'age_section' => [
                        'title' => __('Age Verification', 'terms-enforcer'),
                        'description' => __('Restrict access based on user age requirements.', 'terms-enforcer'),
                        'fields' => [
                            'enable_age_verification' => [
                                'label' => __('Enable Age Verification', 'terms-enforcer'),
                                'description' => __('Require users to verify their age before accessing content.', 'terms-enforcer'),
                                'callback' => 'field_enable_age_verification_cb',
                                'premium' => true
                            ],
                            'age_limit' => [
                                'label' => __('Minimum Age', 'terms-enforcer'),
                                'description' => __('Set the minimum required age for access.', 'terms-enforcer'),
                                'callback' => 'field_age_limit_cb',
                                'premium' => true
                            ]
                        ]
                    ]
                ]
            ]
        ];
    }

    public function enqueue_modal_assets()
    {
        $options = get_option($this->option_prefix . 'modal_layout', []);
        $style = $options['modal_layout'] ?? 'bootstrap';

        if (!empty($this->styles[$style]['css'])) {
            wp_enqueue_style('te-modal-css', $this->styles[$style]['css'], [], null);
        }

        if (!empty($this->styles[$style]['js'])) {
            wp_enqueue_script('te-modal-js', $this->styles[$style]['js'], [], null, true);
        }
    }

    public function add_menu()
    {
        add_menu_page(
            __('Terms Enforcer', 'terms-enforcer'),
            __('Terms Enforcer', 'terms-enforcer'),
            'manage_options',
            'te-settings',
            [$this, 'settings_page'],
            'dashicons-yes'
        );
    }

    public function register_settings()
    {
        foreach ($this->tabs as $tab_key => $tab) {
            register_setting(
                'te_settings_group_' . $tab_key,
                $tab['option_name'],
                [$this, 'sanitize_settings']
            );

            foreach ($tab['sections'] as $section_id => $section_data) {
                add_settings_section(
                    $section_id,
                    '',
                    null,
                    "te-settings-{$tab_key}"
                );

                foreach ($section_data['fields'] as $field_key => $field_data) {
                    add_settings_field(
                        $field_key,
                        $field_data['label'],
                        [$this, $field_data['callback']],
                        "te-settings-{$tab_key}",
                        $section_id,
                        ['option_name' => $tab['option_name']]
                    );
                }
            }
        }
    }

    public function sanitize_settings($input)
    {
        $sanitized = [];
        
        // Determine which tab is being saved
        $current_tab = '';
        foreach ($this->tabs as $tab_key => $tab) {
            if ($tab['option_name'] == $_POST['option_page']) {
                $current_tab = $tab_key;
                break;
            }
        }

        if (empty($current_tab)) {
            return $input;
        }

        // Get existing options for this tab
        $existing_options = get_option($this->tabs[$current_tab]['option_name'], []);

        // Handle checkboxes
        $checkboxes = [];
        foreach ($this->tabs[$current_tab]['sections'] as $section) {
            foreach ($section['fields'] as $field_key => $field) {
                if (strpos($field['callback'], 'field_enable_') === 0 || 
                    strpos($field['callback'], 'field_gdpr_') === 0) {
                    $checkboxes[] = $field_key;
                }
            }
        }

        foreach ($checkboxes as $checkbox) {
            $sanitized[$checkbox] = isset($input[$checkbox]) ? 1 : 0;
        }

        // Sanitize other fields
        foreach ($input as $key => $value) {
            if (in_array($key, $checkboxes)) continue;

            switch ($key) {
                case 'modal_repeat_interval':
                case 'modal_layout':
                case 'modal_title':
                case 'button_text':
                    $sanitized[$key] = sanitize_text_field($value);
                    break;
                
                case 'custom_css':
                case 'custom_js':
                case 'te_terms_text':
                case 'gdpr_text':
                    $sanitized[$key] = wp_kses_post($value);
                    break;
                
                case 'terms_page_id':
                case 'privacy_page_id':
                case 'modal_logo':
                case 'age_limit':
                case 'checkbox_delay':
                    $sanitized[$key] = absint($value);
                    break;
                
                default:
                    $sanitized[$key] = sanitize_text_field($value);
                    break;
            }
        }

        return array_merge($existing_options, $sanitized);
    }

    public function settings_page()
    {
        $active_tab = $_GET['tab'] ?? array_key_first($this->tabs);
        $current_tab = $this->tabs[$active_tab];
        ?>
        <div class="wrap te-settings-wrap">
            <div class="te-header">
                <div class="te-header-content">
                    <h1><span class="dashicons dashicons-yes-alt"></span> <?php _e('Terms Enforcer Settings', 'terms-enforcer'); ?></h1>
                    <p class="te-description"><?php _e('Configure how terms acceptance works on your website', 'terms-enforcer'); ?></p>
                </div>
                <div class="te-header-badge">
                    <span class="te-version"><?php echo TE_PLUGIN_VERSION; ?></span>
                    <?php if (!$this->is_premium_active()): ?>
                        <a href="<?php echo admin_url('admin.php?page=te-license'); ?>" class="te-upgrade-button">
                            <?php _e('Upgrade to Pro', 'terms-enforcer'); ?>
                        </a>
                    <?php endif; ?>
                </div>
            </div>

            <div class="te-tabs-container">
                <nav class="te-tabs-nav">
                    <?php foreach ($this->tabs as $tab_key => $tab) : ?>
                        <a href="?page=te-settings&tab=<?php echo esc_attr($tab_key); ?>"
                            class="te-tab <?php echo $active_tab === $tab_key ? 'te-tab-active' : ''; ?>">
                            <span class="dashicons <?php echo esc_attr($tab['icon']); ?>"></span>
                            <?php echo esc_html($tab['title']); ?>
                        </a>
                    <?php endforeach; ?>
                </nav>

                <div class="te-tab-content">
                    <form method="post" action="options.php">
                        <?php
                        settings_fields('te_settings_group_' . $active_tab);
                        wp_nonce_field('te_settings_nonce', 'te_settings_nonce');

                        foreach ($current_tab['sections'] as $section_id => $section_data) {
                            echo '<div class="te-settings-section">';
                              echo '<div class="main-heading-sec">';
                            echo '<h2 class="te-section-title">' . esc_html($section_data['title']) . '</h2>';
                            if (!empty($section_data['description'])) {
                                echo '<p class="te-section-description">' . esc_html($section_data['description']) . '</p>';
                            } echo '</div>';
                            do_settings_sections("te-settings-{$active_tab}");
                            echo '</div>';
                        }

                        if (!$this->is_premium_active() && $this->has_premium_fields($active_tab)) {
                            $this->show_upgrade_notice();
                        }

                        submit_button(__('Save Settings', 'terms-enforcer'), 'primary te-save-button');
                        ?>
                    </form>
                </div>
            </div>

            <div class="te-sidebar">
                <div class="te-card">
                    <h3><span class="dashicons dashicons-info"></span> <?php _e('Need Help?', 'terms-enforcer'); ?></h3>
                    <p><?php _e('Check out our documentation for detailed setup instructions.', 'terms-enforcer'); ?></p>
                    <a href="https://docs.yourplugin.com" target="_blank" class="button">
                        <?php _e('View Documentation', 'terms-enforcer'); ?>
                    </a>
                </div>

                <div class="te-card">
                    <h3><span class="dashicons dashicons-star-filled"></span> <?php _e('Premium Features', 'terms-enforcer'); ?></h3>
                    <ul class="te-feature-list">
                        <li><?php _e('Advanced modal designs', 'terms-enforcer'); ?></li>
                        <li><?php _e('Age verification system', 'terms-enforcer'); ?></li>
                        <li><?php _e('GDPR compliance tools', 'terms-enforcer'); ?></li>
                        <li><?php _e('Priority support', 'terms-enforcer'); ?></li>
                    </ul>
                    <a href="<?php echo admin_url('admin.php?page=te-license'); ?>" class="button button-primary">
                        <?php _e('Upgrade Now', 'terms-enforcer'); ?>
                    </a>
                </div>
            </div>
        </div>
        <?php
    }

    private function is_premium_active()
    {
        return defined('TE_PREMIUM_VERSION') && TE_PREMIUM_VERSION;
    }

    private function has_premium_fields($tab_key)
    {
        if (!isset($this->tabs[$tab_key])) return false;

        foreach ($this->tabs[$tab_key]['sections'] as $section) {
            foreach ($section['fields'] as $field) {
                if (isset($field['premium']) && $field['premium']) {
                    return true;
                }
            }
        }
        return false;
    }

    private function show_upgrade_notice()
    {
        ?>
        <div class="te-upgrade-notice">
            <div class="te-upgrade-content">
                <h3><span class="dashicons dashicons-unlock"></span> <?php _e('Premium Features Locked', 'terms-enforcer'); ?></h3>
                <p><?php _e('The following settings require a premium license to activate.', 'terms-enforcer'); ?></p>
                <a href="<?php echo admin_url('admin.php?page=te-license'); ?>" class="button button-primary te-upgrade-button">
                    <?php _e('Unlock Premium Features', 'terms-enforcer'); ?>
                </a>
            </div>
        </div>
        <?php
    }

    // Field callbacks - updated to use the correct option name for each tab
    public function field_enable_condition_cb($args)
    {
        $options = get_option($args['option_name'], []);
        $is_pro = $this->is_premium_active();
        ?>
        <label>
            <input type="checkbox"
                name="<?php echo esc_attr($args['option_name']); ?>[enable_condition]"
                value="1"
                <?php checked(1, $options['enable_condition'] ?? 0); ?>
                <?php if (!$is_pro) echo 'disabled'; ?> />
            <?php _e('Enable Terms Enforcement', 'terms-enforcer'); ?>
        </label>
        <?php if (!$is_pro) $this->show_premium_feature_notice(); ?>
        <?php
    }

    public function field_modal_repeat_interval_cb($args)
    {
        $options = get_option($args['option_name'], []);
        $value = $options['modal_repeat_interval'] ?? 'always';
        $choices = [
            'always' => __('Every Visit', 'terms-enforcer'),
            '1'      => __('1 Day', 'terms-enforcer'),
            '7'      => __('7 Days', 'terms-enforcer'),
            '30'     => __('30 Days', 'terms-enforcer'),
        ];
        $is_pro = $this->is_premium_active();
        ?>
        <select name="<?php echo esc_attr($args['option_name']); ?>[modal_repeat_interval]" <?php if (!$is_pro) echo 'disabled'; ?>>
            <?php foreach ($choices as $key => $label) : ?>
                <option value="<?php echo esc_attr($key); ?>" <?php selected($value, $key); ?>>
                    <?php echo esc_html($label); ?>
                </option>
            <?php endforeach; ?>
        </select>
        <p class="description"><?php _e('Choose how often the modal should appear to the same user.', 'terms-enforcer'); ?></p>
        <?php if (!$is_pro) $this->show_premium_feature_notice(); ?>
        <?php
    }

    public function render_modal_layout_field($args)
    {
        $options = get_option($args['option_name'], []);
        $current_style = $options['modal_layout'] ?? 'bootstrap';
        $is_pro = $this->is_premium_active();
        $this->modal_layout->render_style_selector($args['option_name'], $current_style, !$is_pro);
        if (!$is_pro) $this->show_premium_feature_notice();
    }

    public function render_custom_css_field($args)
    {
        $options = get_option($args['option_name'], []);
        $custom_css = $options['custom_css'] ?? '';
        $is_pro = $this->is_premium_active();
        echo '<textarea name="' . esc_attr($args['option_name']) . '[custom_css]" style="width:100%;height:150px;" ' . (!$is_pro ? 'disabled' : '') . '>' . esc_textarea($custom_css) . '</textarea>';
        if (!$is_pro) $this->show_premium_feature_notice();
    }

    public function render_custom_js_field($args)
    {
        $options = get_option($args['option_name'], []);
        $custom_js = $options['custom_js'] ?? '';
        $is_pro = $this->is_premium_active();
        echo '<textarea name="' . esc_attr($args['option_name']) . '[custom_js]" style="width:100%;height:150px;" ' . (!$is_pro ? 'disabled' : '') . '>' . esc_textarea($custom_js) . '</textarea>';
        if (!$is_pro) $this->show_premium_feature_notice();
    }

    public function field_modal_title_cb($args)
    {
        $options = get_option($args['option_name'], []);
        $is_pro = $this->is_premium_active();
        ?>
        <input type="text"
            name="<?php echo esc_attr($args['option_name']); ?>[modal_title]"
            value="<?php echo esc_attr($options['modal_title'] ?? __('Please Accept Terms', 'terms-enforcer')); ?>"
            class="regular-text"
            <?php if (!$is_pro) echo 'disabled'; ?> />
        <?php if (!$is_pro) $this->show_premium_feature_notice(); ?>
        <?php
    }

    public function field_terms_text_cb($args)
    {
        $options = get_option($args['option_name'], []);
        $content = $options['te_terms_text'] ?? '';
        $settings = [
            'textarea_name' => $args['option_name'] . '[te_terms_text]',
            'textarea_rows' => 10,
            'media_buttons' => false,
        ];

        if (!$this->is_premium_active()) {
            $settings['editor_class'] = 'disabled-wp-editor';
            echo '<style>.disabled-wp-editor .wp-editor-tools, .disabled-wp-editor .mce-tinymce { opacity: 0.6; pointer-events: none; }</style>';
        }

        wp_editor($content, $args['option_name'] . '_te_terms_text', $settings);

        if (!$this->is_premium_active()) {
            $this->show_premium_feature_notice();
        }
    }

    public function field_button_text_cb($args)
    {
        $options = get_option($args['option_name'], []);
        $is_pro = $this->is_premium_active();
        ?>
        <input type="text"
            name="<?php echo esc_attr($args['option_name']); ?>[button_text]"
            value="<?php echo esc_attr($options['button_text'] ?? __('Accept Terms', 'terms-enforcer')); ?>"
            class="regular-text"
            <?php if (!$is_pro) echo 'disabled'; ?> />
        <?php if (!$is_pro) $this->show_premium_feature_notice(); ?>
        <?php
    }

    public function field_enable_age_verification_cb($args)
    {
        $options = get_option($args['option_name'], []);
        $is_pro = $this->is_premium_active();
        ?>
        <label>
            <input type="checkbox"
                name="<?php echo esc_attr($args['option_name']); ?>[enable_age_verification]"
                value="1"
                <?php checked(1, $options['enable_age_verification'] ?? 0); ?>
                <?php if (!$is_pro) echo 'disabled'; ?> />
            <?php _e('Enable age verification popup on site load.', 'terms-enforcer'); ?>
        </label>
        <?php if (!$is_pro) $this->show_premium_feature_notice(); ?>
        <?php
    }

    public function field_age_limit_cb($args)
    {
        $options = get_option($args['option_name'], []);
        $is_pro = $this->is_premium_active();
        $value = $options['age_limit'] ?? 18;
        ?>
        <input type="number" min="1"
            name="<?php echo esc_attr($args['option_name']); ?>[age_limit]"
            value="<?php echo esc_attr($value); ?>"
            class="small-text"
            <?php if (!$is_pro) echo 'disabled'; ?> />
        <p class="description"><?php _e('Enter the minimum required age.', 'terms-enforcer'); ?></p>
        <?php if (!$is_pro) $this->show_premium_feature_notice(); ?>
        <?php
    }

    public function field_enable_gdpr_notice_cb($args)
    {
        $options = get_option($args['option_name'], []);
        $is_pro = $this->is_premium_active();
        ?>
        <label>
            <input type="checkbox"
                name="<?php echo esc_attr($args['option_name']); ?>[enable_gdpr_notice]"
                value="1"
                <?php checked(1, $options['enable_gdpr_notice'] ?? 0); ?>
                <?php if (!$is_pro) echo 'disabled'; ?> />
            <?php _e('Enable GDPR consent checkbox in modal', 'terms-enforcer'); ?>
        </label>
        <?php if (!$is_pro) $this->show_premium_feature_notice(); ?>
        <?php
    }

    public function field_gdpr_notice_text_cb($args)
    {
        $options = get_option($args['option_name'], []);
        $is_pro = $this->is_premium_active();
        $text = $options['gdpr_text'] ?? __('I agree to the Privacy Policy and data handling terms.', 'terms-enforcer');
        ?>
        <textarea name="<?php echo esc_attr($args['option_name']); ?>[gdpr_text]"
            rows="4" style="width:100%;"
            <?php if (!$is_pro) echo 'disabled'; ?>><?php echo esc_textarea($text); ?></textarea>
        <?php if (!$is_pro) $this->show_premium_feature_notice(); ?>
        <?php
    }

    private function show_premium_feature_notice()
    {
        ?>
        <div class="te-premium-feature-notice">
            <span class="dashicons dashicons-lock"></span>
            <span class="te-premium-text">
                <?php
                printf(
                    __('Premium feature. %sUpgrade to unlock%s', 'terms-enforcer'),
                    '<a href="' . admin_url('admin.php?page=te-license') . '">',
                    '</a>'
                );
                ?>
            </span>
        </div>
        <?php
    }

    public function field_privacy_page_select_cb($args)
    {
        $options = get_option($args['option_name'], []);
        $selected = $options['privacy_page_id'] ?? 0;
        $pages = get_pages(['sort_column' => 'post_title', 'sort_order' => 'asc']);
        $is_pro = $this->is_premium_active();
        ?>
        <select name="<?php echo esc_attr($args['option_name']); ?>[privacy_page_id]" <?php if (!$is_pro) echo 'disabled'; ?>>
            <option value=""><?php _e('-- Select Privacy Page --', 'terms-enforcer'); ?></option>
            <?php foreach ($pages as $page) : ?>
                <option value="<?php echo esc_attr($page->ID); ?>" <?php selected($selected, $page->ID); ?>>
                    <?php echo esc_html($page->post_title); ?>
                </option>
            <?php endforeach; ?>
        </select>
        <?php if (!$is_pro) $this->show_premium_feature_notice(); ?>
        <?php
    }

    public function field_terms_page_select_cb($args)
    {
        $options = get_option($args['option_name'], []);
        $selected = $options['terms_page_id'] ?? 0;
        $pages = get_pages(['sort_column' => 'post_title', 'sort_order' => 'asc']);
        $is_pro = $this->is_premium_active();
        ?>
        <select name="<?php echo esc_attr($args['option_name']); ?>[terms_page_id]" <?php if (!$is_pro) echo 'disabled'; ?>>
            <option value=""><?php _e('-- Select Terms Page --', 'terms-enforcer'); ?></option>
            <?php foreach ($pages as $page) : ?>
                <option value="<?php echo esc_attr($page->ID); ?>" <?php selected($selected, $page->ID); ?>>
                    <?php echo esc_html($page->post_title); ?>
                </option>
            <?php endforeach; ?>
        </select>
        <?php if (!$is_pro) $this->show_premium_feature_notice(); ?>
        <?php
    }

    public function output_custom_css()
    {
        $options = get_option($this->option_prefix . 'modal_layout', []);
        $css = $options['custom_css'] ?? '';
        if ($css) {
            echo '<style>' . wp_kses($css, []) . '</style>';
        }
    }

    public function output_custom_js()
    {
        $options = get_option($this->option_prefix . 'modal_layout', []);
        $js = $options['custom_js'] ?? '';
        if ($js) {
            echo '<script>' . wp_kses($js, []) . '</script>';
        }
    }

    public function field_modal_logo_cb($args)
    {
        $this->logo_uploader->render_logo_upload_field();
        if (!$this->is_premium_active()) {
            $this->show_premium_feature_notice();
        }
    }

    public function field_checkbox_delay_cb($args)
    {
        $options = get_option($args['option_name'], []);
        $value = $options['checkbox_delay'] ?? 0;
        $is_pro = $this->is_premium_active();
        ?>
        <input type="number" min="0" step="1"
            name="<?php echo esc_attr($args['option_name']); ?>[checkbox_delay]"
            value="<?php echo esc_attr($value); ?>"
            class="small-text"
            <?php if (!$is_pro) echo 'disabled'; ?> />
        <p class="description"><?php _e('Seconds to wait before enabling the accept checkbox', 'terms-enforcer'); ?></p>
        <?php if (!$is_pro) $this->show_premium_feature_notice(); ?>
        <?php
    }
}