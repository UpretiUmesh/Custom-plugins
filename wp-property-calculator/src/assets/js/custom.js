jQuery(document).ready(function ($) {
    const $dateCheckin = $("#start_time");
    const $dateCheckout = $("#end_time");
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    $dateCheckin.val(today.toISOString().split("T")[0]);
    $dateCheckout.val(tomorrow.toISOString().split("T")[0]);
  
    $dateCheckin.on("input", function () {
      const checkinDate = new Date($dateCheckin.val());
      const checkoutDate = new Date($dateCheckout.val());
      if (checkinDate > checkoutDate) {
        const newCheckoutDate = new Date(checkinDate);
        newCheckoutDate.setDate(newCheckoutDate.getDate() + 1);
        $dateCheckout.val(newCheckoutDate.toISOString().split("T")[0]);
      }
    });
  
    $dateCheckout.on("input", function () {
      const checkinDate = new Date($dateCheckin.val());
      const checkoutDate = new Date($dateCheckout.val());
      if (checkoutDate < checkinDate) {
        const newCheckinDate = new Date(checkoutDate);
        newCheckinDate.setDate(newCheckinDate.getDate() - 1);
        $dateCheckin.val(newCheckinDate.toISOString().split("T")[0]);
      }
    });
    $(".edit-template").on("click", function (e) {
      e.preventDefault();
      var templateId = $(this).data("id");
      var templateName = $(this).data("name");
      var templateSubject = $(this).data("subject");
      var templateBody = $(this).data("body");
  
      $("#template_id").val(templateId);
      $("#template_name").val(templateName);
      $("#template_subject").val(templateSubject);
      $("#template_body").val(templateBody);
      $("html, body").animate(
        {
          scrollTop: $("form").offset().top,
        },
        1000
      );
    });
    jQuery(document).change(function () {
      console.log("test");
      jQuery("#start_time, #end_time").blur(calculateNightsAndPrice);
  
      function calculateNightsAndPrice() {
        const startDate = jQuery("#start_time").val();
        const endDate = jQuery("#end_time").val();
  
        if (startDate && endDate) {
          const date1 = new Date(startDate);
          const date2 = new Date(endDate);
  
          if (date1 > date2) {
            alert("End date must be after start date");
            return;
          }
  
          const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
          const nights = Math.round(
            Math.abs((date2.getTime() - date1.getTime()) / oneDay)
          );
          console.log(nights);
          jQuery("#nights_hidden").val(nights);
        }
      }
    });
    jQuery("#select_date_range").change(function () {
      var getvalue = $(this).val();
      var baseUrl = window.location.origin;
      window.location.href =
        "http://localhost/test-wordpress/shortcode/?id=" + getvalue;
    });
  });
  