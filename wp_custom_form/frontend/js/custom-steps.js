jQuery(document).ready(function ($) {
    var currentStep = 1;
    var totalSteps = $(".wizard section").length;

    function showStep(step) {
        $(".wizard section").hide();
        $(`.wizard section[data-step1="${step}"]`).show();
        updateStepIndicator(step);
        updateButtons(step);
        currentStep = step;
    }

    function updateStepIndicator(step) {
        $(".step-indicator").removeClass("active");
        $(`.step-indicator[data-step1="${step}"]`).addClass("active");
    }

    $('.step-indicator').on('click', function () {
        var stepTab = $(this).attr('data-step1');
        $(".wizard section").hide();
        $(`.wizard section[data-step1="${stepTab}"]`).show();
        updateStepIndicator(stepTab);
        updateButtons(stepTab);
    });

    function updateButtons(step) {
        $(".previous-step").toggle(step !== 1);
        $(".next-step").text(step === totalSteps ? "Submit" : "Next");
    }

    function saveStepData(step) {
        var stepData = {};
        $(`.wizard section[data-step1="${step}"] input, .wizard section[data-step1="${step}"] select`).each(function () {
            stepData[$(this).attr("name")] = $(this).val();
        });

        $.ajax({
            url: ajax_object.ajax_url,
            type: "POST",
            data: {
                action: "form_action",
                nonce: ajax_object.nonce,
                step: step,
                data: stepData,
            },
            success: function (response) {
                console.log("Step data saved successfully:", response);
            },
            error: function (error) {
                console.error("Error saving step data:", error);
            },
        });
    }

    $(document).on("click", ".next-step", function () {
        
        if (validateStep(currentStep)) {
            saveStepData(currentStep);
            if (currentStep < totalSteps) {
                showStep(currentStep + 1);
            } else {
                alert("Form submitted!");
            }
        }
    });

    $(document).on("change", function () {
        validateStep(currentStep);
    });

    $(".previous-step").on("click", function () {
        if (currentStep > 1) {
            showStep(currentStep - 1);
        }
    });

    showStep(currentStep);

});