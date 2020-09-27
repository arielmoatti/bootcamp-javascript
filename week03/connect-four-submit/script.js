(function () {
    //o~o~o~o~o~o~ global variable declarations
    var allColumns = $(".column"); //grab all columns
    const totalNumOfCol = allColumns.length; //total number of columns
    const totalNumOfRow = $(".column").eq(0).children().length; //total number of rows
    var currentPlayer = "player2";
    var modal = $(".winnerModal"); //grabs the modal popup
    var scores = {
        player1: 0,
        player2: 0,
    };
    //~~~~~~ invoking main function with page load
    switchPlayer();
    gameFn();

    //o~o~o~o~o~o~ main game function
    function gameFn() {
        var countTurns = 0; //counts the total turns to be checked for TIED
        updateScores(); //starts with 0:0 and updates every game run
        //~~~~~~ mouse event handlers for animation

        allColumns.mousemove(function (e) {
            $(".checker").css({
                left:
                    e.clientX -
                    $(e.currentTarget).parent().offset().left -
                    35 +
                    "px",
            });
        });

        allColumns.mouseenter(function (e) {
            $(e.currentTarget).children().children().addClass("selColumn");
        });

        allColumns.mouseleave(function (e) {
            $(e.currentTarget).children().children().removeClass("selColumn");
        });
        //~~~~~~ main click event listesen
        allColumns.click(function (e) {
            $(e.currentTarget).children().children().removeClass("selColumn"); //cancels the effect
            var col = $(e.currentTarget);
            var slotsInCol = col.children();
            var columnIdx = col.index();

            for (var i = slotsInCol.length - 1; i >= 0; i--) {
                if (
                    !slotsInCol.eq(i).hasClass("player1") &&
                    !slotsInCol.eq(i).hasClass("player2")
                ) {
                    slotsInCol.eq(i).addClass(currentPlayer);
                    countTurns++; //to be soon used for TIED
                    break;
                }
            }
            //~~~~~~ checking TIED situation, when all total number of slots are "full"
            if (countTurns === totalNumOfRow * totalNumOfCol) modalFn("tied");
            //passing "tied" string to the modal

            //~~~~~~ checks if col is full... and exits the function
            if (i < 0) return;

            //~~~~~~ diagonal checking functions
            function checkDiags(operator) {
                var seqArr = []; //creating array of diagonals to be passed to checkForVictory
                var result = eval("columnIdx" + operator + "i"); //works for both + and -
                for (var ci = 0; ci < totalNumOfCol; ci++) {
                    //looping through all columns
                    var checkCol = allColumns.eq(ci).index(); //grabbing the index of each column
                    for (var ri = 0; ri < totalNumOfRow; ri++) {
                        //looping through all rows
                        if (eval("checkCol" + operator + "ri") === result) {
                            //comparing sum of row number and column index to the initial sum
                            //works for both + and -
                            seqArr.push(
                                allColumns.eq(checkCol).children().eq(ri)
                            ); //updates the diags array
                        }
                    }
                }
                return seqArr; //to be passed as argument to checkForVictory
            }
            //~~~~~~ passing to function for check winning / victory
            var slotsInRow = $(".row" + i);
            if (
                checkForVictory(slotsInRow) ||
                checkForVictory(slotsInCol) ||
                checkForVictory(checkDiags("-")) ||
                checkForVictory(checkDiags("+"))
            )
                modalFn(currentPlayer);
            switchPlayer(); // invokes the alternating players after each click
        });
    }

    //o~o~o~o~o~o~ win checking function
    function checkForVictory(slots) {
        var count = 0;

        // loop over all slots and check if there 4 "currentPlayer" in a row
        for (var i = 0; i < slots.length; i++) {
            var slot = $(slots[i]);
            if (slot.hasClass(currentPlayer)) {
                //increment count
                count++;
                if (count === 4) {
                    //---------could be a place to flag winning checkers
                    if (currentPlayer === "player1") {
                        scores.player1 += 1;
                    } else {
                        scores.player2 += 1;
                    }
                    return true; //we want the function to return truthy
                    // to the "if statement" that runs the "winner modal"
                }
            } else count = 0; //if not, then reset it back to 0
        }
    }

    //o~o~o~o~o~o~ end game result function
    function modalFn(winner) {
        $(".column").off(); //immediately stops the event listener for the game!
        modal.removeClass("modalOff");
        // modal.removeClass("modalOn");
        var myHtml = "";
        //if passed string "tied" from main clickEvent
        if (winner === "tied") {
            myHtml = "<p>TIED!<br>gameboard is full</p>";
            myHtml += "<button class=modalButton>let's start again!</button>";
        } else {
            //if passed "currentPlayer" as a winner
            var winText;
            if (winner === "player1") {
                winText = "red player";
            } else {
                winText = "orange player";
            }
            myHtml = "<p>the " + winText + "<br>" + "wins this round!</p>";
            myHtml += "<button class=modalButton>another round!</button>";
        }
        //creating the modal
        modal.html(myHtml);
        modal.addClass("modalOn");

        //~~~~~~ setting up action button
        $(".modalButton").click(function () {
            modal.addClass("modalOff"); //allowing off-animation
            var allSlots = $(".slot");
            for (var i = 0; i < allSlots.length; i++) {
                allSlots.eq(i).removeClass("player1 player2");
            }
            gameFn(); //re-run main function
        });
    }
    //~~~~~~ concatenate scores as html
    function updateScores() {
        var htmlPlayer1 = "0";
        var htmlPlayer2 = "0";
        var scoreBoxP1 = $(".playerOne");
        var scoreBoxP2 = $(".playerTwo");
        htmlPlayer1 = "<p class='scoreP'>" + scores.player1 + "</p>";
        htmlPlayer2 = "<p class='scoreP'>" + scores.player2 + "</p>";
        scoreBoxP1.html(htmlPlayer1);
        scoreBoxP2.html(htmlPlayer2);
    }

    //~~~~~~ alternates turns
    function switchPlayer() {
        // currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
        if (currentPlayer === "player2") {
            currentPlayer = "player1";
            $(".playerOne").addClass("whoseTurn");
            $(".playerTwo").removeClass("whoseTurn");
            $(".checker").addClass("player1");
            $(".checker").removeClass("player2");
        } else {
            currentPlayer = "player2";
            $(".playerTwo").addClass("whoseTurn");
            $(".playerOne").removeClass("whoseTurn");
            $(".checker").addClass("player2");
            $(".checker").removeClass("player1");
        }
    }
})();
