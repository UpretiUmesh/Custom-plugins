jQuery(document).ready(function($) {
    $('#custom-post-form').on('submit', function(e) {
        e.preventDefault();

        var formData = new FormData(this);
        formData.append('action', 'submit_custom_post');

        $.ajax({
            url: myScriptData.ajaxUrl,
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                $('#form-message').html(response.message);
                if (response.success) {
                    $('#custom-post-form')[0].reset();
                }
            },
            error: function(response) {
                $('#form-message').html('There was an error submitting your post.');
            }
        });
    });
});
