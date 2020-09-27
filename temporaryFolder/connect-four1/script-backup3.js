(function () {
    //variable declarations
    const totalNumOfCol = $("#board").children().length; //total number of columns
    const totalNumOfRow = $(".column").eq(0).children().length; //total number of rows
    var currentPlayer = "player1";
    var allColumns = $(".column");
    var allSlots = $(".slot");
    var modal = $(".winnerModal");
    var fullCol = 0; //counter for tied posibility
    /*
    --older method to check for diags
    var checkersPlayer1 = [];
    var checkersPlayer2 = [];
    */
    /* --older method to find a tie
    var fullColumn = []; //to check for tied
    var tieArr = [1, 1, 1, 1, 1, 1, 1]; //result when tied, to compare
    */

    //alternate turns
    function switchPlayer() {
        currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
    }

    //actiave game
    gameFn();

    allColumns.mouseenter(function (e) {
        $(e.currentTarget).children().children().addClass("selColumn");
    });

    allColumns.mouseleave(function (e) {
        $(e.currentTarget).children().children().removeClass("selColumn");
    });

    //main game function
    function gameFn() {
        allColumns.click(function (e) {
            $(e.currentTarget).children().children().removeClass("selColumn");
            var col = $(e.currentTarget);
            var slotsInCol = col.children();
            var columnIdx = col.index();
            // console.log("columnIdx", columnIdx);
            // console.log("clicked on column");
            // console.log("slotsInCol", slotsInCol);

            for (var i = slotsInCol.length - 1; i >= 0; i--) {
                if (
                    !slotsInCol.eq(i).hasClass("player1") &&
                    !slotsInCol.eq(i).hasClass("player2")
                ) {
                    slotsInCol.eq(i).addClass(currentPlayer);
                    break;
                }
            }
            /*
            //--older version
            //--creating array for full culomns, to later compare to TIE
            for (var j = 0; j < allColumns.length; j++) {
                if (i === 0 && j === allColumns.length - 1) {
                    fullColumn.push(1);
                }
            }
            */
            //checks if column is full and increments the counter
            if (i === 0) {
                fullCol++;
            }

            // checking TIED situation
            if (
                fullCol === totalNumOfCol
                //older version:
                //---checinkg column array equals tie array
                //fullColumn.length === tieArr.length &&
                //fullColumn.every((val, index) => val === tieArr[index])
            ) {
                $(".column").off();
                modalFn("tied"); //passing tied string to the modal
            }

            // this checks if col is full...and exits the function
            if (i < 0) {
                return;
            }

            // console.log("col", col.index(), "row", i);
            var slotsInRow = $(".row" + i);
            // console.log("slotsInRow", slotsInRow);
            if (checkForVictory(slotsInCol)) {
                //check columns
                console.log("column victory for", currentPlayer);
                $(".column").off();
                modalFn(currentPlayer);
            } else if (checkForVictory(slotsInRow)) {
                //check rows
                console.log("row victory for", currentPlayer);
                $(".column").off();
                modalFn(currentPlayer);
                /*
            } else if (checkDiagBLTR(columnIdx, i)) {
                //check diag
                console.log("diag victory for", currentPlayer);
                $(".column").off();
                modalFn(currentPlayer);
                */
            } else if (checkDiags()) {
                console.log("diag victory for", currentPlayer);
            }

            switchPlayer();
        });
    }

    /* ------------------------incomplete
    function checkDiags() {
        for (
            var firstRow = 0;
            firstRow < totalNumOfRow.length - 4;
            firstRow++
        ) {
            var countDiag = 0;
            var checkRow, CheckCol;
            for (
                checkCol = 0, checkRow = firstRow;
                checkCol < totalNumOfCol && checkRow < totalNumOfRow;
                CheckCol++, checkRow++
            ) {
                if (allSlots.hasClass(currentPlayer)) {
                }
                countDiag++;
            }
        }
    }
    */

    function checkDiags() {
        //for BLTR or / diagonal
        var count = 0;
        console.log("column is", allColumns.index());
        for (var i = 0; i < allSlots.length; i++) {
            // console.log("i", i);
            if (
                allSlots.eq(i).hasClass(currentPlayer) &&
                allColumns.index() != allColumns.next().index() &&
                allSlots.eq(i + 5).hasClass(currentPlayer) &&
                allColumns.index() != allColumns.next().index() &&
                allSlots.eq(i + 10).hasClass(currentPlayer) &&
                allColumns.index() != allColumns.next().index() &&
                allSlots.eq(i + 15).hasClass(currentPlayer) &&
                allColumns.index() != allColumns.next().index()
            ) {
                console.log("Diag winner is", currentPlayer);
            }
        }
    }

    /* -----------incomplete
    function checkDiagBLTR(chkCol, chkRow) {
        //need to build two functions: checkDiagBLTR, checkDiagTLBR
        // console.log("chkCol", chkCol);
        // console.log("chkRow", chkRow);
        // var winArr = [5, 10, 15, 20];
        var locationArr = [chkCol, chkRow, currentPlayer];
        // console.log("locationArr", locationArr);

        if (currentPlayer === "player1") {
            checkersPlayer1.push([locationArr[0], locationArr[1]]);
        } else {
            checkersPlayer2.push([locationArr[0], locationArr[1]]);
        }
        // console.log("checkersPlayer1", checkersPlayer1);
        // console.log("checkersPlayer2", checkersPlayer2);

        /*    
        var count = 0;
        for (var i = 0; i < locationArr.length; i++) {
            // var slotRow = $(chkRow[i]);
            var position = "";
            if (position.hasClass(currentPlayer)) {
                count++;
                if (count === 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }*/

    function checkForVictory(slots) {
        // console.log("about to check", slots);
        // loop over some slots and check if there a 4 in a row

        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            var slot = $(slots[i]);
            if (slot.hasClass(currentPlayer)) {
                //
                //increment count
                count++;
                // slot.css({
                //     "background-color": "yellow",
                // });
                // console.log("count", count);
                if (count === 4) {
                    return true; //we want the function to return truthy, for the if above
                }
            } else {
                //if not, then reset it back to 0
                count = 0;
                // console.log("count after resetting", count);
            }
        }
    }

    function modalFn(winner) {
        var myHtml = "";
        //if passed string "tied" from main clickEvent
        if (winner === "tied") {
            myHtml = "<p>TIED!<br>gameboard is full</p>";
            myHtml += "<button class=modalButton>start a new round</button>";
        } else {
            var winText;
            if (winner === "player1") {
                winText = "red player";
            } else {
                winText = "orange player";
            }
            // myHtml = "<p>the winner is the" + "<br>" + winText + "!</p>";
            myHtml = "<p>the " + winText + "<br>" + "wins this round!</p>";
            myHtml += "<button class=modalButton>another round!</button>";
        }
        //creating the modal
        modal.html(myHtml);
        modal.addClass("modalOn");
        //setting up restart buton
        $(".modalButton").click(function () {
            modal.addClass("modalOff"); //allowing off-animation
            //waiting for animation to end before reloading
            $(document).on("transitionend", function () {
                location.reload();
            });
            /*setTimeout(function () {
                location.reload();
            }, 1000);*/
            // console.log("clicked");
            /*
            for (var i = 0; i < $(".column").length; i++) {
                $(".column").children(i).removeClass("player1 player2");
                modal.removeClass("modalOn");
            }*/
            // gameFn();
        });
    }
})();
