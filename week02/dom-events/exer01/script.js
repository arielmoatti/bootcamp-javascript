//1. exercise
var movingBox = document.querySelector(".elm");

function moveFn(event) {
    event.target.style.left = event.pageX + "px";
    event.target.style.top = event.pageY + "px";
}

movingBox.addEventListener("mousemove", moveFn);
