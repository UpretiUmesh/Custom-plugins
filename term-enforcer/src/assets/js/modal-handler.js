jQuery(document).ready(function($) {
    // Show modal on page load
    setTimeout(function() {
        const style = $('#mssModal').attr('class') || '';
        
        // Handle Bootstrap modal
        if (style.includes('fade')) {
            const modal = new bootstrap.Modal(document.getElementById('mssModal'));
            modal.show();
        } 
        // Handle other modals
        else {
            $('#mssModal').fadeIn();
        }
    }, 1000);
    
    // Close button handler for non-Bootstrap modals
    $(document).on('click', '#mssCloseBtn', function() {
        const style = $('#mssModal').attr('class') || '';
        
        if (style.includes('fade')) {
            // Bootstrap handles its own closing
            return;
        } else {
            $('#mssModal').fadeOut();
        }
    });
    
    // Close when clicking outside modal (for non-Bootstrap)
    $(document).on('click', function(e) {
        const style = $('#mssModal').attr('class') || '';
        
        if (!style.includes('fade') && $(e.target).is('#mssModal')) {
            $('#mssModal').fadeOut();
        }
    });
});