// var headlineBox = document.getElementById("headlines");
console.log("is jquery linked?", $);
var headlineBox = $("#headlines"); //-----JQUERY
// var left = headlineBox.offsetLeft;
var left = headlineBox.offset().left; //-----JQUERY

//don't use this below. Find the places and traverse them
// var links = document.getElementsByTagName("a");
var links = $("a");
// var links = $.makeArray($("a"));
// console.log("links", links);

//outerWidth() instead of offset
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
    if (left <= -links(0).outerWidth()) {
        left += links(0).outerWidth();
        // headlineBox.appendChild(links[0]);
        headlineBox.append(links(0)); //-----JQUERY
    }
    animReq = requestAnimationFrame(moveTickers);

    // animReq++;
    // console.log("animReq", animReq);
}
moveTickers();

//-----JQUERY
function mouseOver(event) {
    event.target.css({
        color: "blue",
        "text-decoration": "underline",
    });

    // event.target.style.color = "blue";
    // event.target.style.textDecoration = "underline";
    cancelAnimationFrame(animReq);
}

function mouseOut(event) {
    event.target.style = "window.getComputedStyle(links[0])";
    moveTickers();
}

for (var i = 0; i < links.length; i++) {
    // links[i].addEventListener("mouseenter", mouseOver);
    //-----JQUERY
    links(i).mouseenter(mouseOver);

    // links[i].addEventListener("mouseleave", mouseOut);
}
