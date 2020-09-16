(function () {
    var overlay = document.getElementsByClassName("overlay");
    var sideNav = document.getElementsByClassName("side-nav");
    var xBtn = document.getElementsByClassName("xBtn");
    var hamNav = document.getElementById("menu");

    overlay[0].addEventListener("click", function () {
        sideNav[0].classList.remove("visibOn");
        overlay[0].classList.remove("visibOn");
    });

    xBtn[0].addEventListener("click", function () {
        sideNav[0].classList.remove("visibOn");
        overlay[0].classList.remove("visibOn");
    });

    hamNav.addEventListener("click", function () {
        sideNav[0].classList.add("visibOn");
        overlay[0].classList.add("visibOn");
    });
})();
