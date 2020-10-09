(function () {
    var kitty = document.querySelectorAll(".kitty-container img"); //grab all images into an object
    var dots = document.getElementsByClassName("dot"); //grabs all the dots into an object
    var dotsContainer = document.querySelector(".dots"); //grabs the container of the dots for effects
    var cur = 0; // set counter for index
    var isAnimating; //will be boolean to detect trasition process
    var timer = setTimeout(moveKitty, 3000); //invoke function after ... sec. and stores the return in a var

    //----------- event listener to dots click
    for (var i = 0; i < dots.length; i++) {
        //loop through the dots to detect which dot was clicked
        dots[i].addEventListener("click", function (e) {
            // adds eL to the individual dot
            if (isAnimating) {
                //checks if transition is in progress
                return; //to ignore clicks while transitioning
            }
            for (var i = 0; i < dots.length; i++) {
                if (dots[i] == e.target) {
                    if (i == cur) {
                        return;
                    }
                    clearTimeout(timer);
                    moveKitty(i); //passed the index to the main function as argument
                }
            }
        });
    }

    //--------------------------sets cursor to not allow during  hover over
    // the same same image
    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("mouseover", function (e) {
            // if (isAnimating) {
            //     return;
            // } else {
            for (var i = 0; i < dots.length; i++) {
                if (dots[i] == e.target) {
                    if (i == cur) {
                        dots[cur].classList.add("cursorNot");
                        return;
                    }
                    // else {
                    //     dots[cur].classList.remove("cursorNot");
                    // }
                }
            }
            // }
        });
    }

    //--------------- resets the cursor state upon leaving the hover
    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("mouseleave", function (e) {
            // if (isAnimating) {
            //     return;
            // } else {
            for (var i = 0; i < dots.length; i++) {
                if (dots[i] == e.target) {
                    if (i == cur) {
                        dots[cur].classList.remove("cursorNot");
                        return;
                    }
                }
            }
            // }
        });
    }
    //-----------------main carousel function
    function moveKitty(arg) {
        // console.log("arg initial status", arg);
        isAnimating = true;

        // console.log("index value was: ", cur);
        kitty[cur].classList.remove("onscreen");
        kitty[cur].classList.add("offscreen-left");
        dots[cur].classList.remove("on");
        //only runs when
        if (typeof arg != "undefined") {
            cur = arg;
        } else {
            // remove current item from screen and push left
            cur++; //incremate for the coming image
            //check when reached the max number of images
            if (cur === kitty.length) {
                cur = 0; //reset index back to 0
            }
        }
        // pull the next item into the screen
        kitty[cur].classList.add("onscreen"); //notice cur is already 1 higher
    }

    //------------------------- dim and not allow interaction with navigation
    //dots during transition
    document.addEventListener("transitionstart", function () {
        dotsContainer.classList.remove("cursorNot");
        dots[cur].classList.remove("on");
        dotsContainer.classList.add("dotOff");
        dotsContainer.classList.add("cursorNot");
    });

    //--------------------- puts the current item to the queue
    document.addEventListener("transitionend", function (e) {
        //sets isAnimating to false, as it is the transition's end
        isAnimating = false;
        dots[cur].classList.add("on");
        dotsContainer.classList.remove("dotOff");
        dotsContainer.classList.remove("cursorNot");
        //cycle through indexes to reset cursor state
        for (var i = 0; i < dots.length; i++) {
            dots[i].classList.remove("cursorNot");
        }
        //check only transition for this class
        if (e.target.classList.contains("offscreen-left")) {
            // console.log("it is now transitionend of offscreen-left");
            e.target.classList.remove("offscreen-left"); //removes class and reset status
            timer = setTimeout(moveKitty, 3000); //run again, infinite...
        }
    });

    //
})();
