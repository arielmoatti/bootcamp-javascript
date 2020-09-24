var button = document.getElementById("first");
var pageBG = document.querySelector("body");
var input = document.querySelector("input");
var newDiv = document.getElementsByClassName("new-div")[0];

button.addEventListener("click", function (event) {
    console.log("event", event);
    pageBG.style.backgroundColor = "blue";
    // console.log("it was clicked!");
});

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 80) {
        console.log("event", event);
        pageBG.style.backgroundColor = "red";
    }
});

input.addEventListener("input", function (event) {
    console.log("input is happening");
    input.style.color = "red";
    event.target.style.backgroundColor = "yellow";
});

newDiv.addEventListener("click", function (event) {
    event.target.style.backgroundColor = "green";
});
