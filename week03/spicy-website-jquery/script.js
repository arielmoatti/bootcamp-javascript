(function () {
    var overlay = document.getElementsByClassName("overlay")[0];
    var sideNav = document.getElementsByClassName("side-nav")[0];
    var xBtn = document.getElementsByClassName("xBtn")[0];
    var hamNav = document.getElementById("menu");

    overlay.addEventListener("click", function () {
        sideNav.classList.remove("sideNavTrans");
        overlay.classList.remove("overlayOn");
    });

    xBtn.addEventListener("click", function () {
        sideNav.classList.remove("sideNavTrans");
        overlay.classList.remove("overlayOn");
    });

    hamNav.addEventListener("click", function () {
        sideNav.classList.add("sideNavTrans");
        overlay.classList.add("overlayOn");
    });
})();
