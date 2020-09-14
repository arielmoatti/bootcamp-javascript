var headlineBox = document.getElementById("headlines");
// console.log("headlineBox", headlineBox);
var left = headlineBox.offsetLeft;
// console.log("left", left);
var links = document.getElementsByTagName("a");
// console.log("links", links);

function moveTickers() {
    left--;
    headlineBox.style.left = left + "px";
    if (left <= -links[0].offsetWidth) {
        left += links[0].offsetWidth;
        headlineBox.appendChild(links[0]);
    }

    requestAnimationFrame(moveTickers);
}

moveTickers();
