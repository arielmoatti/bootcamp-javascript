(function () {
    var resultsDiv = $(".results");
    $.ajax({
        url: "/data.json",
        success: function (response) {
            console.log("response", response);
            var myHtml = "";
            for (var i = 0; i < response.length; i++) {
                console.log("response[i]", response[i]);
                myHtml += "<p>" + response[i].animal + "</p>";
            }
            console.log("myHtml", myHtml);
            resultsDiv.html(myHtml);
        },
    });
    console.log("sanity", $);
})();

/*$.ajax({
    //configure request
    url: "https://pokeapi.co/api/v2/pokemon/charmander",
    //configure response
    success: function (response) {
        console.log("response", response);
        //
    },
});
*/
