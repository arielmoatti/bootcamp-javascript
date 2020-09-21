(function () {
    var slider = $(".bar");
    var upperImg = $(".upper");
    var imgBox = $(".box");
    var reset = $("button");
    var mouseDown;

    //---reset button functionality
    reset.click(function () {
        upperImg.eq(0).css({
            width: 448,
        });
        slider.css({
            left: "50%",
        });
    });
    slider.mousedown(function (e) {
        mouseDown = true;
        slider.css({
            cursor: "col-resize",
        });
        // console.log("mouseDown", mouseDown);
    });

    //----mouse up turns of listener (false) and change cursor
    $(document).mouseup(function (e) {
        mouseDown = false;
        slider.css({
            cursor: "pointer",
        });
        // console.log("mouseDown", mouseDown);
    });

    //----main slider function
    imgBox.mousemove(function (e) {
        if (mouseDown === true) {
            var x = e.clientX - imgBox.offset().left;
            // var x = e.clientX - offsetBar.left;
            if (x < 893) {
                upperImg.eq(0).css({
                    width: x,
                });
                slider.css({
                    left: x,
                    cursor: "col-resize",
                });
                console.log("leftX", x);
            } else {
                return;
            }
        } else {
            return;
        }
    });

    //----change mouse cursor to pointer when hovering the slider
    slider.mouseenter(function (e) {
        slider.css({
            cursor: "pointer",
        });
    });
})();
