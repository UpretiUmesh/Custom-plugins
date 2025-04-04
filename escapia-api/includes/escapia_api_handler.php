<?php
// curl-functions.php

class Escapiaapihandler
{

    public static function executeRequest($url, $xml_data, $soap_action = '', $headers = [])
    {
        $curl = curl_init();

        // Set common cURL options
        $options = [
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => $xml_data,
            CURLOPT_HTTPHEADER => array_merge(
                ['Content-Type: text/xml'],
                $soap_action ? ['SOAPAction: ' . $soap_action] : [],
                $headers
            ),
        ];

        // Apply the cURL options
        curl_setopt_array($curl, $options);

        // Execute and return the response
        $response = curl_exec($curl);
        curl_close($curl);
        $response = preg_replace("/(<\/?)(\w+):([^>]*>)/", "$1$2$3", $response);

        return $response;
    }
}
