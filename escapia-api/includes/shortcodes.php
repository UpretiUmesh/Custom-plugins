<?php

use GetTemplates;

class FrontEndFilterForm
{

	public function __construct()
	{
		add_shortcode('property_search_form', [$this, 'escapia_search_form']);
	}
	public function escapia_search_form()
	{
		ob_start();
		GetTemplates::render('/filterSearchForm');

		return ob_get_clean();
	}
}
