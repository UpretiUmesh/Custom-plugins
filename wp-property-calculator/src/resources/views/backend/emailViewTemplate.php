<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
?>

<div class="wrap">
    <h1><?php _e('Email Templates', 'property-calculator');?></h1>
    <form method="post">
        <input type="hidden" name="template_id" id="template_id" value="">
        <table class="form-table">
            <tr valign="top">
                <th scope="row"><label for="template_name"><?php _e('Template Name', 'property-calculator');?></label></th>
                <td><input name="template_name" type="text" id="template_name" class="regular-text" required /></td>
            </tr>
            <tr valign="top">
                <th scope="row"><label for="template_subject"><?php _e('Subject', 'property-calculator');?></label></th>
                <td><input name="template_subject" type="text" id="template_subject" class="regular-text" required />
                </td>
            </tr>
            <tr valign="top">
                <th scope="row"><label for="template_body"><?php _e('Body', 'property-calculator');?></label></th>
                <td><textarea name="template_body" id="template_body" class="large-text" rows="10" required></textarea>
                </td>
            </tr>
        </table>
        <p class="submit"><input type="submit" name="submit_email_template" class="button-primary" value="<?php _e('Save Template', 'property-calculator');?>" /></p>
    </form>

    <h2><?php _e('Existing Email Templates', 'property-calculator');?></h2>
    <table class="wp-list-table widefat fixed striped">
        <thead>
            <tr>
                <th scope="col"><?php _e('ID', 'property-calculator');?></th>
                <th scope="col"><?php _e('Name', 'property-calculator');?></th>
                <th scope="col"><?php _e('Subject', 'property-calculator');?></th>
                <th scope="col"><?php _e('Actions', 'property-calculator');?></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($email_templates as $template) : ?>
                <tr>
                    <td><?php echo esc_html($template->id); ?></td>
                    <td><?php echo esc_html($template->name); ?></td>
                    <td><?php echo esc_html($template->subject); ?></td>
                    <td>
                        <a href="#" class="edit-template" data-id="<?php echo esc_attr($template->id); ?>" data-name="<?php echo esc_attr($template->name); ?>" data-subject="<?php echo esc_attr($template->subject); ?>" data-body="<?php echo esc_textarea($template->body); ?>"><?php _e('Edit', 'property-calculator');?></a> |
                        <a href="<?php echo esc_url(add_query_arg(array('action' => 'delete', 'template_id' => $template->id))); ?>" onclick="return confirm('Are you sure you want to delete this template?');"><?php _e('Delete', 'property-calculator');?></a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>