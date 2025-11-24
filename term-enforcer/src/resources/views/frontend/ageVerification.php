 <div id="te-age-verification-popup" class="te-age-modal">
     <div class="te-age-modal__container">
         <div class="te-age-modal__content">
             <div class="te-age-modal__icon">
                 <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                     <circle cx="12" cy="12" r="10"></circle>
                     <line x1="12" y1="8" x2="12" y2="12"></line>
                     <line x1="12" y1="16" x2="12.01" y2="16"></line>
                 </svg>
             </div>
             <h2 class="te-age-modal__title"><?php _e('Age Verification Required', 'terms-enforcer'); ?></h2>
             <p class="te-age-modal__message"><?php echo sprintf(__('To comply with regulations, we must verify that you are at least %d years old to place an order.', 'terms-enforcer'), $age_limit); ?></p>

             <div class="te-age-modal__buttons">
                 <button class="te-age-modal__button te-age-modal__button--confirm" id="te-age-confirm-yes">
                     <?php echo sprintf(__('I am over %d years', 'terms-enforcer'), $age_limit); ?>
                 </button>
                 <button class="te-age-modal__button te-age-modal__button--deny" id="te-age-confirm-no">
                     <?php echo sprintf(__('I am under %d years', 'terms-enforcer'), $age_limit); ?>
                 </button>
             </div>

             <p id="te-age-denied-msg" class="te-age-modal__denied-message">
                 <?php _e('We apologize, but you must be of legal age to place an order. Please remove age-restricted items from your cart.', 'terms-enforcer'); ?>
             </p>
         </div>
     </div>
 </div>