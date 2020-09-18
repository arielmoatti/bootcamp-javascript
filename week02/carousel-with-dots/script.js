(function () {
    var kitty = document.querySelectorAll(".kitty-container img"); //grab all images into an object
    var dots = document.getElementsByClassName("dot"); //grabs all the dots into an object
    // console.log("dots", dots);
    var cur = 0; // set counter for index
    var timer = setTimeout(moveKitty(), 5000); //invoke function after 3 sec. and stores the return in a var

    //----------- event listener to dots click
    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function (e) {
            clearTimeout(timer);
            for (var i = 0; i < dots.length; i++) {
                if (dots[i] == e.target) {
                    setTimeout(moveKitty(i), 5000);
                    console.log("index after click=", i);
                    break;
                }
            }
        });
    }

    function moveKitty(arg) {
        console.log("index value was: ", cur);
        //only runs when
        if (typeof arg != "undefined") {
            arg = cur;
        } else {
            // remove current item from screen and push left
            kitty[cur].classList.remove("onscreen");
            dots[cur].classList.remove("on");
            kitty[cur].classList.add("offscreen-left");
            cur++; //incremate for the coming image
            //check when reached the max number of images
            if (cur === kitty.length) {
                cur = 0; //reset index back to 0
            }
            // pull the next item into the screen
            kitty[cur].classList.add("onscreen"); //cur is already 1 higher
            dots[cur].classList.add("on");
        }
    }

    // puts the current item to the queue
    document.addEventListener("transitionend", function (e) {
        //check only transition for this class
        if (e.target.classList.contains("offscreen-left")) {
            console.log("it is now transitionend of offscreen-left");
            e.target.classList.remove("offscreen-left"); //removes class and reset status
        } else {
            return; //ignores
        }
        setTimeout(moveKitty(), 5000); //run again, infinite...
    });
})();

//check if cycle has completed
//can change from 3 to the array length

// moveKitty();
//****remove offscreen-left only after it finished the transition
//document.addEventListener("transitionend", function)
/// but to target only the transition to "offscreen-left"
//need to determine if the transition that ended was "onscreen" do nothing,
//else - remove the class offscreen-left
//--------check how to target specific transition for "transitionend"
//console log the event object [function (event)]

//***********if kitty[] == 3 then invoke function
