var headlineBox = document.getElementById("headlines");
var left = headlineBox.offsetLeft;
var links = document.getElementsByTagName("a");
var animReq = requestAnimationFrame(moveTickers);

function moveTickers() {
    left = left - 1.5;
    // left--;
    headlineBox.style.left = left + "px";
    if (left <= -links[0].offsetWidth) {
        left += links[0].offsetWidth;
        headlineBox.appendChild(links[0]);
    }
    requestAnimationFrame(moveTickers);

    animReq++;
    console.log("animReq", animReq);
}
moveTickers();

function mouseOver(event) {
    event.target.style.color = "blue";
    event.target.style.textDecoration = "underline";
    cancelAnimationFrame(animReq);
}

function mouseOut(event) {
    event.target.style = "window.getComputedStyle(links[0])";
    moveTickers();
}

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", mouseOver);
    links[i].addEventListener("mouseleave", mouseOut);
}
