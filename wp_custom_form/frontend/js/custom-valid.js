jQuery(document).ready(function ($) {
    function validateStep(step) {
        var isValid = true;

        var validationRules = [];
        if (step == 1 && step < 2) {
            $('#formStepOwner input, #formStepOwner select').each(function () {
                var elementId = $(this).attr('id');
                var elementName = $(this).attr('name');
                var elementMax = $(this).attr('maxlength');
                var elementMin = $(this).attr('maxlength');
                var rules = { id: elementId, name: elementName, required: true, maxlength: elementMax, minlength: elementMin };

                validationRules.push(rules);
            });
        }
        if (step == 2 && step > 1) {
            $('#formStepAgent input, #formStepAgent select').each(function () {
                var elementId = $(this).attr('id');
                var elementName = $(this).attr('name');
                console.log(elementId);
                var rules = { id: elementId, name: elementName, required: false };

                validationRules.push(rules);
            });
        }

        if (step == 2 && step > 1) {
            $('#formStepEmails input, #formStepEmails select').each(function () {
                var elementId = $(this).attr('id');
                var elementName = $(this).attr('name');
                var rules = { id: elementId, name: elementName, required: true };

                validationRules.push(rules);
            });
        }

        $.each(validationRules, function (index, rule) {
            var value = $(`#${rule.id}`).val();
            var $errorElement = rule.container ? $(`${rule.container} .invalid-feedback`) : $(`.field-${rule.id} .invalid-feedback`);
            
            if (rule.required && !value) {
                $errorElement.text(`${rule.name} cannot be blank.`).show();
                isValid = false;
            } else if (rule.maxlength && value.length > rule.maxlength) {
                $errorElement.text(`${rule.name} should contain at most ${rule.maxlength} characters.`).show();
                isValid = false;
            } else if (rule.minlength && value.length < rule.minlength) {
                $errorElement.text(`${rule.name} should contain at least ${rule.minlength} characters.`).show();
                isValid = false;
            } else if (rule.pattern && !rule.pattern.test(value)) {
                $errorElement.text(`${rule.name} is not valid.`).show();
                isValid = false;
            } else if (rule.validValues && !rule.validValues.includes(value)) {
                $errorElement.text(`${rule.name} must be one of ${rule.validValues.join(", ")}.`).show();
                isValid = false;
            } else {
                $errorElement.hide();
            }
        });
        return isValid;
    }
    window.validateStep = validateStep;
});
