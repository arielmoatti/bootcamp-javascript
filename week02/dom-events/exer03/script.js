//3. exercise
var colorBox = document.querySelector(".elm");

function changeClr(event) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
}

colorBox.addEventListener("mousedown", changeClr);
colorBox.addEventListener("mouseup", changeClr);
