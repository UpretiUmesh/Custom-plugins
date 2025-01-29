<?php

require_once 'escapia_api_handler.php';

class SingleProperty
{

   public function __construct()
   {
      add_shortcode('escapia_single_property', [$this, 'getEscapiaData']);
   }
   public function getEscapiaData()
   {

      $unit_code = $_GET['unit-code'];

      $xml = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://www.escapia.com/EVRN/2007/02">
   <soapenv:Header/>
   <soapenv:Body>
   <!--  -->
      <ns:EVRN_UnitDescriptiveInfoRQ Target="Test" Version="1.0">
         <!--Optional:-->
         <ns:POS>
            <!--Zero or more repetitions:-->
            <ns:Source>
               <!--Optional:-->

<ns:RequestorID ID="Tides2Pines" MessagePassword="vDLVbyPtnRg6Q7Xa"/>


            </ns:Source>
         </ns:POS>
         <!--Optional:-->
         <ns:UnitDescriptiveInfos>
            <!--The Unit Code and Property Manager code is required. -->
            <ns:UnitDescriptiveInfo PropertyManagerCode="7090" UnitCode="' . $unit_code . '">
               <!--Optional:-->
               <ns:UnitInfo SendData="true"/>
               <!--Optional:-->
               <ns:Policies SendPolicies="true"/>
               <!--Optional:-->
               <ns:UnitReviews SendReviews="true"/>
               <!--Optional:-->
               <ns:Promotions SendPromotions="true"/>
            </ns:UnitDescriptiveInfo>
         </ns:UnitDescriptiveInfos>
      </ns:EVRN_UnitDescriptiveInfoRQ>
   </soapenv:Body>
</soapenv:Envelope>';

      $url = 'https://api.escapia.com/EVRNService.svc';
      $soap_action = 'UnitDescriptiveInfo';

      $response = Escapiaapihandler::executeRequest($url, $xml, $soap_action);

      $xml = simplexml_load_string($response);

      // Check for parsing errors
      if ($xml === false) {
         echo "Failed to parse XML response";
         exit;
      }

      $json = json_encode($xml);
      $array = json_decode($json);

      $rr = $array->sBody->EVRN_UnitDescriptiveInfoRS->UnitDescriptiveContents->UnitDescriptiveContent;
      $html = '';
      $UnitName = $rr->UnitInfo->UnitName;
      $RoomInfo = $rr->UnitInfo->CategoryCodes->RoomInfo;

      //$Bedrooms_qty= $RoomInfo['0']{'@attributes'}->Quantity;

      $html .= '<div class="property-wrapper">';
      $html .= '<div class="property-container">';
      $UnitInfo = $rr->UnitInfo;
      $MultimediaDescription = $rr->UnitInfo->Descriptions->MultimediaDescriptions->MultimediaDescription;
      /* $desc=$MultimediaDescription->TextItems;
	print_r($desc); */
      foreach ($MultimediaDescription as $md) {

         $html .= '<div class="property-image"> <img src="' . $md->ImageItems->ImageItem['0']->ImageFormat['0']->URL . '"></div>';
         /* $html.='<div class="property-name">Name: '.$UnitName.'</div>'; */
      }
      $html .= '<div class="property-description">';
      foreach ($MultimediaDescription as $md) {

         $image_item = $md->ImageItems->ImageItem;

         $html .= '<div class="property-slider"> ';
         foreach ($image_item as $it) {

            $html .= '<div class="property-image"> <img src="' . $it->ImageFormat['0']->URL . '"></div>';
         }
         $html .= '</div>';
      }
      //$html.= $UnitInfo->{'@attributes'}->NumberFloors;
      $html .= '<div class="property-name"><h2>Name: ' . $UnitName . '</h2></div>';
      //$html.='<div class="property-name"><h2>Name: '.$UnitName.'</h2></div>';


      foreach ($RoomInfo as  $RI) {
         $attr = $RI->{'@attributes'};
         $CodeDetail = $attr->CodeDetail;
         $room_Quantity = $attr->Quantity;
         $html .= '<div class="property-name"><strong>' . $CodeDetail . ': </strong>' . $room_Quantity . '</div>';
         //print_r($attr);
      }

      $html .= '</div>';
      $html .= '</div>';

      $html .= '</div>';

      return ($html);
   }
}
function test_escapia()
{


   $curl = curl_init();

   curl_setopt_array($curl, array(
      CURLOPT_URL => 'https://api.escapia.com/EVRNContentService.svc',
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => '',
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => 'POST',
      CURLOPT_POSTFIELDS => '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://www.escapia.com/EVRN/2007/02" xmlns:tns0="http://www.escapia.com/EVRN/2007/02">
<soapenv:Header/>
<soapenv:Body>
<!-- The Target attribute can be set to Test or Production -->
<ns:EVRN_UnitDescriptiveInfoRQ Target="Test" Version="1.0" SummaryOnly="false">

<ns:POS>
<ns:Source>
<ns:RequestorID ID="Tides2Pines" MessagePassword="vDLVbyPtnRg6Q7Xa"/>

</ns:Source>
</ns:POS>
<ns:UnitDescriptiveInfos>
<ns:UnitDescriptiveInfo>
<ns:UnitInfo SendData="true"/>
<ns:Policies SendPolicies="false"/>
<ns:UnitReviews SendReviews="false"/>
<ns:Promotions SendPromotions="false"/>
</ns:UnitDescriptiveInfo>
</ns:UnitDescriptiveInfos>
</ns:EVRN_UnitDescriptiveInfoRQ>
</soapenv:Body>
</soapenv:Envelope>',
      CURLOPT_HTTPHEADER => array(
         'Content-Type: text/xml',
         'SOAPAction: UnitDescriptiveInfo'
      ),
   ));

   $response = curl_exec($curl);

   curl_close($curl);


   //return '<pre>' . htmlentities($response) . '</pre>';

   $response = preg_replace("/(<\/?)(\w+):([^>]*>)/", "$1$2$3", $response);


   $xml = simplexml_load_string($response);

   // Check for parsing errors
   if ($xml === false) {
      echo "Failed to parse XML response";
      exit;
   }

   $json = json_encode($xml);
   $array = json_decode($json);

   $rr = $array->sBody->UnitDescriptiveInfoStream->EVRN_UnitDescriptiveInfoRS->UnitDescriptiveContents->UnitDescriptiveContent;
   $html = '';
   $html .= '<div class="property-grid">';
   foreach ($rr as $tt) {
      $html .= '<div class="property-card">';
      $UnitName = $tt->UnitInfo->UnitName;
      $UnitInfo = $tt->UnitInfo;
      $MultimediaDescription = $tt->UnitInfo->Descriptions->MultimediaDescriptions->MultimediaDescription;
      foreach ($MultimediaDescription as $md) {

         $html .= '<div class="property-image"> <img src="' . $md->ImageItems->ImageItem['0']->ImageFormat['0']->URL . '"></div>';
      }
      $html .= $UnitInfo->{'@attributes'}->NumberFloors;

      $html .= '<div class="property-name">' . $UnitName . '</div>';
      $html .= '</div>';
   }
   $html .= '</div>';

   return ($html);
}
add_shortcode('escapia_data1', 'test_escapia');
