(function () {
    var overlay = document.getElementsByClassName("overlay")[0];
    var sideNav = document.getElementsByClassName("side-nav")[0];
    var navxBtn = document.getElementsByClassName("xBtn")[0];
    var hamNav = document.getElementById("menu");
    var modal = $(".modal");
    var modalx = $(".modalX");
    var modalStatus;

    navxBtn.addEventListener("click", function () {
        sideNav.classList.remove("sideNavTrans");
        overlay.classList.remove("overlayOn");
    });

    hamNav.addEventListener("click", function () {
        sideNav.classList.add("sideNavTrans");
        overlay.classList.add("overlayOn");
        overlayFn();
    });

    modalx.on("click", function () {
        modalStatus = false;
        console.log("modalStatus", modalStatus);
        overlay.classList.remove("overlayOn");
        modal.css({
            visibility: "hidden",
            opacity: 0,
            transition: "opacity 1000ms",
        });
    });

    setTimeout(modalFn, 1000);
    function modalFn() {
        modalStatus = true;
        console.log("modalStatus", modalStatus);

        overlay.classList.add("overlayOn");
        modal.css({
            visibility: "visible",
            opacity: 1,
            transition: "opacity 1000ms",
        });
        overlayFn();
    }

    function overlayFn() {
        overlay.addEventListener("click", function () {
            if (modalStatus) {
            } else {
                sideNav.classList.remove("sideNavTrans");
                overlay.classList.remove("overlayOn");
            }
        });
    }
})();
