const restaurants = [
  {
    location: {type: 'Point', coordinates: [25.018456, 60.228982]},
    _id: '6470d38ecb12107db6fe24c1',
    companyId: 68,
    name: 'Ravintola Ladonlukko',
    address: 'Latokartanonkaari 9 A',
    postalCode: '00790',
    city: 'Helsinki',
    phone:
      '+358 50 4653899 Ravintolan esimies +358 50 435 8072 Kokoustarjoilut /ravintola',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.903147, 60.221729]},
    _id: '6470d38ecb12107db6fe24c2',
    companyId: 1580536,
    name: 'Ravintola Stadin AO Ilkantie',
    address: 'Ilkantie 3',
    postalCode: '00400',
    city: 'Helsinki',
    phone: '+358 (0) 50 4710 211',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.95576, 60.196672]},
    _id: '6470d38ecb12107db6fe24c3',
    companyId: 85,
    name: 'Stadin AO - Hattulantie 2',
    address: 'Hattulantie 2',
    postalCode: '00550',
    city: 'Helsinki',
    phone: '050 401 6867',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.94886, 60.218638]},
    _id: '6470d38ecb12107db6fe24c4',
    companyId: 179,
    name: 'Stadin AO Kullervonkatu',
    address: 'Kullervonkatu 11',
    postalCode: '00610',
    city: 'Helsinki',
    phone: '+358 50 472 4652',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.946847, 60.194701]},
    _id: '6470d38ecb12107db6fe24c5',
    companyId: 157,
    name: 'Stadin AO TK 23',
    address: 'Teollisuuskatu 23-25',
    postalCode: '00510',
    city: 'Helsinki',
    phone: '0503274920',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.950631, 60.169096]},
    _id: '6470d38ecb12107db6fe24bf',
    companyId: 1045996,
    name: 'Helsingin yliopisto Päärakennus',
    address: 'Aleksanterinkatu 5',
    postalCode: '00170',
    city: 'Helsinki',
    phone: '+358 50 411 8325 Kokous- ja juhlapalvelut ',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.479222, 60.977511]},
    _id: '6470d38ecb12107db6fe24be',
    companyId: 10229,
    name: 'Ravintola Visis - HAMK Hämeenlinna',
    address: 'Visamäentie 35, D-rakennus',
    postalCode: '13500',
    city: 'Hämeenlinna',
    phone: '0504776779',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [23.856847, 61.449716]},
    _id: '6470d38ecb12107db6fe24cb',
    companyId: 111,
    name: 'Ravintola Hertsi',
    address: 'Korkeakoulunkatu 1',
    postalCode: '33720',
    city: 'Tampere',
    phone: '+358503581648',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [22.826006, 62.788814]},
    _id: '6470d38ecb12107db6fe24ca',
    companyId: 109,
    name: 'Ravintola ja kahvila Kampustalo ',
    address: 'Kalevankatu 35',
    postalCode: '60100',
    city: 'Seinäjoki',
    phone: '050 4776 688 Sodexo keittiö',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [22.821736, 62.790536]},
    _id: '6470d38ecb12107db6fe24c9',
    companyId: 108,
    name: 'Ravintola Frami',
    address: 'Kampusranta 11',
    postalCode: '60320',
    city: 'Seinäjoki',
    phone: '050 3763 386',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [23.160741, 63.833899]},
    _id: '6470d38ecb12107db6fe24c8',
    companyId: 129,
    name: 'Campusravintola',
    address: 'Talonpojankatu 2',
    postalCode: '67100',
    city: 'Kokkola',
    phone: '+358 50  560 9064',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [23.778004, 61.495009]},
    _id: '6470d38ecb12107db6fe24cc',
    companyId: 116,
    name: 'Ravintola Linna',
    address: 'Kalevantie 5',
    postalCode: '33100',
    city: 'Tampere',
    phone: '050 3185 913',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [22.22723, 60.4396]},
    _id: '6470d38ecb12107db6fe24ce',
    companyId: 100,
    name: 'Ravintola Fiskarholmen - Auriga Business Center',
    address: 'Juhana Herttuan Puistokatu 21',
    postalCode: '20100',
    city: 'Turku',
    phone: 'Aulapalvelu: 050 437 0998 ',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [22.292545, 60.451904]},
    _id: '6470d38ecb12107db6fe24cd',
    companyId: 102,
    name: 'Flavoria Medisiina D',
    address: 'Kiinamyllynkatu 10 D',
    postalCode: '20520',
    city: 'Turku',
    phone: '0504358013',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [22.300353, 60.452543]},
    _id: '6470d38ecb12107db6fe24cf',
    companyId: 98,
    name: 'Ravintola Old Mill',
    address: 'Ruukinkatu 2-4',
    postalCode: '20540',
    city: 'Turku',
    phone: '02 6510 0200',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [23.997606, 61.279413]},
    _id: '6470d38ecb12107db6fe24d0',
    companyId: 117,
    name: 'Ravintola Koski - HAMK Valkeakoski',
    address: 'Lotilantie 16',
    postalCode: '37630',
    city: 'Valkeakoski',
    phone: '050 4525146',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.843822, 60.258218]},
    _id: '6470d38ecb12107db6fe24d1',
    companyId: 152,
    name: 'Metropolia Myyrmäki',
    address: 'Leiritie 1',
    postalCode: '01600',
    city: 'Vantaa',
    phone: '050 300 8563',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [25.017745, 60.250063]},
    _id: '6470d38ecb12107db6fe24c6',
    companyId: 180,
    name: 'Stadin AO Vilppulantie',
    address: 'Vilppulantie 14',
    postalCode: '00700',
    city: 'Helsinki',
    phone: '+358504725250',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [23.0664, 61.764526]},
    _id: '6470d38ecb12107db6fe24c7',
    companyId: 115,
    name: 'Ravintola Ilona',
    address: 'Eino Salmelaisen katu 20',
    postalCode: '39500',
    city: 'Ikaalinen',
    phone: '+358447554540',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.8256169, 60.1846499]},
    _id: '6470d390cb12107db6fe24e9',
    companyId: 3087,
    name: 'A Bloc',
    address: 'Otaniementie 12',
    postalCode: '02150',
    city: 'Espoo',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.9241528, 60.1711969]},
    _id: '6470d391cb12107db6fe24eb',
    companyId: 3406,
    name: 'Hanken',
    address: 'Arkadiankatu 22',
    postalCode: '00100',
    city: 'Helsinki',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.9588696, 60.1810957]},
    _id: '6470d391cb12107db6fe24ed',
    companyId: 3067,
    name: 'Kookos',
    address: 'Haapaniemenkatu 6',
    postalCode: '00530',
    city: 'Helsinki',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.7586024, 60.223184]},
    _id: '6470d391cb12107db6fe24ef',
    companyId: 3208,
    name: 'Metropolia',
    address: 'Karakaarenkuja 6',
    postalCode: '02610',
    city: 'Espoo',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [29.7413311, 62.6050148]},
    _id: '6470d391cb12107db6fe24f1',
    companyId: 41704,
    name: 'Futura',
    address: 'Yliopistokatu 7',
    postalCode: '80100',
    city: 'Joensuu',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.8323964, 60.18514089999999]},
    _id: '6470d391cb12107db6fe24f3',
    companyId: 3101,
    name: 'Dipoli ravintolat',
    address: 'Otakaari 24',
    postalCode: '02150',
    city: 'Espoo',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.922711, 60.18219649999999]},
    _id: '6470d391cb12107db6fe24f5',
    companyId: 3704,
    name: 'Töölö 37',
    address: 'Töölönkatu 37',
    postalCode: '00260',
    city: 'Helsinki',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [27.6367251, 62.8908459]},
    _id: '6470d391cb12107db6fe24f7',
    companyId: 439,
    name: 'Tietoteknia',
    address: 'Savilahdentie 6',
    postalCode: '70210',
    city: 'Kuopio',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [25.7150496, 66.4853375]},
    _id: '6470d391cb12107db6fe24f9',
    companyId: 60201,
    name: 'Petronella',
    address: 'Yliopistonkatu 8',
    postalCode: '96300',
    city: 'Rovaniemi',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [21.8005159, 61.4923989]},
    _id: '6470d391cb12107db6fe24fb',
    companyId: 3659,
    name: 'Sofia',
    address: 'Siltapuistokatu 2',
    postalCode: '28100',
    city: 'Pori',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [25.509396, 65.0087233]},
    _id: '6470d391cb12107db6fe24fd',
    companyId: 226,
    name: 'Alwari',
    address: 'Kiviharjuntie 4',
    postalCode: '90220',
    city: 'Oulu',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [29.7444642, 62.60484529999999]},
    _id: '6470d391cb12107db6fe24ff',
    companyId: 417,
    name: 'Opiskelijaravintola Carelia',
    address: 'Yliopistokatu 4',
    postalCode: '80100',
    city: 'Joensuu',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [23.7779331, 61.49346079999999]},
    _id: '6470d391cb12107db6fe2501',
    companyId: 815,
    name: 'Minerva',
    address: 'Kanslerinrinne 1',
    postalCode: '33100',
    city: 'Tampere',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.9354404, 60.2017311]},
    _id: '6470d391cb12107db6fe2503',
    companyId: 83,
    name: 'Opetustalo',
    address: 'Rautatieläisenkatu 5',
    postalCode: '00520',
    city: 'Helsinki',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [29.7463409, 62.60605829999999]},
    _id: '6470d391cb12107db6fe2505',
    companyId: 433,
    name: 'Kampus Bistro',
    address: 'Opiskelijankatu 7',
    postalCode: '80130',
    city: 'Joensuu',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.8057171, 60.18600780000001]},
    _id: '6470d391cb12107db6fe2507',
    companyId: 3292,
    name: 'Laurea Otaniemen kampus',
    address: 'Metsänpojankuja 3',
    postalCode: '02130',
    city: 'Espoo',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [29.7782989, 62.59646850000001]},
    _id: '6470d391cb12107db6fe2509',
    companyId: 447,
    name: 'Wire',
    address: 'Karjalankatu 3',
    postalCode: '80200',
    city: 'Joensuu',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [27.6352768, 62.8920528]},
    _id: '6470d391cb12107db6fe250b',
    companyId: 442,
    name: 'Itä-Suomen yliopisto/ Mediteknia',
    address: 'Yliopistonranta 1',
    postalCode: '70210',
    city: 'Kuopio',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [25.4203294, 64.80288469999999]},
    _id: '6470d391cb12107db6fe250d',
    companyId: 231,
    name: 'Joutsenkartano',
    address: 'Iivarinpolku 2',
    postalCode: '91900',
    city: 'Liminka',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.5149564, 64.07371549999999]},
    _id: '6470d391cb12107db6fe250f',
    companyId: 3565,
    name: 'Messi',
    address: 'Vierimaantie 7',
    postalCode: '84100',
    city: 'Ylivieska',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [27.6411799, 62.8951821]},
    _id: '6470d391cb12107db6fe2511',
    companyId: 436,
    name: 'Itä-Suomen yliopisto/Canthia',
    address: 'Yliopistonranta 1 C, B porras',
    postalCode: '70210',
    city: 'Kuopio',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.977768, 60.2094463]},
    _id: '6470d391cb12107db6fe2513',
    companyId: 1256,
    name: 'Arabianranta',
    address: 'Hämeentie 135 A',
    postalCode: '00560',
    city: 'Helsinki',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [29.7789469, 62.5887184]},
    _id: '6470d391cb12107db6fe2519',
    companyId: 424,
    name: 'Solina',
    address: 'Tikkarinne 9',
    postalCode: '80200',
    city: 'Joensuu',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [21.6160466, 63.0947465]},
    _id: '6470d391cb12107db6fe251b',
    companyId: 3567,
    name: 'Cafe Hermes',
    address: 'Kauppapuistikko 2',
    postalCode: '65100',
    city: 'Vaasa',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [29.7413311, 62.6050148]},
    _id: '6470d391cb12107db6fe251d',
    companyId: 41702,
    name: 'Natura',
    address: 'Yliopistokatu 7',
    postalCode: '80100',
    city: 'Joensuu',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [25.7286139, 66.4967017]},
    _id: '6470d391cb12107db6fe251f',
    companyId: 601,
    name: 'Kuukkeli',
    address: 'Hallituskatu 3 A',
    postalCode: '96100',
    city: 'Rovaniemi',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.9352418, 60.173658]},
    _id: '6470d391cb12107db6fe2521',
    companyId: 3100,
    name: 'Klubi',
    address: 'Mannerheimintie 13 A',
    postalCode: '00100',
    city: 'Helsinki',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [25.0811604, 60.45285939999999]},
    _id: '6470d391cb12107db6fe2523',
    companyId: 3623,
    name: 'Yolanda',
    address: 'Järvenpääntie 640',
    postalCode: '04400',
    city: 'Järvenpää',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [25.7338487, 62.235725]},
    _id: '6470d391cb12107db6fe2525',
    companyId: 301,
    name: 'Jyväskylä YO, kirjasto Lähde, Ravintola Taide ja kahvila Tiede',
    address: 'Seminaarinkatu 15, B-rak.',
    postalCode: '40100',
    city: 'Jyväskylä',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [25.044058, 60.294987]},
    _id: '6470d392cb12107db6fe2527',
    companyId: 3032,
    name: 'Laurea Tikkurilan kampus',
    address: 'Ratatie 22',
    postalCode: '01300',
    city: 'Vantaa',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.965514, 60.2015993]},
    _id: '6470d392cb12107db6fe2529',
    companyId: 3003,
    name: 'Arcada',
    address: 'Jan-Magnus Janssonin Aukio 1',
    postalCode: '00550',
    city: 'Helsinki',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [25.0193211, 60.2230729]},
    _id: '6470d392cb12107db6fe252b',
    companyId: 61,
    name: 'Tähkä',
    address: 'Koetilantie 7',
    postalCode: '00790',
    city: 'Helsinki',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [25.7219359, 66.481552]},
    _id: '6470d392cb12107db6fe252d',
    companyId: 605,
    name: 'Lapin AMK, Tekuila ja Cafe Lumen',
    address: 'Jokiväylä 11',
    postalCode: '96300',
    city: 'Rovaniemi',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [21.6216448, 63.0873416]},
    _id: '6470d392cb12107db6fe252f',
    companyId: 3597,
    name: 'Ravintola Wasa',
    address: 'Hietalahdenkatu 2-4, H-talo 3 krs.',
    postalCode: '65130',
    city: 'Vaasa',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.969184, 60.1990235]},
    _id: '6470d392cb12107db6fe2531',
    companyId: 3104,
    name: 'DIAK Kalasatama',
    address: 'Kyläsaarenkuja 2',
    postalCode: '00580',
    city: 'Helsinki',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [25.4703513, 65.00887039999999]},
    _id: '6470d392cb12107db6fe2533',
    companyId: 1694,
    name: 'Kantakortteli',
    address: 'Albertinkatu 16',
    postalCode: '90100',
    city: 'Oulu',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [29.7413311, 62.6050148]},
    _id: '6470d392cb12107db6fe2535',
    companyId: 41703,
    name: 'Wicked Rabbit Metria',
    address: 'Yliopistokatu 7',
    postalCode: '80100',
    city: 'Joensuu',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.5800774, 65.7535821]},
    _id: '6470d392cb12107db6fe2537',
    companyId: 210,
    name: 'Lapin AMK, kahvila ja ravintola Lippo',
    address: 'Tietokatu 1',
    postalCode: '94600',
    city: 'Kemi',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.8550865, 60.6264543]},
    _id: '6470d392cb12107db6fe2539',
    companyId: 3058,
    name: 'Laurea Hyvinkään kampus',
    address: 'Uudenmaankatu 22',
    postalCode: '05800',
    city: 'Hyvinkää',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.977768, 60.2094463]},
    _id: '6470d392cb12107db6fe253b',
    companyId: 1251,
    name: 'Luova',
    address: 'Hämeentie 135 D',
    postalCode: '00560',
    city: 'Helsinki',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [23.8589986, 61.4498286]},
    _id: '6470d391cb12107db6fe2517',
    companyId: 812,
    name: 'Reaktori',
    address: 'Korkeakoulunkatu 7',
    postalCode: '33720',
    city: 'Tampere',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [25.7570866, 62.2408879]},
    _id: '6470d392cb12107db6fe253d',
    companyId: 3364,
    name: 'Fiilu',
    address: 'Piippukatu 11',
    postalCode: '40100',
    city: 'Jyväskylä',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [27.6412062, 62.894351]},
    _id: '6470d391cb12107db6fe2515',
    companyId: 437,
    name: 'Itä-Suomen yliopisto/Snellmania',
    address: 'Yliopistonranta 1 E',
    postalCode: '70210',
    city: 'Kuopio',
    phone: '-',
    company: 'Compass Group',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.822108, 60.186776]},
    _id: '6470d7ff15d0729ae37591b9',
    companyId: 86,
    name: 'Ravintola Aalto Tietotekniikantalo ',
    address: 'Konemiehentie 2',
    postalCode: '02150',
    city: 'Espoo',
    phone: 'Keittiö puh. +358505713242',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.829696, 60.188222]},
    _id: '6470d857a7309cc578e0180b',
    companyId: 86,
    name: 'Ravintola Aalto Kvarkki ',
    address: 'Otakaari 3',
    postalCode: '02150',
    city: 'Espoo',
    phone: 'Keittiö puh.+358505336952',
    company: 'Sodexo',
    __v: 0,
  },
];

// your code here
const kohde = document.querySelector('tbody');
const modaali = document.querySelector('dialog');
const info = document.getElementById('info');
const closeModal = document.getElementById('close-modal');

closeModal.addEventListener('click', function () {
  modaali.close();
});

restaurants.sort((a, b) => a.name.localeCompare(b.name));

for (const restaurant of restaurants) {
  if (restaurant) {
    //ilmankin voi, ettei palauta nullia
    const nimi = document.createElement('td');
    nimi.innerText = restaurant.name;

    const osoite = document.createElement('td');
    osoite.innerText = restaurant.address;

    const rivi = document.createElement('tr');

    rivi.addEventListener('click', function () {
      const korostetut = document.querySelectorAll('.highlight');
      for (const korostettu of korostetut) {
        korostettu.classList.remove('highlight');
      }

      rivi.classList.add('highlight');
      modaali.showModal();
      const ravintolaHTML = `
            <header>
            <h3>${restaurant.name}<h3>
            <p>${restaurant.company}<p>

            </header>
            <address>
                ${restaurant.address}<br>
                ${restaurant.postalCode} ${restaurant.city}<br>
                ${restaurant.phone}<br>
            </address>
      `;
      info.innerHTML = '';
      info.insertAdjacentHTML('beforeend', ravintolaHTML);
    });

    rivi.append(nimi, osoite);
    kohde.append(rivi);
  }
}
