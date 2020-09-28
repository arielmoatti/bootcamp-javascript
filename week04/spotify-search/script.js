(function () {
    //~~~~ global declarations
    var baseUrl = "https://spicedify.herokuapp.com/spotify";
    var nextUrl = "";

    //~~~~ search button click handler
    $("#searchBtn").click(function () {
        userInput = $("input").val();
        albumOrArtist = $("select").val();
        //calling the initial AJAX request
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
        //~~~~ main function
        function successFn(resData) {
            var response = resData.artists || resData.albums;
            //parsing the new search url from spotify to herokuapp
            nextUrl =
                response.next &&
                response.next.replace(
                    "api.spotify.com/v1/search",
                    "spicedify.herokuapp.com/spotify"
                );

            var resultHtml = "";
            var resultsMessage = $("#resultText");
            //main search for loop
            if (response.items.length > 0) {
                //so that we have at least 1 result
                for (var i = 0; i < response.items.length; i++) {
                    //check if the result has an image
                    if (response.items[i].images.length > 0) {
                        imgUrl = response.items[i].images[0].url;
                    } else {
                        imgUrl = //default image (placeholder) from spotify
                            "https://nohalfmeasures.com/wp-content/uploads/2013/03/spotify-icon-3.png";
                    }
                    var extLink = response.items[i].external_urls.spotify; //link to spotify artist page
                    //injecting results as new html elements
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
                    $(".imageCont").addClass("imageOn"); //needed hidden because of borders and shadows
                } //closes main for loop

                resultsMessage.html(
                    "<p class='text'>showing search results for:<p class='text searchText'>" +
                        userInput +
                        "</p>"
                );
            } else {
                resultsMessage.html(
                    "<p class='text'>no results found for: <span class='text searchText'>" +
                        userInput +
                        "</span>"
                );
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
})();
