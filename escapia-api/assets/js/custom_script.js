
// jQuery('.property-slider').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1
// });


//jQuery('#property-filter-form #submit_list').click(function(e){
jQuery('#property-filter-form').submit(function(e) {
     e.preventDefault();

	

	var city = jQuery("#city").val();
	var arrival_date = jQuery("#arrival_date").val();
	var departure_date = jQuery("#departure_date").val();
	var adults = jQuery("#adults").val();
	var children = jQuery("#children").val();
//	var pets = jQuery("input[name='pets']:checked").val();

	jQuery.ajax({
		url: my_ajax_object.ajax_url,
		type: "POST",  
		crossDomain: true,
		data: {
			action: "unit_search",
			city: city,
			arrival_date: arrival_date,
			departure_date: departure_date,
			adults: adults,
			children: children,
			//pets: pets
		},
		success: function(response) {
			jQuery(".property-grid").html(response.data.html); // Display the results in the div
		}
	});

});




