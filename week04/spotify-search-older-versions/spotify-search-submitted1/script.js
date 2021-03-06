(function () {
    //~~~~ global declarations
    var baseUrl = "https://spicedify.herokuapp.com/spotify";
    var nextUrl = "";
    var resultHtml = ""; //HAS TO BE OUT - SO AS NOT TO BE RESET for more results!
    var more = $("#moreBtn");
    more.hide(); //initially hides the "more results" button

    //~~~~ search button click handler
    $("#searchBtn").click(function () {
        resultHtml = ""; //resets the html on every new search!
        searchFn();
    }); //closes search click

    $("input").keypress(function (e) {
        if (e.keyCode == 13) searchFn();
    });

    function searchFn() {
        var userInput = $("input").val();
        var albumOrArtist = $("select").val();
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
            console.log("nextUrl", nextUrl);

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
                //checking if there are more results
                if (nextUrl) {
                    more.show();
                    more.click(function () {
                        //saving current scroll position
                        $(document).ready(function (e) {
                            $(document).scrollTop(
                                $(document).scrollTop() - 100
                            );
                        });
                        $.ajax({
                            url: nextUrl,
                            method: "GET",
                            success: function (resNext) {
                                successFn(resNext);
                            },
                        }); //closes Ajax request
                    }); //closes "more" button event listener
                } else {
                    more.hide();
                }
            } else {
                resultsMessage.html(
                    "<p class='text'>no results found for: <span class='text searchText'>" +
                        userInput +
                        "</span>"
                );
                $("#results-container").html(""); //clears all previus results
                more.hide();
            } //closes if statement
        } //closes success function
    } //closes "searchFn"
})();
