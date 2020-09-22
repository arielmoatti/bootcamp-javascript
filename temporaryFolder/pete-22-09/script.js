(function (countries) {
    var searchField = $('input[name="search"]');
    var resultsDiv = $(".results");
    var iKey = 0;

    searchField.on("input", function (e) {
        // e.target
        //e.currentTarget
        var results = [];
        var userInput = searchField.val().toLowerCase();
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf(userInput) === 0) {
                results.push(countries[i]);
                // results.splice(1, results.length);
                // searchField.attr("placeholder", "no results!");
            }

            //handles an empty search field (e.g. backspace)
            if (!searchField.val()) {
                results = []; //resets the search results
                // results.length = 0; //other options
                // results.splice(0, results.length); //other options
            }
            //shows only 4 results
            if (results.length === 4) {
                break;
            }
        } //ends the for loop
        // creates the result div with paragraphs
        var htmlForCountries = "";
        for (var j = 0; j < results.length; j++) {
            htmlForCountries += "<p class='country'>" + results[j] + "</p>";
        }
        resultsDiv.html(htmlForCountries);
        //checks if there are no results (like numbers) AND the field is empty
        if (results.length === 0 && searchField.val().length != 0) {
            resultsDiv.html("<p class='noResults'>No results found...</p>");
        }
    });

    searchField.on("blur", function () {
        resultsDiv.hide();
    });

    searchField.on("focus", function () {
        resultsDiv.show();
    });

    function highlightFn(e) {
        $(e.target).toggleClass("highlight");
    }

    function inputVal(e) {
        searchField.val($(e.target).text());
    }
    resultsDiv.on("mouseover", ".country", highlightFn);
    resultsDiv.on("mouseleave", ".country", highlightFn);
    resultsDiv.on("mousedown", ".country", inputVal);
    searchField.keydown(function (e) {
        if (e.which === 40) {
            console.log("i before", iKey);
            if (iKey < 3) {
                console.log("iKey after", iKey);
                $("p").eq(iKey).addClass("highlight");
                iKey++;
                $("p").eq(iKey).removeClass("highlight");
            } else {
                iKey = 0;
            }
            console.log("iKey increment", iKey);
            console.log("down");
        }
        // highlightFn();
    });
    // resultsDiv.on("mousedown", ".country", function (e) {
    //     searchField.val($(e.target).text());
    // });

    //add eventlisterer to the <p> tags to highlight them - with delegation:
    //.....on("click", ".country", function(){})
    // use .next() and .prev() (jquery) for the down and up arrow keys
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]);
