<?php
$states = unserialize('a:56:{s:12:"Alabama (AL)";s:2:"AL";s:11:"Alaska (AK)";s:2:"AK";s:12:"Arizona (AZ)";s:2:"AZ";s:13:"Arkansas (AR)";s:2:"AR";s:15:"California (CA)";s:2:"CA";s:13:"Colorado (CO)";s:2:"CO";s:16:"Connecticut (CT)";s:2:"CT";s:13:"Delaware (DE)";s:2:"DE";s:12:"Florida (FL)";s:2:"FL";s:12:"Georgia (GA)";s:2:"GA";s:11:"Hawaii (HI)";s:2:"HI";s:10:"Idaho (ID)";s:2:"ID";s:13:"Illinois (IL)";s:2:"IL";s:12:"Indiana (IN)";s:2:"IN";s:9:"Iowa (IA)";s:2:"IA";s:11:"Kansas (KS)";s:2:"KS";s:13:"Kentucky (KY)";s:2:"KY";s:14:"Louisiana (LA)";s:2:"LA";s:10:"Maine (ME)";s:2:"ME";s:13:"Maryland (MD)";s:2:"MD";s:18:"Massachusetts (MA)";s:2:"MA";s:13:"Michigan (MI)";s:2:"MI";s:14:"Minnesota (MN)";s:2:"MN";s:16:"Mississippi (MS)";s:2:"MS";s:13:"Missouri (MO)";s:2:"MO";s:12:"Montana (MT)";s:2:"MT";s:13:"Nebraska (NE)";s:2:"NE";s:11:"Nevada (NV)";s:2:"NV";s:18:"New Hampshire (NH)";s:2:"NH";s:15:"New Jersey (NJ)";s:2:"NJ";s:15:"New Mexico (NM)";s:2:"NM";s:13:"New York (NY)";s:2:"NY";s:19:"North Carolina (NC)";s:2:"NC";s:17:"North Dakota (ND)";s:2:"ND";s:9:"Ohio (OH)";s:2:"OH";s:13:"Oklahoma (OK)";s:2:"OK";s:11:"Oregon (OR)";s:2:"OR";s:17:"Pennsylvania (PA)";s:2:"PA";s:17:"Rhode Island (RI)";s:2:"RI";s:19:"South Carolina (SC)";s:2:"SC";s:17:"South Dakota (SD)";s:2:"SD";s:14:"Tennessee (TN)";s:2:"TN";s:10:"Texas (TX)";s:2:"TX";s:9:"Utah (UT)";s:2:"UT";s:12:"Vermont (VT)";s:2:"VT";s:13:"Virginia (VA)";s:2:"VA";s:15:"Washington (WA)";s:2:"WA";s:18:"West Virginia (WV)";s:2:"WV";s:14:"Wisconsin (WI)";s:2:"WI";s:12:"Wyoming (WY)";s:2:"WY";s:19:"American Samoa (AS)";s:2:"AS";s:25:"District of Columbia (DC)";s:2:"DC";s:9:"Guam (GU)";s:2:"GU";s:29:"Northern Mariana Islands (MP)";s:2:"MP";s:16:"Puerto Rico (PR)";s:2:"PR";s:22:"US Virgin Islands (VI)";s:2:"VI";}');

return [
    'partnershipType' => [
        'label' => 'Program Type',
        'options' => [
            '' => 'Select',
            'Referral' => 'Referral Partner',
            'Agent' => 'Agent'
        ]
    ],
    'businessType' => [
        'label' => 'Entity Type',
        'options' => [
            '' => 'Select',
            'SoleProp' => 'Individual / Sole Proprietor',
            'Partnership' => 'Partnership',
            'Corp' => 'Corporation',
            'LLC' => 'LLC',
        ]
    ],
    'state' => [
        'label' => 'State',
        'type' => 'select',
        'options' => array_flip($states),
    ],
    'data-dob' => [
        'format' => '##/##/####'
    ],
    'data-number' => [
        'format' => '###-##-####'
    ],
    'data-zip' => [
        'format' => '#####',
    ],
    'data-phone' => [
        'format' => '(###) ###-####'
    ],
    'data-number1' => [
        'format' => '############'
    ]
];
