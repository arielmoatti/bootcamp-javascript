(function () {
    // grab our canvas and render the context
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d"); //sets the context to 2d

    // begin our path
    ctx.beginPath();
    ctx.strokeStyle = "orange"; //styling the color
    ctx.lineWidth = 10; //no need to set "px"

    // moving it around
    ctx.moveTo(100, 100); //setting X and Y

    //map the drawing point (shape)
    ctx.lineTo(500, 100); //leaves an invisible trail
    ctx.lineTo(300, 400);
    ctx.lineTo(100, 100);
    ctx.closePath(); //makes sure the edges are closed

    //drawing the line
    ctx.stroke();

    //fill the shape with color
    ctx.fillStyle = "darkgreen";
    ctx.fill(); //will execute it

    ///drawing a circle
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(200, 200, 50, 0, 2 * Math.PI);
    //arc takes 5 arguments (and the 6th for clockwise)
    //arc (x, y, radius, startingAngle, endAngle)
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
    //
    //
    //drawImage method
    //two canvases - the second draws the first in different position
    //<canvas></canvas>
    //<canvas></canvas>
    //and then hide the 1st one in css
    //
})();
