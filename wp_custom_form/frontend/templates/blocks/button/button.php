<?php

class Button{

    public static function buttonInputField($fieldName, $labelText, $inputType = 'text', $pattern = '', $inputMode = '', $extraAttributes = [])
    {
        $extraAttributesString = '';
        foreach ($extraAttributes as $key => $value) {
            $extraAttributesString .= $key . '="' . htmlspecialchars($value) . '" ';
        }
        // Generate the HTML for the input field
        $html = '
            <button type="' . htmlspecialchars($inputType) . '" class="btn btn-primary ' . htmlspecialchars($fieldName) . '">' . htmlspecialchars($labelText) . '</button>';

        return $html;
    }

}
