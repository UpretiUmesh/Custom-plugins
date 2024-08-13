jQuery(document).ready(function($) {
    $('#event-filter-form').on('submit', function(event) {
        alert('hello');
        event.preventDefault();
        var city = $('#filter_city').val();
        var category = $('#filter_category').val();

        $.ajax({
            url: my_ajax_object.ajax_url,
            data: {
                action: 'filter_events',
                city: city,
                category: category
            },
            success: function(data) {
                $('#event-table').html(data);
            }
        });
    });
});
