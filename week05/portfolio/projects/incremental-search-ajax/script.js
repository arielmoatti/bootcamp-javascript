(function () {
    var searchField = $('input[name="search"]');
    var resultsDiv = $(".results");
    var reset = $("button");

    searchField.on("input", function (e) {
        resultsDiv.show(); //important after hiding with "enter" key

        var userInput = searchField.val();
        //ajax configuration
        var config = {
            url: "https://spicedworld.herokuapp.com/",
            data: {
                q: userInput,
            },
            success: function (response) {
                var currentInput = searchField.val();
                if (currentInput === userInput) {
                    successFN(response);
                } else {
                    return; //whatever result came later, ignore it
                }
            },
        };
        //ajax request
        $.ajax(config);
    });

    function successFN(results) {
        console.log("results", results);
        var htmlForCountries = "";
        // creates the result div with paragraphs
        for (var j = 0; j < results.length; j++) {
            htmlForCountries += "<p class='country'>" + results[j] + "</p>";
        }
        resultsDiv.html(htmlForCountries);
        //checks if there are no results (like numbers) AND the field is empty
        if (results.length === 0 && searchField.val().length != 0) {
            resultsDiv.html("<p class='noResults'>No results found...</p>"); //creates a unique <p> to avoid mess-up
        }
    }

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

    reset.click(function () {
        searchField.val($("").text()); //cleans the searc text field
        successFN([]); //resets the result array coming from the API
    });

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
                //only selects highlighted result
                if (currHL.length !== 0) {
                    searchField.val($(".highlight").text());
                    resultsDiv.hide(); //hides the other results
                }
                break;
        }
    });
})();
