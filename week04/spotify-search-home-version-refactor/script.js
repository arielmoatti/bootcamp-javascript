(function () {
    // check
    //    url = nextUrl;
    /*
    
                    
    */

    //~~~~ global declarations
    var input = $("input");
    var select = $("select");
    var results = $("#results-container");
    var nextUrl = "";
    var more = $("#moreBtn");
    more.hide(); //initially hides the "more results" button
    var scrollLocation;

    //~~~~ storing the scroll position
    more.on("mouseenter", function () {
        scrollLocation = $(document).scrollTop();
    });

    //~~~~ results on enter key
    input.keypress(function (e) {
        if (e.keyCode == 13) searchFn(e);
    });

    //~~~~ search button click handler
    $(document).on("click", "#searchBtn", function (e) {
        searchFn(e);
    });

    //~~~~ main search function
    function searchFn(e) {
        $.ajax({
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                q: input.val(),
                type: select.val(),
            },
            success: function (response) {
                response = response.artists || response.albums;
                results.html(getResultHtml(response.items)); //creating new result html
                $(".imageCont").addClass("imageOn"); //needed hidden because of borders and shadows
                handleNextUrl(response.next);
                checkScrollPos(); //checks for infinite scroll
            }, //closing ajax success function
        }); // closing ajax request
    } //closing searchFn

    more.click(function () {
        moreRequestsFn();
    });

    function moreRequestsFn() {
        $.ajax({
            url: nextUrl,
            success: function (response) {
                response = response.artists || response.albums;
                results.append(getResultHtml(response.items)); //appending more results
                $(".imageCont").addClass("imageOn"); //needed hidden because of borders and shadows
                handleNextUrl(response.next);
                $(document).scrollTop(scrollLocation); //sets the scroll to the position before pagination
                checkScrollPos(); //checks for infinite scroll
            }, //closing ajax success function
        }); // closing ajax request
    } //closing moreRequestsFn

    //~~~~ main HTML injector
    function getResultHtml(items) {
        var resultHtml = "";
        var resultsMessage = $("#resultText");
        //main search for loop
        if (items.length > 0) {
            //so that we have at least 1 result
            for (var i = 0; i < items.length; i++) {
                //check if the result has an image
                if (items[i].images.length > 0) {
                    imgUrl = items[i].images[0].url;
                } else {
                    imgUrl = //default image (placeholder) from spotify
                        "https://nohalfmeasures.com/wp-content/uploads/2013/03/spotify-icon-3.png";
                }
                var extLink = items[i].external_urls.spotify; //link to spotify artist page

                //injecting results as new html elements
                resultHtml +=
                    "<a href='" +
                    extLink +
                    "'" +
                    " target='_blank'><div class='result'><p>" +
                    items[i].name +
                    "</p><div class='imageCont'><img src='" +
                    imgUrl +
                    "'></div></div></a>";
            } //closes main for loop
            // search result section on top
            resultsMessage.html(
                "<p class='text'>showing search results for:<p class='text searchText'>" +
                    input.val() +
                    "</p>"
            );
            return resultHtml;
        } else {
            resultsMessage.html(
                "<p class='text'>no results found for: <span class='text searchText'>" +
                    input.val() +
                    "</span>"
            );
            results.html(""); //clears all previus results
            more.hide();
        } //closes the if block
    } //closes the html function

    function handleNextUrl(url) {
        nextUrl =
            url &&
            url.replace(
                "api.spotify.com/v1/search",
                "spicedify.herokuapp.com/spotify"
            ); //to match original security issues

        if (!nextUrl) {
            more.hide();
        } else {
            more.show();
        }
    }

    //~~~~ infinite scroll function
    function checkScrollPos() {
        var hasScrolledToBottom;
        if (location.search.indexOf("scroll=infinite") > -1) {
            more.hide();
        }
        if (
            $(window).height() + $(document).scrollTop() >=
            $(document).height() - 100
        ) {
            hasScrolledToBottom = true;
        }
        if (hasScrolledToBottom) {
            if (nextUrl) {
                moreRequestsFn(); ///*******************************check in other version */
            }
        } else {
            setTimeout(checkScrollPos, 500);
        } //closes else
    } //closes checkScrollPos function

    //~~~~ sticky header
    // When the user scrolls the page, execute function
    window.onscroll = function () {
        headerScroll();
    };
    // Get the header
    var header = document.getElementById("top");
    // Get the offset position of the navbar
    var sticky = header.offsetTop;
    // Add the "sticky" class to the header when you reach its scroll position.
    //Remove "sticky" when you leave the scroll position
    function headerScroll() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
    //
})();
