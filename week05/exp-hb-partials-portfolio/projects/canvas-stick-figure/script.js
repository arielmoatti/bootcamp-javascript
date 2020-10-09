(function () {
    // grab our canvas and render the context
    var stickF = document.getElementById("canvas");
    var ctx = stickF.getContext("2d"); //sets the context to 2d
    var canAnim = document.getElementById("canvasAnim");
    var ctx2 = canAnim.getContext("2d"); //sets the context to 2d
    var reset = document.getElementById("resetBtn");
    console.log("reset", reset);

    var x = 200;
    var y = 350;
    var initX = x;
    var initY = y;

    function drawStickfigure() {
        // ---------HEAD----------
        ctx.beginPath();
        ctx.strokeStyle = "darkgreen";
        ctx.lineWidth = 3;
        ctx.arc(100, 50, 30, 0, 2 * Math.PI);
        ctx.stroke();

        // ---------BODY----------
        ctx.beginPath();
        ctx.moveTo(100, 80);
        ctx.lineTo(100, 180);
        ctx.stroke();

        // ---------UPPER LIMBS----------
        ctx.beginPath();
        ctx.moveTo(160, 50); //up right
        ctx.lineTo(100, 100); //down to body
        ctx.lineTo(40, 50); //up left
        ctx.stroke();

        // ---------LOWER LIMBS----------
        ctx.beginPath();
        ctx.moveTo(160, 250); //down right
        ctx.lineTo(100, 180); //up to body
        ctx.lineTo(40, 250); // down to left
        ctx.stroke();
    }

    drawStickfigure(); //executes the stick figure

    ctx2.drawImage(stickF, x, y); //set initial position based on var x and y

    function arrowKeys(event) {
        switch (event.key) {
            case "ArrowUp":
                if (y > -20) {
                    //as long as it has not reach the edge
                    ctx2.clearRect(0, 0, 800, 800);
                    y = y - 10;
                    ctx2.drawImage(stickF, x, y);
                    console.log("x=", x, "y=", y);
                    break;
                } else {
                    /// reach the edge - break
                    break;
                }
            // console.log("up arrow!");
            case "ArrowDown":
                if (y < 350) {
                    ctx2.clearRect(0, 0, 800, 800);
                    y = y + 10;
                    ctx2.drawImage(stickF, x, y);
                    console.log("x=", x, "y=", y);
                    break;
                } else {
                    break;
                }
            case "ArrowLeft":
                if (x > -40) {
                    ctx2.clearRect(0, 0, 800, 800);
                    x = x - 10;
                    ctx2.drawImage(stickF, x, y);
                    console.log("x=", x, "y=", y);
                    break;
                } else {
                    break;
                }

            case "ArrowRight":
                if (x < 440) {
                    ctx2.clearRect(0, 0, 800, 800);
                    x = x + 10;
                    ctx2.drawImage(stickF, x, y);
                    console.log("x=", x, "y=", y);
                    break;
                } else {
                    break;
                }
        }
    }

    document.body.addEventListener("keydown", arrowKeys);
    reset.addEventListener("click", function () {
        ctx2.clearRect(0, 0, 800, 800);
        x = initX;
        y = initY;
        ctx2.drawImage(stickF, x, y);
    });
})();
