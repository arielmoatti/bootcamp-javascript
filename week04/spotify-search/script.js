(function () {
    //~~~~ global declarations
    var baseUrl = "https://spicedify.herokuapp.com/spotify";
    var nextUrl = "";
    //~~~~ search button click handler
    $("#searchBtn").click(function () {
        userInput = $("input").val();
        albumOrArtist = $("select").val();
        //decalring the AJAX initial configuration object
        $.ajax({
            url: baseUrl,
            method: "GET",
            data: {
                query: userInput,
                type: albumOrArtist,
            },
            success: function (resBase) {
                successFn(resBase);
            },
        });
        function successFn(resData) {
            console.log("Complete responseData is", resData);
            var response = resData.artists || resData.albums;
            console.log("filtered response: artist or albums", response);
            //parsing the new search url from spotify to herokuapp
            nextUrl =
                response.next &&
                response.next.replace(
                    "api.spotify.com/v1/search",
                    "spicedify.herokuapp.com/spotify"
                );
            var resultHtml = "";
            if (response.items.length > 0) {
                //so we have at least 1 result
                for (var i = 0; i < response.items.length; i++) {
                    //check if the result has an image
                    if (response.items[i].images.length > 0) {
                        imgUrl = response.items[i].images[1].url; //check if better
                    } else {
                        imgUrl =
                            "https://nohalfmeasures.com/wp-content/uploads/2013/03/spotify-icon-3.png";
                    }
                    var extLink = response.items[i].external_urls.spotify;
                    resultHtml +=
                        "<a href='" +
                        extLink +
                        "'" +
                        " target='_blank'><div class='result'><p>" +
                        response.items[i].name +
                        "</p><div class='imageCont'><img src='" +
                        imgUrl +
                        "'></div></div></a>";
                    $("#results-container").html(resultHtml);
                    $(".imageCont").addClass("imageOn");
                } //closes main for loop
                //resultsParagraph.html("Your results for " + userInput + " are:");
            } else {
                // resultsParagraph.html("no results for: " + userInput);
                //             resultsContainer.html("");
            } //closes if statement
        } //closes success function
        $("#moreBtn").click(function () {
            // console.log("nextUrl", nextUrl);
            $.ajax({
                url: nextUrl,
                method: "GET",
                success: function (resNext) {
                    successFn(resNext);
                },
            });
        });
    }); //closes search click

    //~~~~ main success response function

    // console.log("nextUrl", nextUrl);

    //html results injection

    //
    //~~~~ next button event handler
    //
    //
    //
    //
    //
    //
    //
    //
})();
