<?php

class Select
{

    public static function selectInputField($fieldName, $labelText, $options, $extraAttributes = [])
    {
        // Generate extra attributes string
        $extraAttributesString = '';
        foreach ($extraAttributes as $key => $value) {
            $extraAttributesString .= $key . '="' . htmlspecialchars($value) . '" ';
        }

        // Generate the HTML for the select field
        $html = '
                <div class="form-group col-md-6 field-'.$fieldName.'">
                    <label class="form-label" for="' . htmlspecialchars($fieldName) . '">' . htmlspecialchars($labelText) . '</label>
                    <select id="' . htmlspecialchars($fieldName) . '" class="form-select" name="' . htmlspecialchars($fieldName) . '" ' . $extraAttributesString . '>';

        foreach ($options as $value => $text) {
            $html .= '<option value="' . htmlspecialchars($value) . '">' . htmlspecialchars($text) . '</option>';
        }

        $html .= '</select>
                    <div class="invalid-feedback"></div>
                </div>';

        return $html;
    }
}
