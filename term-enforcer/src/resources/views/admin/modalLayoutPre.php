<input type="hidden" name="<?php echo esc_attr($option_name); ?>[modal_layout]" id="mss_modal_style" value="<?php echo esc_attr($current_style); ?>">
<div class="mss-style-options" <?php echo (!$is_pro ? '' : 'style="pointer-events: none;"'); ?>>

    <?php foreach ($styleData as $id => $style) {
        $is_selected = $current_style === $id; ?>
        <div class="mss-style-option<?php echo ($is_selected ? ' selected' : ''); ?>" data-style="<?php echo esc_attr($id); ?>">
            <div class="mss-style-name"><?php echo esc_html($style['name']); ?></div>
            <div class="mss-style-desc"><?php echo esc_html($style['description']); ?></div>
            <div class="mss-style-preview"><?php echo $style['preview']; ?></div>
        </div>
    <?php } ?>

</div>
<div class="mss-live-preview">
    <h3>Live Preview</h3>
    <div id="mss-live-preview-container"><?php echo $styleData[$current_style]['preview']; ?></div>
</div>
