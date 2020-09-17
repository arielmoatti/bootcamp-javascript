(function () {
    var kitty = document.querySelectorAll(".kitty-container img");
    var current = 0;
    var next = 1;

    function moveKitty() {
        //checking the counter value each time the function gets invoked
        console.log("initial current", current);
        console.log("initial next", next);

        // remove item from screen and push left
        kitty[current].classList.remove("onscreen");
        kitty[current].classList.add("offscreen-left");

        // pull the next item to the screen
        kitty[next].classList.add("onscreen");

        // puts the current item to the queue
        document.addEventListener("transitionend", function (event) {
            if (event.target.classList.value === "offscreen-left") {
                console.log("it is now transitioned of offscreen-left");
                kitty[current].classList.remove("offscreen-left");
            } else {
                return;
            }
        });
        // incremation

        //check if cycle has completed
        //can change from 3 to the array length
        // if (next < 3) {
        do {
            current++;
            next++;
            console.log("incremated current", current);
            console.log("incremated next", next);
            setTimeout(moveKitty, 3000);
        } while (next < kitty.length - 1);
        /*
        } else {
            current = 0;
            next = 1;
            setTimeout(moveKitty, 3000);
        }*/

        // moveKitty();
        //****remove offscreen-left only after it finished the transition
        //document.addEventListener("transitionend", function)
        /// but to target only the transition to "offscreen-left"
        //need to determine if the transition that ended was "onscreen" do nothing,
        //else - remove the class offscreen-left
        //--------check how to target specific transition for "transitionend"
        //console log the event object [function (event)]
    }
    //***********if kitty[] == 3 then invoke function
    setTimeout(moveKitty, 3000);

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
})();
