<div class="wrap te-license-wrap">
    <div class="te-license-header">
        <h1><span class="dashicons dashicons-admin-network"></span> <?php _e('Terms Enforcer License Activation', 'terms-enforcer'); ?></h1>
        <p class="description"><?php _e('Activate your license to unlock premium features and receive automatic updates', 'terms-enforcer'); ?></p>
    </div>

    <div class="te-license-card">
        <div class="te-license-form">
            <form method="post" action="options.php">
                <?php settings_fields('te_license_group'); ?>
                <div class="license-input-group">
                    <label for="<?php echo esc_attr($data['option_name']); ?>">
                        <span class="dashicons dashicons-lock"></span>
                        <?php _e('License Key', 'terms-enforcer'); ?>
                    </label>
                    <div class="input-wrapper">
                        <input type="text" 
                               id="<?php echo esc_attr($data['option_name']); ?>" 
                               name="<?php echo esc_attr($data['option_name']); ?>" 
                               value="<?php echo esc_attr($data['key']); ?>" 
                               class="regular-text license-key-input" 
                               placeholder="<?php esc_attr_e('Enter your license key', 'terms-enforcer'); ?>" />
                        <?php submit_button(__('Activate License', 'terms-enforcer'), 'primary', 'submit', false); ?>
                    </div>
                    <p class="description"><?php printf(__('Can\'t find your key? <a href="%s" target="_blank">Visit your account</a>', 'terms-enforcer'), 'https://itxwebsolutions.com/my-account/'); ?></p>
                </div>
            </form>
        </div>

        <?php if ($data['key']): ?>
        <div class="te-license-status">
            <h3><span class="dashicons dashicons-info"></span> <?php _e('License Information', 'terms-enforcer'); ?></h3>
            
            <div class="license-status-box status-<?php echo esc_attr($data['status']['status']); ?>">
                <div class="status-icon">
                    <?php if ($data['status']['status'] === 'valid'): ?>
                        <span class="dashicons dashicons-yes-alt"></span>
                    <?php elseif ($data['status']['status'] === 'invalid'): ?>
                        <span class="dashicons dashicons-no-alt"></span>
                    <?php elseif ($data['status']['status'] === 'expired'): ?>
                        <span class="dashicons dashicons-warning"></span>
                    <?php else: ?>
                        <span class="dashicons dashicons-info"></span>
                    <?php endif; ?>
                </div>
                
                <div class="status-content">
                    <?php if ($data['status']['status'] === 'valid'): ?>
                        <h4><?php _e('Active License', 'terms-enforcer'); ?></h4>
                        <p><?php _e('Your license is active and valid. Thank you for being a valued customer!', 'terms-enforcer'); ?></p>
                        <?php if (!empty($data['status']['expires'])): ?>
                            <div class="license-meta">
                                <span class="dashicons dashicons-calendar"></span>
                                <strong><?php _e('Expires:', 'terms-enforcer'); ?></strong>
                                <?php echo date_i18n(get_option('date_format'), strtotime($data['status']['expires'])); ?>
                            </div>
                        <?php endif; ?>
                        <?php if (!empty($data['status']['plan'])): ?>
                            <div class="license-meta">
                                <span class="dashicons dashicons-tag"></span>
                                <strong><?php _e('Plan:', 'terms-enforcer'); ?></strong>
                                <?php echo esc_html($data['status']['plan']); ?>
                            </div>
                        <?php endif; ?>
                        
                    <?php elseif ($data['status']['status'] === 'invalid'): ?>
                        <h4><?php _e('Invalid License', 'terms-enforcer'); ?></h4>
                        <p><?php _e('The license key you entered could not be validated. Please check the key and try again.', 'terms-enforcer'); ?></p>
                        <p><?php _e('If you believe this is an error, please contact our support team.', 'terms-enforcer'); ?></p>
                        
                    <?php elseif ($data['status']['status'] === 'expired'): ?>
                        <h4><?php _e('License Expired', 'terms-enforcer'); ?></h4>
                        <p><?php _e('Your license has expired and needs to be renewed to continue receiving updates and support.', 'terms-enforcer'); ?></p>
                        <a href="https://itxwebsolutions.com/checkout/?edd_license_key=<?php echo urlencode($data['key']); ?>" class="button button-primary" target="_blank">
                            <?php _e('Renew License', 'terms-enforcer'); ?>
                        </a>
                        
                    <?php elseif ($data['status']['status'] === 'error'): ?>
                        <h4><?php _e('Connection Error', 'terms-enforcer'); ?></h4>
                        <p><?php printf(__('We couldn\'t verify your license due to an error: %s', 'terms-enforcer'), esc_html($data['status']['message'])); ?></p>
                        <p><?php _e('Please try again later or contact support if the problem persists.', 'terms-enforcer'); ?></p>
                        
                    <?php else: ?>
                        <h4><?php _e('License Not Active', 'terms-enforcer'); ?></h4>
                        <p><?php _e('Please enter and activate your license key to enable premium features.', 'terms-enforcer'); ?></p>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <?php endif; ?>
    </div>

    <div class="te-license-benefits">
        <h3><span class="dashicons dashicons-star-filled"></span> <?php _e('Premium Benefits', 'terms-enforcer'); ?></h3>
        <ul>
            <li><span class="dashicons dashicons-yes"></span> <?php _e('Access to all premium features', 'terms-enforcer'); ?></li>
            <li><span class="dashicons dashicons-yes"></span> <?php _e('Automatic updates and security patches', 'terms-enforcer'); ?></li>
            <li><span class="dashicons dashicons-yes"></span> <?php _e('Priority customer support', 'terms-enforcer'); ?></li>
            <li><span class="dashicons dashicons-yes"></span> <?php _e('Regular feature additions', 'terms-enforcer'); ?></li>
        </ul>
    </div>
</div>