console.log("is jquery linked?", $);
// var headlineBox = document.getElementById("headlines");
var headlineBox = $("#headlines"); //-----JQUERY
// var left = headlineBox.offsetLeft;
var left = headlineBox.offset().left; //-----JQUERY

// var links = document.getElementsByTagName("a"); //old vanilla

//outerWidth() instead of offset --- jquery
//css with eq().css({})....

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

    // animReq++;
    // console.log("animReq", animReq);
}
moveTickers();

//-----JQUERY
$("a").on("mouseenter", function (e) {
    cancelAnimationFrame(animReq);
    $(e.target).addClass("hovering");
    /*$(e.target).css({
        color: "blue",
        "text-decoration": "underline",
    }); */
});

$("a").on("mouseleave", function () {
    requestAnimationFrame(moveTickers);
    // cancelAnimationFrame(animReq);
    $(".hovering").removeClass("hovering");
    // style = "window.getComputedStyle(links[0])";
});

// function mouseOver(event) {

// event.target.style.color = "blue";
// event.target.style.textDecoration = "underline";
// }

// function mouseOut(event) {
//     event.target.style = "window.getComputedStyle(links[0])";
//     moveTickers();
// }

// for (var i = 0; i < links.length; i++) {
// links[i].addEventListener("mouseenter", mouseOver);
// links(i).mouseenter(mouseOver);

// links[i].addEventListener("mouseleave", mouseOut);
