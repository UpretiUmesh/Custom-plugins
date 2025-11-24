 <?php
// Ensure all required variables are set
$logs_table = $logs_table ?? null;
?>
 <div class="wrap te-admin-container">
        <header class="te-admin-header">
            <h1 class="te-admin-title">
                <span class="dashicons dashicons-clipboard"></span>
                <?php esc_html_e('Terms Acceptance Logs', 'terms-enforcer'); ?>
            </h1>
            
            <div class="te-admin-actions">
                <a href="<?php echo esc_url(add_query_arg([
                    'page' => sanitize_text_field($_GET['page'] ?? ''),
                    'action' => 'export_acceptance_logs',
                    '_wpnonce' => wp_create_nonce('export_acceptance_logs_nonce'),
                ])); ?>" class="button button-primary te-export-button">
                    <span class="dashicons dashicons-download"></span>
                    <?php esc_html_e('Export CSV', 'terms-enforcer'); ?>
                </a>
                
                <button type="button" class="button te-help-button" onclick="jQuery('#te-help-panel').toggleClass('visible')">
                    <span class="dashicons dashicons-editor-help"></span>
                    <?php esc_html_e('Help', 'terms-enforcer'); ?>
                </button>
            </div>
        </header>
        
        <div id="te-help-panel" class="te-help-panel">
            <div class="te-help-content">
                <h3><?php esc_html_e('About Acceptance Logs', 'terms-enforcer'); ?></h3>
                <p><?php esc_html_e('This table shows all recorded acceptances of your terms and conditions and GDPR policies.', 'terms-enforcer'); ?></p>
                <ul>
                    <li><?php esc_html_e('Use the search box to find specific entries', 'terms-enforcer'); ?></li>
                    <li><?php esc_html_e('Click column headers to sort', 'terms-enforcer'); ?></li>
                    <li><?php esc_html_e('Select multiple items to perform bulk actions', 'terms-enforcer'); ?></li>
                </ul>
            </div>
        </div>
        
        <div class="te-admin-content">
            <form method="get" class="te-filter-form">
                <input type="hidden" name="page" value="<?php echo esc_attr($_REQUEST['page'] ?? ''); ?>">
                
                <div class="te-filters">
                    <div class="te-search-box">
                        <?php $logs_table->search_box(__('Search Logs', 'terms-enforcer'), 'search_logs'); ?>
                    </div>
                </div>
            </form>
            
            <form method="post" class="te-logs-form">
                <?php wp_nonce_field('bulk-' . $logs_table->_args['plural']); ?>
                <?php $logs_table->display(); ?>
            </form>
            
            <div class="te-stats-box">
                <h3><?php esc_html_e('Quick Stats', 'terms-enforcer'); ?></h3>
                <div class="te-stats-grid">
                    <div class="te-stat-card">
                        <span class="te-stat-number"><?php echo esc_html($logs_table->get_total_items()); ?></span>
                        <span class="te-stat-label"><?php esc_html_e('Total Acceptances', 'terms-enforcer'); ?></span>
                    </div>
                    <div class="te-stat-card">
                        <span class="te-stat-number"><?php echo esc_html($logs_table->get_user_acceptance_count()); ?></span>
                        <span class="te-stat-label"><?php esc_html_e('Registered Users', 'terms-enforcer'); ?></span>
                    </div>
                    <div class="te-stat-card">
                        <span class="te-stat-number"><?php echo esc_html($logs_table->get_guest_acceptance_count()); ?></span>
                        <span class="te-stat-label"><?php esc_html_e('Guest Acceptances', 'terms-enforcer'); ?></span>
                    </div>
                </div>
            </div>
        </div>
    </div>