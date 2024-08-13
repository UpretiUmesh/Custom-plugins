<?php

class Steps {
    public static function stepsInputField($steps, $labels) {

        $html = '<div class="steps">';
        
        foreach ($steps as $index => $step) {
            $label = isset($labels[$index]) ? htmlspecialchars($labels[$index]) : '';

            $html .= '
            <span class="step-indicator" data-step1="' . htmlspecialchars($step) . '">
                <span class="step">
                    <i class="fas fa-check"></i>
                    <h5 class="step-digit">' . htmlspecialchars($step) . '</h5>
                </span>
                <h5 class="step-label">' . $label . '</h5>
            </span>';
        }

        $html .= '</div>';
        return $html;
    }
}
?>
