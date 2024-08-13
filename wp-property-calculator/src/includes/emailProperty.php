<?php

namespace WPPropertyCalculator\Includes;

class Emailproperty
{

    public function wp_property_calculator_send_email($template_id, $to_email, $placeholders = array())
    {
        global $wpdb;
        $email_templates_table = $wpdb->prefix . 'email_templates';
        $template = $wpdb->get_row($wpdb->prepare("SELECT * FROM $email_templates_table WHERE id = %d", $template_id));

        if (!$template) {
            return false;
        }
        $subject = $template->subject;
        $body = $template->body;
        foreach ($placeholders as $placeholder => $value) {
            $subject = str_replace("{{" . $placeholder . "}}", $value, $subject);
            $body = str_replace("{{" . $placeholder . "}}", $value, $body);
        }
        // Send the email
        $headers = array('Content-Type: text/html; charset=UTF-8');
        return wp_mail($to_email, $subject, $body, $headers);
    }

    /* Pass the template ID, recipient email, and an array of placeholders to replace in the template: wp_property_calculator_send_email(1, 'recipient@example.com', array(
    'name' => 'John Doe',
    'property' => 'Beautiful House'
));*/
}
