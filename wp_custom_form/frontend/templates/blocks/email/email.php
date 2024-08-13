<?php

class Email{

    public static function emailInputField($fieldName, $labelText, $inputType = 'text', $pattern = '', $inputMode = '', $extraAttributes = [])
    {
        $extraAttributesString = '';
        foreach ($extraAttributes as $key => $value) {
            $extraAttributesString .= $key . '="' . htmlspecialchars($value) . '" ';
        }
        // Generate the HTML for the input field
        $html = '
                    <div class="form-group col-md-6 field-'.$fieldName.'">
                        <label class="form-label" for="' . htmlspecialchars($fieldName) . '">' . htmlspecialchars($labelText) . '</label>
                        <input type="' . htmlspecialchars($inputType) . '" id="' . htmlspecialchars($fieldName) . '" 
                            class="form-control custom-input" name="' . htmlspecialchars($fieldName) . '"
                            ' . (!empty($pattern) ? 'maxlength="' . htmlspecialchars($pattern) . '"' : '') . '
                            ' . (!empty($inputMode) ? 'minlength="' . htmlspecialchars($inputMode) . '"' : '') . '
                            ' . $extraAttributesString . '>
                        <div class="invalid-feedback"></div>
                    </div>';

        return $html;
    }

}
