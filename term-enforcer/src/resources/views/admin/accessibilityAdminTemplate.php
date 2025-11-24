<div class="wrap ae-settings-wrap">
    <div class="ae-settings-header">
        <div class="ae-header-content">
            <h1><span class="dashicons dashicons-universal-access-alt"></span> <?php esc_html_e('Term Enforcer - Accessibility Settings', 'term-enforcer'); ?></h1>
            <p class="ae-description"><?php esc_html_e('Make your terms and conditions more accessible to all users', 'term-enforcer'); ?></p>
        </div>
    </div>

    <div class="ae-settings-card">
        <form method="post" action="options.php">
            <?php
            settings_fields('term_enforcer_accessibility_group');
            do_settings_sections('term-enforcer-accessibility');
            ?>
            <div class="ae-submit-section">
                <?php submit_button(); ?>
            </div>
        </form>
    </div>

    <div class="ae-settings-sidebar">
        <div class="ae-sidebar-card">
            <h3><?php esc_html_e('Accessibility Compliance', 'term-enforcer'); ?></h3>
            <ul>
                <li><?php esc_html_e('WCAG 2.1 AA Standards', 'term-enforcer'); ?></li>
                <li><?php esc_html_e('ADA Compliance Ready', 'term-enforcer'); ?></li>
                <li><?php esc_html_e('Section 508 Compliant', 'term-enforcer'); ?></li>
            </ul>
        </div>

        <?php if (!$is_premium) : ?>
            <div class="ae-sidebar-card ae-premium-card">
                <h3><?php esc_html_e('Premium Features', 'term-enforcer'); ?></h3>
                <ul class="ae-premium-features">
                    <li><?php esc_html_e('Floating Accessibility Toolbar', 'term-enforcer'); ?></li>
                    <li><?php esc_html_e('Advanced Focus Management', 'term-enforcer'); ?></li>
                    <li><?php esc_html_e('Font Size Adjustments', 'term-enforcer'); ?></li>
                    <li><?php esc_html_e('Animation Controls', 'term-enforcer'); ?></li>
                </ul>
                <a href="<?php echo esc_url(admin_url('admin.php?page=term-enforcer-pricing')); ?>" class="button button-primary">
                    <?php esc_html_e('Upgrade to Premium', 'term-enforcer'); ?>
                </a>
            </div>
        <?php endif; ?>
    </div>
</div>