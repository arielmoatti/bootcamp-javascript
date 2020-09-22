(function (countries) {
    var searchField = $('input[name="search"]');
    var resultsDiv = $(".results");
    var reset = $("button");
    var idx = 0; //cannot use it correctly

    searchField.on("input", function (e) {
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
                // results = []; //resets the search results
                results.length = 0; //other options
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

    resultsDiv.on("mouseover", ".country", function (e) {
        if ($(".country").hasClass("highlight")) {
            $(".country").removeClass("highlight");
        }
        $(e.target).addClass("highlight");
    });

    resultsDiv.mouseleave(".country", function () {
        $(".country").removeClass("highlight");
    });

    resultsDiv.on("mousedown", ".country", function (e) {
        searchField.val($(e.target).text());
    });

    /*reset.click(function () {
        searchField.val("");
        // still doesn't clear the array
    });*/

    searchField.keydown(function (e) {
        var currHL = $(".highlight"); //declares the higlighted
        var countryClass = $(".country"); //declares the actual P tag

        switch (e.which) {
            case 40: //down
                console.log("down key", e.which);
                if (currHL.length === 0) {
                    //checks status of highlighted
                    countryClass.first().addClass("highlight"); //adds to first
                } else if (!countryClass.last().hasClass("highlight")) {
                    //checks if NOT reach last
                    currHL.next().addClass("highlight"); //adds to next
                    currHL.removeClass("highlight"); //removes from current
                }
                break; //to exit the switch

            case 38: //up
                console.log("up key", e.which);
                if (currHL.length === 0) {
                    countryClass.first().addClass("highlight");
                } else if (!countryClass.first().hasClass("highlight")) {
                    currHL.prev().addClass("highlight");
                    currHL.removeClass("highlight");
                }
                break;
            case 13: //enter
                console.log("enter key", e.which);
                if (currHL.length !== 0) {
                    //only selects highlighted result
                    // searchField.val($(e.target).text());
                    // searchField.val(countryClass.eq().text()); //cannot find solution
                    console.log("text added");
                }
                break;
        }
    });
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
