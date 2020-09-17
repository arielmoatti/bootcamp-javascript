(function () {
    var kitty = document.querySelectorAll(".kitty-container img"); //grab all images into array
    var idx = 0; //reset counter for index

    setTimeout(moveKitty, 1500); //invoke function after 3 sec.

    function moveKitty() {
        console.log("index value is: ", idx);
        // remove current item from screen and push left
        kitty[idx].classList.remove("onscreen");
        kitty[idx].classList.add("offscreen-left");
        idx++; //incremate for the coming image
        //check when reached the max number of images
        if (idx === kitty.length) {
            idx = 0; //reset index back to 0
        }
        // pull the next item into the screen
        kitty[idx].classList.add("onscreen"); //idx is already 1 higher
    }
    // puts the current item to the queue
    document.addEventListener("transitionend", function (e) {
        //check only transition for this class
        if (e.target.classList.value === "offscreen-left") {
            console.log("it is now transitionend of offscreen-left");
            e.target.classList.remove("offscreen-left"); //removes class and reset status
        } else {
            return; //ignores
        }
        setTimeout(moveKitty, 1500); //run again, infinite...
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
