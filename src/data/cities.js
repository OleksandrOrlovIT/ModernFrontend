const cityList = [
    {"id": 1, "cityName": "New York City", "countryId": 2, "cityPopulation": 8537673, "cityArea": 468.9, "foundedAt": "1624", "languages": "English"},
    {"id": 2, "cityName": "Los Angeles", "countryId": 2, "cityPopulation": 3979576, "cityArea": 1302, "foundedAt": "1781", "languages": "English, Spanish"},
    {"id": 3, "cityName": "Chicago", "countryId": 2, "cityPopulation": 2693976, "cityArea": 606.1, "foundedAt": "1833", "languages": "English"},
    {"id": 4, "cityName": "Houston", "countryId": 2, "cityPopulation": 2320268, "cityArea": 1659.7, "foundedAt": "1837", "languages": "English, Spanish"},
    {"id": 5, "cityName": "Phoenix", "countryId": 2, "cityPopulation": 1680992, "cityArea": 1340.6, "foundedAt": "1868", "languages": "English"},
    {"id": 6,  "cityName": "Philadelphia", "countryId": 2, "cityPopulation": 1584064, "cityArea": 369.4, "foundedAt": "1682", "languages": "English"},
    {"id": 7,"cityName": "San Antonio", "countryId": 2, "cityPopulation": 1547253, "cityArea": 1052.6, "foundedAt": "1718", "languages": "English, Spanish"},
    {"id": 8,"cityName": "San Diego", "countryId": 2, "cityPopulation": 1425976, "cityArea": 964.5, "foundedAt": "1769", "languages": "English, Spanish"},
    {"id": 9,"cityName": "Dallas", "countryId": 2, "cityPopulation": 1343573, "cityArea": 999.3, "foundedAt": "1841", "languages": "English, Spanish"},
    {"id": 10,"cityName": "San Jose", "countryId": 2, "cityPopulation": 1030119, "cityArea": 461.5, "foundedAt": "1777", "languages": "English, Spanish"},
    {"id": 11,"cityName": "Austin", "countryId": 2, "cityPopulation": 964254, "cityArea": 822.8, "foundedAt": "1839", "languages": "English, Spanish"},
    {"id": 12,"cityName": "Jacksonville", "countryId": 2, "cityPopulation": 903889, "cityArea": 874.6, "foundedAt": "1822", "languages": "English"},
    {"id": 13,"cityName": "Fort Worth", "countryId": 2, "cityPopulation": 895008, "cityArea": 906.3, "foundedAt": "1849", "languages": "English, Spanish"},
    {"id": 14,"cityName": "Columbus", "countryId": 2, "cityPopulation": 892533, "cityArea": 575.2, "foundedAt": "1812", "languages": "English"},
    {"id": 15,"cityName": "Charlotte", "countryId": 2, "cityPopulation": 872498, "cityArea": 791, "foundedAt": "1768", "languages": "English"},
    {"id": 16,"cityName": "San Francisco", "countryId": 2, "cityPopulation": 870887, "cityArea": 600.6, "foundedAt": "1776", "languages": "English, Spanish, Chinese"},
    {"id": 17,"cityName": "Indianapolis", "countryId": 2, "cityPopulation": 867125, "cityArea": 936.3, "foundedAt": "1821", "languages": "English"},
    {"id": 18,"cityName": "Seattle", "countryId": 2, "cityPopulation": 744955, "cityArea": 217.2, "foundedAt": "1851", "languages": "English"},
    {"id": 19,"cityName": "Denver", "countryId": 2, "cityPopulation": 716492, "cityArea": 153.3, "foundedAt": "1858", "languages": "English"},
    {"id": 20,"cityName": "Washington", "countryId": 2, "cityPopulation": 715040, "cityArea": 177.0, "foundedAt": "1790", "languages": "English"},
    {"id": 21,"cityName": "Boston", "countryId": 2, "cityPopulation": 694583, "cityArea": 125.1, "foundedAt": "1630", "languages": "English"},
    {"id": 22,"cityName": "Nashville", "countryId": 2, "cityPopulation": 689447, "cityArea": 1309, "foundedAt": "1779", "languages": "English"},
    {"id": 23,"cityName": "Las Vegas", "countryId": 2, "cityPopulation": 670602, "cityArea": 352, "foundedAt": "1905", "languages": "English, Spanish"},
    {"id": 24,"cityName": "Detroit", "countryId": 2, "cityPopulation": 662172, "cityArea": 370.2, "foundedAt": "1701", "languages": "English"},
    {"id": 25,"cityName": "Oklahoma City", "countryId": 2, "cityPopulation": 655057, "cityArea": 1570.3, "foundedAt": "1889", "languages": "English"},
    {"id": 26,"cityName": "Kyiv", "countryId": 1, "cityPopulation": 2884000, "cityArea": 839, "foundedAt": "482", "languages": "Ukrainian, English"},
    { "id": 27,"cityName": "Kharkiv", "countryId": 1, "cityPopulation": 1431000, "cityArea": 350, "foundedAt": "1654", "languages": "Ukrainian, English"},
    { "id": 28,"cityName": "Odesa", "countryId": 1, "cityPopulation": 1015000, "cityArea": 236, "foundedAt": "1794", "languages": "Ukrainian, English"},
    { "id": 29,"cityName": "Dnipro", "countryId": 1, "cityPopulation": 1000000, "cityArea": 405, "foundedAt": "1776", "languages": "Ukrainian, English"},
    { "id": 30,"cityName": "Lviv", "countryId": 1, "cityPopulation": 723000, "cityArea": 182, "foundedAt": "1256", "languages": "Ukrainian, English"},
    { "id": 31,"cityName": "Zaporizhzhia", "countryId": 1, "cityPopulation": 709000, "cityArea": 334, "foundedAt": "952", "languages": "Ukrainian, English"},
    { "id": 32,"cityName": "Kryvyi Rih", "countryId": 1, "cityPopulation": 636000, "cityArea": 422, "foundedAt": "1775", "languages": "Ukrainian, English"},
    { "id": 33,"cityName": "Mykolaiv", "countryId": 1, "cityPopulation": 491000, "cityArea": 260, "foundedAt": "1789", "languages": "Ukrainian, English"},
    { "id": 34,"cityName": "Mariupol", "countryId": 1, "cityPopulation": 443000, "cityArea": 452, "foundedAt": "1778", "languages": "Ukrainian, English"},
    { "id": 35,"cityName": "Luhansk", "countryId": 1, "cityPopulation": 419000, "cityArea": 285, "foundedAt": "1795", "languages": "Ukrainian, English"},
    { "id": 36,"cityName": "Vinnytsia", "countryId": 1, "cityPopulation": 370000, "cityArea": 61, "foundedAt": "1363", "languages": "Ukrainian, English"},
    { "id": 37,"cityName": "Makiivka", "countryId": 1, "cityPopulation": 364000, "cityArea": 149, "foundedAt": "1700", "languages": "Ukrainian, English"},
    { "id": 38,"cityName": "Sevastopol", "countryId": 1, "cityPopulation": 343000, "cityArea": 864, "foundedAt": "1783", "languages": "Ukrainian, English"},
    { "id": 39,"cityName": "Simferopol", "countryId": 1, "cityPopulation": 339000, "cityArea": 107, "foundedAt": "1784", "languages": "Ukrainian, English"},
    { "id": 40,"cityName": "Kherson", "countryId": 1, "cityPopulation": 298000, "cityArea": 50, "foundedAt": "1778", "languages": "Ukrainian, English"},
    { "id": 41,"cityName": "Poltava", "countryId": 1, "cityPopulation": 293000, "cityArea": 145, "foundedAt": "899", "languages": "Ukrainian, English"},
    { "id": 42,"cityName": "Chernihiv", "countryId": 1, "cityPopulation": 287000, "cityArea": 79, "foundedAt": "907", "languages": "Ukrainian, English"},
    { "id": 43,"cityName": "Cherkasy", "countryId": 1, "cityPopulation": 284000, "cityArea": 69, "foundedAt": "1286", "languages": "Ukrainian, English"},
    { "id": 44,"cityName": "Sumy", "countryId": 1, "cityPopulation": 270000, "cityArea": 79, "foundedAt": "1652", "languages": "Ukrainian, English"},
    { "id": 45,"cityName": "Zhytomyr", "countryId": 1, "cityPopulation": 265000, "cityArea": 63, "foundedAt": "884", "languages": "Ukrainian, English"},
    { "id": 46,"cityName": "Rivne", "countryId": 1, "cityPopulation": 250000, "cityArea": 63, "foundedAt": "1283", "languages": "Ukrainian, English"},
    { "id": 47,"cityName": "Ternopil", "countryId": 1, "cityPopulation": 218022, "cityArea": 72, "foundedAt": "1540", "languages": "Ukrainian, English"},
    { "id": 48,"cityName": "Kolomiya", "countryId": 1, "cityPopulation": 62262, "cityArea": 40, "foundedAt": "1240", "languages": "Ukrainian, English"},
    { "id": 49,"cityName": "Chernivtsi", "countryId": 1, "cityPopulation": 252735, "cityArea": 153, "foundedAt": "1408", "languages": "Ukrainian, English"},
    {"id": 50, "cityName": "Irpin", "countryId": 1, "cityPopulation": 60084, "cityArea": 110, "foundedAt": "1899", "languages": "Ukrainian, English"},
    {"id": 51, "cityName": "Berlin", "countryId": 3, "cityPopulation": 3769495, "cityArea": 891.8, "foundedAt": "1237", "languages": "German, English"},
    {"id": 52, "cityName": "Hamburg", "countryId": 3, "cityPopulation": 1841179, "cityArea": 755.2, "foundedAt": "808", "languages": "German, English"},
    {"id": 53, "cityName": "Munich", "countryId": 3, "cityPopulation": 1471508, "cityArea": 310.4, "foundedAt": "1158", "languages": "German, English"},
    {"id": 54, "cityName": "Cologne", "countryId": 3, "cityPopulation": 1087863, "cityArea": 405.2, "foundedAt": "50", "languages": "German, English"},
    {"id": 55, "cityName": "Frankfurt", "countryId": 3, "cityPopulation": 753056, "cityArea": 248.3, "foundedAt": "794", "languages": "German, English"},
    {"id": 56, "cityName": "Stuttgart", "countryId": 3, "cityPopulation": 634830, "cityArea": 207.4, "foundedAt": "-950", "languages": "German, English"},
    {"id": 57, "cityName": "Düsseldorf", "countryId": 3, "cityPopulation": 619294, "cityArea": 217.4, "foundedAt": "1135", "languages": "German, English"},
    { "id": 58,"cityName": "Dortmund", "countryId": 3, "cityPopulation": 586181, "cityArea": 280.7, "foundedAt": "882", "languages": "German, English"},
    {"id": 59, "cityName": "Essen", "countryId": 3, "cityPopulation": 583109, "cityArea": 210.3, "foundedAt": "845", "languages": "German, English"},
    { "id": 60,"cityName": "Leipzig", "countryId": 3, "cityPopulation": 587857, "cityArea": 297.6, "foundedAt": "1015", "languages": "German, English"},
    {"id": 61, "cityName": "Bremen", "countryId": 3, "cityPopulation": 569352, "cityArea": 325.6, "foundedAt": "787", "languages": "German, English"},
    { "id": 62,"cityName": "Dresden", "countryId": 3, "cityPopulation": 554649, "cityArea": 328.3, "foundedAt": "1206", "languages": "German, English"},
    { "id": 63,"cityName": "Hanover", "countryId": 3, "cityPopulation": 538068, "cityArea": 204.1, "foundedAt": "1241", "languages": "German, English"},
    { "id": 64,"cityName": "Nuremberg", "countryId": 3, "cityPopulation": 518365, "cityArea": 186.5, "foundedAt": "1050", "languages": "German, English"},
    { "id": 65,"cityName": "Duisburg", "countryId": 3, "cityPopulation": 498683, "cityArea": 232.8, "foundedAt": "883", "languages": "German, English"},
    { "id": 66,"cityName": "Bochum", "countryId": 3, "cityPopulation": 365587, "cityArea": 145.7, "foundedAt": "1041", "languages": "German, English"},
    { "id": 67,"cityName": "Wuppertal", "countryId": 3, "cityPopulation": 354382, "cityArea": 168.4, "foundedAt": "1929", "languages": "German, English"},
    { "id": 68,"cityName": "Bielefeld", "countryId": 3, "cityPopulation": 333786, "cityArea": 258.8, "foundedAt": "1214", "languages": "German, English"},
    { "id": 69,"cityName": "Bonn", "countryId": 3, "cityPopulation": 328125, "cityArea": 141.1, "foundedAt": "-100", "languages": "German, English"},
    { "id": 70,"cityName": "Münster", "countryId": 3, "cityPopulation": 315293, "cityArea": 302.9, "foundedAt": "793", "languages": "German, English"},
    { "id": 71,"cityName": "Karlsruhe", "countryId": 3, "cityPopulation": 312676, "cityArea": 173.46, "foundedAt": "1715", "languages": "German, English"},
    { "id": 72,"cityName": "Mannheim", "countryId": 3, "cityPopulation": 309370, "cityArea": 144.96, "foundedAt": "1607", "languages": "German, English"},
    { "id": 73,"cityName": "Augsburg", "countryId": 3, "cityPopulation": 295135, "cityArea": 146.8, "foundedAt": "-15", "languages": "German, English"},
    {"id": 74, "cityName": "Wiesbaden", "countryId": 3, "cityPopulation": 274781, "cityArea": 203.9, "foundedAt": "1215", "languages": "German, English"},
    { "id": 75,"cityName": "Gelsenkirchen", "countryId": 3, "cityPopulation": 260654, "cityArea": 104.9, "foundedAt": "1850", "languages": "German, English"},
    { "id": 76,"cityName": "Paris", "countryId": 4, "cityPopulation": 2148000, "cityArea": 105.4, "foundedAt": "-250", "languages": "French"},
    { "id": 77,"cityName": "Marseille", "countryId": 4, "cityPopulation": 870018, "cityArea": 240.62, "foundedAt": "-600", "languages": "French"},
    { "id": 78,"cityName": "Lyon", "countryId": 4, "cityPopulation": 516092, "cityArea": 47.87, "foundedAt": "-43", "languages": "French"},
    { "id": 79,"cityName": "Toulouse", "countryId": 4, "cityPopulation": 479553, "cityArea": 118.3, "foundedAt": "-118", "languages": "French"},
    { "id": 80,"cityName": "Nice", "countryId": 4, "cityPopulation": 342295, "cityArea": 71.92, "foundedAt": "-350", "languages": "French"},
    { "id": 81,"cityName": "Nantes", "countryId": 4, "cityPopulation": 309346, "cityArea": 65.19, "foundedAt": "374", "languages": "French"},
    { "id": 82,"cityName": "Strasbourg", "countryId": 4, "cityPopulation": 280966, "cityArea": 78.26, "foundedAt": "-12", "languages": "French"},
    { "id": 83,"cityName": "Montpellier", "countryId": 4, "cityPopulation": 281613, "cityArea": 56.88, "foundedAt": "1220", "languages": "French"},
    { "id": 84,"cityName": "Bordeaux", "countryId": 4, "cityPopulation": 257068, "cityArea": 49.36, "foundedAt": "1462", "languages": "French"},
    { "id": 85,"cityName": "Lille", "countryId": 4, "cityPopulation": 232787, "cityArea": 34.52, "foundedAt": "640", "languages": "French"},
    { "id": 86,"cityName": "Rennes", "countryId": 4, "cityPopulation": 217728, "cityArea": 50.39, "foundedAt": "-200", "languages": "French"},
    { "id": 87,"cityName": "Reims", "countryId": 4, "cityPopulation": 182592, "cityArea": 47.46, "foundedAt": "-80", "languages": "French"},
    { "id": 88,"cityName": "Le Havre", "countryId": 4, "cityPopulation": 170147, "cityArea": 45.65, "foundedAt": "1517", "languages": "French"},
    {"id": 89, "cityName": "Saint-Étienne", "countryId": 4, "cityPopulation": 171260, "cityArea": 79.97, "foundedAt": "1816", "languages": "French"},
    { "id": 90,"cityName": "Toulon", "countryId": 4, "cityPopulation": 171953, "cityArea": 42.84, "foundedAt": "-600", "languages": "French"},
    { "id": 91,"cityName": "Grenoble", "countryId": 4, "cityPopulation": 160649, "cityArea": 18.13, "foundedAt": "-43", "languages": "French"},
    { "id": 92,"cityName": "Dijon", "countryId": 4, "cityPopulation": 153701, "cityArea": 40.41, "foundedAt": "-600", "languages": "French"},
    { "id": 93,"cityName": "Angers", "countryId": 4, "cityPopulation": 152923, "cityArea": 42.70, "foundedAt": "-300", "languages": "French"},
    { "id": 94,"cityName": "Nîmes", "countryId": 4, "cityPopulation": 151075, "cityArea": 161.85, "foundedAt": "-600", "languages": "French"},
    { "id": 95,"cityName": "Villeurbanne", "countryId": 4, "cityPopulation": 151115, "cityArea": 14.52, "foundedAt": "-500", "languages": "French"},
    { "id": 96,"cityName": "Clermont-Ferrand", "countryId": 4, "cityPopulation": 141569, "cityArea": 42.67, "foundedAt": "-100", "languages": "French"},
    { "id": 97,"cityName": "Le Mans", "countryId": 4, "cityPopulation": 144548, "cityArea": 52.81, "foundedAt": "-100", "languages": "French"},
    { "id": 98,"cityName": "Aix-en-Provence", "countryId": 4, "cityPopulation": 143767, "cityArea": 186.08, "foundedAt": "-123", "languages": "French"},
    { "id": 99,"cityName": "Brest", "countryId": 4, "cityPopulation": 139163, "cityArea": 49.51, "foundedAt": "-300", "languages": "French"},
    { "id": 100,"cityName": "Limoges", "countryId": 4, "cityPopulation": 133627, "cityArea": 77.45, "foundedAt": "-100", "languages": "French"}
]

export default cityList;