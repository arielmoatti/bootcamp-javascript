(function () {
    var headlineBox = $("#headlines"); //grabbing the headline div

    $.ajax({
        url: "/data.json",
        success: function (response) {
            tickerFn(response);
        },
    });

    function tickerFn(aTags) {
        //building the headline html
        var myHtml = "";
        for (var i = 0; i < aTags.length; i++) {
            myHtml += `<a href="${aTags[i].url}" target="_blank">${aTags[i].enclosedTextContent}</a>`;
            /*
            myHtml +=
                "<a href=" +
                '"' +
                aTags[i].url +
                '">' +
                aTags[i].enclosedTextContent +
                "</a>";*/
        }
        headlineBox.html(myHtml);
        console.log("myHtml", myHtml);
        console.log("headlineBox", headlineBox);
        //declarations for left position and animationID
        var left = headlineBox.offset().left;
        var animReq;

        function moveTickers() {
            left = left - 2;
            // left--;
            // headlineBox.style.left = left + "px";
            headlineBox.css({
                //-----JQUERY
                left: left + "px", //-----JQUERY
            });
            if (left <= -$("a").eq(0).outerWidth()) {
                left += $("a").eq(0).outerWidth();
                // headlineBox.appendChild(links[0]);
                $("a").eq(0).appendTo(headlineBox); //-----JQUERY
            }
            animReq = requestAnimationFrame(moveTickers);
        }

        moveTickers();

        $("a").on("mouseenter", function (e) {
            cancelAnimationFrame(animReq);
            $(e.target).addClass("hovering");
        });

        $("a").on("mouseleave", function () {
            requestAnimationFrame(moveTickers);
            $(".hovering").removeClass("hovering");
        });
    }
})();
