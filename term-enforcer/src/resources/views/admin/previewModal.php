 <div class="builder-preview">
     <div id="modal-preview" class="draggable-modal">
         <div class="modal-header">
             <h3 id="preview-modal-title"><?php echo esc_html($title); ?></h3>
             <span class="modal-close">&times;</span>
         </div>
         <div id="preview-modal-content" class="modal-content">
             <?php echo wp_kses_post($body); ?>
         </div>
         <div class="modal-footer">
             <button class="modal-button"><?php echo esc_html($primary); ?></button>
             <button class="modal-button primary"><?php echo esc_html($secondary); ?></button>
         </div>
     </div>
 </div>
 </div>