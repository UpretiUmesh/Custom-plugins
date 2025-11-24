<?php

namespace TermsEnforcer\Includes;

if (!defined('ABSPATH')) {
    exit;
}

class Class_Admin_Logo_Uploader
{
    private $option_name;
    private $is_premium;

    public function __construct($option_name, $is_premium)
    {
        $this->option_name = $option_name;
        $this->is_premium = $is_premium;

        add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);
    }

    public function enqueue_scripts()
    {
        if (isset($_GET['page']) && $_GET['page'] === 'te-settings') {
            wp_enqueue_media();
        }
    }

    public function render_logo_upload_field()
    {
        $options = get_option($this->option_name, []);
        $logo_id = $options['modal_logo'] ?? '';
        $logo_url = $logo_id ? wp_get_attachment_url($logo_id) : '';

?>
        <div class="te-logo-upload">
            <input type="hidden"
                name="<?php echo esc_attr($this->option_name); ?>[modal_logo]"
                id="te_modal_logo_id"
                value="<?php echo esc_attr($logo_id); ?>"
                <?php if (!$this->is_premium) echo 'disabled'; ?> />

            <div id="te_modal_logo_preview" style="margin-bottom: 10px;">
                <?php if ($logo_id) : ?>
                    <?php echo wp_get_attachment_image($logo_id, 'medium', false, ['style' => 'max-width:200px;height:auto;']); ?>
                <?php endif; ?>
            </div>

            <input type="button"
                class="button te-upload-logo-button"
                value="<?php esc_attr_e('Upload Logo', 'terms-enforcer'); ?>"
                <?php if (!$this->is_premium) echo 'disabled'; ?> />

            <?php if ($logo_id) : ?>
                <input type="button"
                    class="button te-remove-logo-button"
                    value="<?php esc_attr_e('Remove Logo', 'terms-enforcer'); ?>"
                    <?php if (!$this->is_premium) echo 'disabled'; ?> />
            <?php endif; ?>
        </div>

        <script>
            jQuery(document).ready(function($) {
                // Only run if premium is active
                <?php if ($this->is_premium) : ?>
                    var file_frame;
                    var wp_media_post_id = wp.media.model.settings.post.id;

                    $('.te-upload-logo-button').on('click', function(e) {
                        e.preventDefault();

                        wp.media.model.settings.post.id = $('#te_modal_logo_id').val() || 0;

                        file_frame = wp.media.frames.file_frame = wp.media({
                            title: '<?php _e('Select Modal Logo', 'terms-enforcer'); ?>',
                            button: {
                                text: '<?php _e('Use this image', 'terms-enforcer'); ?>'
                            },
                            library: {
                                type: 'image'
                            },
                            multiple: false
                        });

                        file_frame.on('select', function() {
                            var attachment = file_frame.state().get('selection').first().toJSON();
                            $('#te_modal_logo_id').val(attachment.id);
                            $('#te_modal_logo_preview').html(
                                $('<img>', {
                                    src: attachment.url,
                                    style: 'max-width:200px;height:auto;'
                                })
                            );
                            $('.te-remove-logo-button').show();
                            wp.media.model.settings.post.id = wp_media_post_id;
                        });

                        file_frame.open();
                    });

                    $('.te-remove-logo-button').on('click', function(e) {
                        e.preventDefault();
                        $('#te_modal_logo_id').val('');
                        $('#te_modal_logo_preview').html('');
                        $(this).hide();
                    });
                <?php endif; ?>
            });
        </script>
<?php
    }
}
