jQuery(document).ready(function ($) {

  $("#businessType").on("change", function () {
    var isSoleProp = $(this).val() == "SoleProp";
    $(".field-contactEmail label").text(isSoleProp ? "Main Email" : "Business Email");
    $(".field-contactPhone label").text(isSoleProp ? "Mobile Number" : "Business Phone");
    $(".field-federalTaxId label").text(isSoleProp ? "Social Security Number" : "Business Tax ID");
  });


  $("#companyName").on("change", function () {
    if ($("#dbaName").val() === "") {
      $("#dbaName").val($(this).val());
    }
  });

  $("#rURL").on("input", function () {
    $("#additionalrurl").val($(this).val());
  });

  $("#agentownerphone").on("input", function () {
    $("#additionalappphone").val($(this).val());
  });

  $("#agentowneremail").on("input", function () {
    $("#additionalappemail").val($(this).val());
  });

  $('#agentownerfirstname, #agentownerlastname').on('input', function () {
    var firstname = $('#agentownerfirstname').val();
    var lastname = $('#agentownerlastname').val();
    console.log(lastname);
    if (firstname && lastname) {
      var addURL = $('#rURL').val();
      var halfFirstName = $('#agentownerfirstname').val().charAt(0);
      $("#additionalrurl").val(addURL + '/' + halfFirstName + lastname);
      $('#additionalspecialistname').val(firstname + ' ' + lastname);
    }
  });

  $('#agentownerfirstname').on('input', function () {
    $('.agent-for-text strong span').text($(this).val());
  });

  $(".addOwner").on("click", function () {
    var $clonedElement = $("#owners").first().clone();
    $("#owners").append($clonedElement);
  });

  $(".addAgent").on("click", function () {
    $("#additionalrurl").val($('#rURL').val());
    var getStyle = $('.custom-additional-agent-information').attr('style');
    if (!getStyle) {
      var $clonedElement = $(".custom-append-data").first().clone();
      $(".append-data-custom").append($clonedElement);
    } else {
      $('.custom-additional-agent-information').removeAttr('style');
    }
  });

  $(".remove-field").on("click", function () {
    $(this).closest("#owners").remove();
  });

  function showCustomPopup(title, text, expectedValue, callback) {
    $(".custom-popup").fadeIn();
    $("#popup-title").text(title);
    $("#popup-text").text(text);
    $("#popup-input").val("");
    $("#verifyButton").off().on("click", function () {
      if ($("#popup-input").val().trim() !== expectedValue) {
        alert("The entered value does not match.");
        return;
      }
      $(".custom-popup").fadeOut();
      if (typeof callback === 'function') callback();
    });
    $("#closeButton").off().on("click", function () {
      $(".custom-popup").fadeOut();
    });
  }
  $("#bankRoutingNumber, #bankAccountNumber").on("change", function () {
    var inputField = $(this);
    var name = inputField.attr("id") === "bankRoutingNumber" ? "Bank Routing Number" : "Bank Account Number";
    inputField.on("focusout", function () {
      var newValue = inputField.val().trim();
      if (newValue) {
        showCustomPopup("Verification", `Re-enter your ${name}`, newValue, function () {
          inputField.val(newValue);
        });
      }
    });
  });

  // Function to create a slug from a string
  function makeSlug(text, prefix = '') {
    return prefix + text.toLowerCase().replace(/ /g, '').replace(/[^\w-]+/g, '');
  }
  var siteUrl = window.location.origin;

  function updateFields() {
    var companyname = jQuery("#companyName").val();
    var dbaname = jQuery("#dbaName").val();
    var contactEmail = jQuery("#contactEmail").val();
    var contactPhone = jQuery("#contactPhone").val();
    var ownerFirstName = jQuery("#ownerFirstName").val();
    var ownerLastName = jQuery("#ownerLastName").val();
    var ownerEmail = jQuery("#ownerEmail").val();
    var ownerPhone = jQuery("#ownerPhone").val();

    if (!dbaname || companyname === dbaname) {
      jQuery("#dbaName").val(companyname);
      dbaname = companyname;
    }

    jQuery("#specialistName").val(dbaname);
    jQuery("#appPhone").val(contactPhone);
    jQuery("#appEmail").val(contactEmail);

    var rurl = siteUrl + '/apply/' + makeSlug(dbaname, companyname === dbaname ? '' : '');
    jQuery("#rURL").val(rurl);
    jQuery(".custom-heading-title strong span").text("for " + dbaname);

    //Contact Form
    jQuery("#statusEmail1").val(contactEmail);
    jQuery("#reportName1").val(ownerFirstName);
    jQuery("#reportEmail1").val(ownerEmail);

    jQuery("#confirmFirstName").val(ownerFirstName);
    jQuery("#confirmLastName").val(ownerLastName);
    jQuery("#confirmBusinessEmail").val(ownerEmail);
    jQuery("#confirmMobileNumber").val(ownerPhone);

  }
  jQuery("#companyName, #dbaName, #contactEmail, #contactPhone, #ownerFirstName, #ownerLastName, #ownerEmail, #ownerPhone")
    .on("focusout", updateFields);

});
