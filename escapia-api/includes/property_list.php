<?php

require_once 'escapia_api_handler.php';

class PropertyList
{

	public function __construct()
	{
		add_shortcode('escapia_search', [$this, 'unit_search']);
		add_action('wp_ajax_unit_search', [$this, 'unit_search']);
		add_action('wp_ajax_nopriv_unit_search', [$this, 'unit_search']);
	}

	public function unit_search()
	{
		$city = $_POST['city'];
		$arrival_date = $_POST['arrival_date'];
		$departure_date = $_POST['departure_date'];
		$adults = $_POST['adults'];
		$children = $_POST['children'];

		if (!$adults) {
			$adults = '1';
		}

		$xml_data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"> 
<soapenv:Header/> 
<soapenv:Body> 
<EVRN_UnitSearchRQ xmlns="http://www.escapia.com/EVRN/2007/02" EchoToken="test_token" TimeStamp="2025-01-30T07:31:09.174-07:00" Target="Production" Version="1"  MaxResponses="80" SortOrder="G" ResponseType="PropertyList" >
<POS>
<Source>

 <RequestorID ID="Tides2Pines" MessagePassword="vDLVbyPtnRg6Q7Xa" />  </Source>

</POS> 
<Criteria AvailableOnlyIndicator="true"> 
<Criterion> 
 <Address><CityName>' . $city . '</CityName> </Address>
<Region> 

<CountryCode>US</CountryCode>
</Region> 
<UnitStayCandidate> 
<GuestCounts> 
<GuestCount Count="' . $adults . '"/> 
</GuestCounts> 
</UnitStayCandidate>
<StayDateRange Start="09/03/2025" End="09/10/2025" />
</Criterion>
</Criteria> 
</EVRN_UnitSearchRQ> 
</soapenv:Body> 
</soapenv:Envelope>';


		// Example API call
		$url = 'https://api.escapia.com/EVRNService.svc';
		$soap_action = 'UnitSearch';

		$response = Escapiaapihandler::executeRequest($url, $xml_data, $soap_action);

		$xml = simplexml_load_string($response);


		// Check for parsing errors
		if ($xml === false) {
			echo "Failed to parse XML response";
			exit;
		}

		$json = json_encode($xml);
		$array = json_decode($json);
		$rr = $array->sBody->EVRN_UnitSearchRS->Units->Unit;

		// Ensure $rr is an array
		if (is_object($rr)) {
			$rr = [$rr]; // Wrap the object in an array
		} elseif (!is_array($rr)) {
			$rr = []; // Handle cases where $rr is neither an object nor an array
		}

		$html = '';
		$html .= '<div class="total_property">' . count($rr) . ' Properties </div>';
		$html .= '<div class="container">';
		$html .= '<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">'; // Bootstrap Grid

		foreach ($rr as $tt) {
			$html .= '<div class="col">'; // Bootstrap Grid Column
			$html .= '<div class="card shadow-sm">'; // Bootstrap Card

			$UnitName = $tt->{'@attributes'}->UnitName ?? '';
			$AvailabilityStatus = $tt->{'@attributes'}->AvailabilityStatus ?? '';
			$UnitHeadline = $tt->{'@attributes'}->UnitHeadline ?? '';
			$UnitCode = $tt->{'@attributes'}->UnitCode ?? '';

			$VendorMessages = $tt->VendorMessages->VendorMessage->SubSection->Paragraph ?? [];
			$Address = $tt->Address->AddressLine ?? '';
			$CityName = $tt->Address->CityName ?? '';
			$CountryName = $tt->Address->CountryName ?? '';
			$full_address = $Address . ' ' . $CityName . ' ' . $CountryName;

			// Property Image
			foreach ($VendorMessages as $md) {
				if (!empty($md->URL)) {
					$html .= '<img src="' . $md->URL . '" class="card-img-top" alt="Property Image">';
					break; // Only show the first image
				}
			}

			$html .= '<div class="card-body">';
			$html .= '<h5 class="card-title">' . $UnitName . '</h5>';
			$html .= '<p class="card-text">' . $UnitHeadline . '</p>';
			$html .= '<p class="text-muted"><strong>Availability Status:</strong> ' . $AvailabilityStatus . '</p>';
			$html .= '<p class="text-muted"><strong>Address:</strong> ' . $full_address . '</p>';
			$html .= '<a href="/single-property2/?unit-code=' . $UnitCode . '" class="btn btn-primary">View Property</a>';
			$html .= '</div>'; // Close card-body
			$html .= '</div>'; // Close card
			$html .= '</div>'; // Close col
		}

		$html .= '</div>'; // Close row
		$html .= '</div>'; // Close container

		return $html;
	}
}
