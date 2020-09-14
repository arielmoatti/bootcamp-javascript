var headlineBox = document.getElementById("headlines");
// console.log("headlineBox", headlineBox);
var left = headlineBox.offsetLeft;
// console.log("left", left);
var links = document.getElementsByTagName("a");
// console.log("links", links);

function moveTickers() {
    left = left - 1.5;
    // left--;
    headlineBox.style.left = left + "px";
    if (left <= -links[0].offsetWidth) {
        left += links[0].offsetWidth;
        headlineBox.appendChild(links[0]);
    }
    requestAnimationFrame(moveTickers);
}
moveTickers();

/*
var linksMouse = Array.from(links);
linksMouse.forEach(function (anchors) {
    anchors.addEventListener("mouseover", function () {
        linksMouse.style.color = "blue";
    });
});
/*

body.addEventListener("mouseover", (event) => {
    if (event.target !== links) {
        return;
    }
    body.style.color = "blue";
});
*/
/*
function mouseOver() {
    for (i = 0; i < links.length; i++) {
        links[i].style.color = "blue";
        
        // cancelAnimationFrame(moveTickers);
    }
}
for (i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", mouseOver);
}
*/

/*
links[0].addEventListener("mouseout", mouseOut);
document.getElementsByTagName("a").addEventListener("mouseover", mouseOver);
document.getElementsByTagName("a").addEventListener("mouseout", mouseOut);

function mouseOut() {
    links[0].style.color = "yellow";
}
*/

/*
function lnkHoverFn() {
    var linksHov = document.getElementsByTagName("a");
    linksHov.onmouseover = function () {
        // var target = event.target;
        links.style.color = "blue";
        cancelAnimationFrame();
    };
*/

/*
linksHov.addEventListener("mouseenter", function (event) {
    event.target.style.color = "blue";
    cancelAnimationFrame();
});
}
*/
