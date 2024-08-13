jQuery(document).ready(function ($) {
    
    var inputFormats = {};

    jQuery(".custom-input").each(function () {
        var id = jQuery(this).attr("id");
        var elementFormat = jQuery(this).attr("format");
        var elementMaxLength = parseInt(jQuery(this).attr("maxlength"));

        inputFormats[id] = { format: elementFormat, maxLength: elementMaxLength };
    });

    jQuery(".custom-input").on("input", function () {
        var id = jQuery(this).attr("id");
        var value = jQuery(this).val().replace(/\D/g, ""); 

        if (inputFormats.hasOwnProperty(id)) {
            var formatInfo = inputFormats[id];
            jQuery(this).val(formatInput(value, formatInfo.format, formatInfo.maxLength));
        }
    });

    function formatInput(input, format, maxLength) {
        var formatted = "";
        var index = 0;
        for (var i = 0; i < format.length; i++) {
            if (index >= input.length) {
                break;
            }
            if (format[i] === "#") {
                formatted += input[index++];
            } else {
                formatted += format[i];
            }
        }
        return formatted.slice(0, maxLength);
    }
});
