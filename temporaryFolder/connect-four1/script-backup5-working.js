(function () {
    console.log("sanity check for jqeury", $);
    //~~~~~~ variable declarations
    const totalNumOfCol = $("#board").children().length; //total number of columns
    const totalNumOfRow = $(".column").eq(0).children().length; //total number of rows
    var currentPlayer = "player1";
    var allColumns = $(".column"); //grab all columns
    var modal = $(".winnerModal");
    var countTurns = 0; //counts the total turns to be checked for TIED
    var scores = [["player1"], ["player2"]];
    console.log("scores", scores);

    //~~~~~~ alternates turns
    function switchPlayer() {
        currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
    }

    //~~~~~~ actiaves game
    gameFn();

    //~~~~~~ main game function
    function gameFn() {
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
                    countTurns++; //to be later used for TIED
                    break;
                }
            }
            //~~~~~~ checking TIED situation, when all total number of slots are "full"
            if (countTurns === totalNumOfRow * totalNumOfCol) modalFn("tied"); //passing "tied" string to the modal

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

            var slotsInRow = $(".row" + i);
            if (
                checkForVictory(slotsInRow) ||
                checkForVictory(slotsInCol) ||
                checkForVictory(checkDiags("-")) ||
                checkForVictory(checkDiags("+"))
            )
                modalFn(currentPlayer);
            switchPlayer();
        });
    }

    //~~~~~~ win checking function
    function checkForVictory(slots) {
        var count = 0;
        var wins = 1;
        // loop over all slots and check if there 4 "currentPlayer" in a row
        for (var i = 0; i < slots.length; i++) {
            var slot = $(slots[i]);
            if (slot.hasClass(currentPlayer)) {
                //increment count
                count++;
                // slot.css({
                //     "background-color": "yellow",
                // });

                if (count === 4) {
                    if (currentPlayer === scores[0][0]) {
                        scores[0].push(wins++);
                    } else {
                        scores[1].push(wins++);
                    }
                    console.log("scores", scores);

                    return true; //we want the function to return truthy
                    // to the "if statement" that runs the "winner modal"
                }
            }
            //if not, then reset it back to 0
            else count = 0;
        }
    }

    //~~~~~~ end game result function
    function modalFn(winner) {
        $(".column").off(); //immediately stops the event listener for the game!
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
        //setting up restart button
        $(".modalButton").click(function () {
            modal.addClass("modalOff"); //allowing off-animation
            //waiting for animation to end before reloading
            $(document).on("transitionend", function () {
                location.reload();
            });
        });
    }

    //~~~~~~ mouse event handlers for animation
    allColumns.mouseenter(function (e) {
        $(e.currentTarget).children().children().addClass("selColumn");
    });

    allColumns.mouseleave(function (e) {
        $(e.currentTarget).children().children().removeClass("selColumn");
    });
})();
