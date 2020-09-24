console.log("linked jquery?", $);
var jqboard = $("#board"); //new jQuery
// var board = document.getElementById("board");
// var animals = document.getElementsByClassName("animal");
var jqAnimals = $(".animal");
var animalsLeft = [0, 0, 0, 0];

function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

//turn this into a jQuery eventhandler
/*
board.addEventListener("click", function () {
    for (var i = 0; i < animalsLeft.length; i++) {
        animalsLeft[i] += getRandomNumber(21);
        animals[i].style.left = animalsLeft[i] + "px";
    }
});
*/

jqboard.on("click", function () {
    for (var i = 0; i < animalsLeft.length; i++) {
        animalsLeft[i] += getRandomNumber(200);
        jqAnimals
            .eq(i)
            .css({
                left: animalsLeft[i] + "px",
            })
            .fadeOut(600)
            .fadeIn(600);
        // animals[i].style.left = animalsLeft[i] + "px";
        // jqAnimals.eq(i).hide(200).show(100);
        // jqAnimals.eq(i).fadeOut(600).FadeIn(600);
    }
});

// document.getElementById("boost-button").addEventListener("click", function (e) {
//     console.log("clicked on boost button!");
//     e.stopPropagation();

//     animalsLeft[0] += 20;
//     animals[0].style.left = animalsLeft[0] + "px";
// });

$("#boost-button").on("click", function boostTurtle(e) {
    e.stopPropagation();
    $("#boost-button").html(
        '<div class="boost-button" id="boost-button"><span id="boost">🐢</span> ️USED!</div>'
    );
    animalsLeft[0] += 200;
    jqAnimals.eq(0).css({
        left: animalsLeft[0] + "px",
    });
    //turn off eventHandler for turtle boost
    $(e.taget).off("click", boostTurtle);
});

$(document).on("keydown", function (evt) {
    if (evt.keyCode === 82) {
        var r = getRandomNumber(256);
        var g = getRandomNumber(256);
        var b = getRandomNumber(256);
        var randomColor = "rgb(" + r + "," + g + "," + b + ")";
        console.log(randomColor);
        // board.style.backgroundColor = randomColor;
        jqboard.css({
            backgroundColor: randomColor,
        });
    }
});

document.addEventListener("keydown", function (evt) {});
