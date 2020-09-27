(function () {
    //~~~~~~ variable declarations
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

    //~~~~~~ alternates turns
    function switchPlayer() {
        currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
    }

    //~~~~~~ actiaves game
    gameFn();

    //~~~~~~ mouse handlers for animation
    allColumns.mouseenter(function (e) {
        $(e.currentTarget).children().children().addClass("selColumn");
    });

    allColumns.mouseleave(function (e) {
        $(e.currentTarget).children().children().removeClass("selColumn");
    });

    //~~~~~~ main game function
    function gameFn() {
        allColumns.click(function (e) {
            $(e.currentTarget).children().children().removeClass("selColumn"); //cancels the effect
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
            //~~~~~~ checking TIED situation
            //checks if column is full and increments the counter
            if (i === 0) fullCol++;

            if (fullCol === totalNumOfCol) {
                $(".column").off();
                modalFn("tied"); //passing tied string to the modal
            }

            //~~~~~~ checks if col is full... and exits the function
            if (i < 0) return;

            //~~~~~~ diagonal checking functions
            // console.log("col", col.index(), "row", i);
            function checkDiagsBLTR() {
                var seqArr = []; //creating array of diagonals to be passed to checkForVictory
                var result = i + columnIdx; //stores the sum of current row and current column
                for (var ci = 0; ci < totalNumOfCol; ci++) {
                    //looping through all columns
                    var checkCol = allColumns.eq(ci).index(); //grabbing the index of each column
                    for (var ri = 0; ri < totalNumOfRow; ri++) {
                        //looping through all rows
                        if (ri + checkCol === result) {
                            //comparing sum of row number and column index to the initial sum
                            seqArr.push(
                                allColumns.eq(checkCol).children().eq(ri)
                            ); //updates the diags array
                        }
                    }
                }
                return seqArr; //to be passed to checkForVictory
            }

            function checkDiagsTLBR() {
                var seqArr = []; //creating array of diagonals to be passed to checkForVictory
                var result = columnIdx - i; //stores the difference between the current column and current row
                for (var ci = 0; ci < totalNumOfCol; ci++) {
                    //looping through all columns
                    var checkCol = allColumns.eq(ci).index(); //grabbing the index of each column
                    for (var ri = 0; ri < totalNumOfRow; ri++) {
                        //looping through all rows
                        if (checkCol - ri === result) {
                            //comparing column index and row to the initial difference
                            seqArr.push(
                                allColumns.eq(checkCol).children().eq(ri)
                            ); //updates the diags array
                        }
                    }
                }
                return seqArr; //to be passed to checkForVictory
            }

            var slotsInRow = $(".row" + i);
            if (checkForVictory(slotsInCol)) {
                modalFn(currentPlayer);
            } else if (checkForVictory(slotsInRow)) {
                modalFn(currentPlayer);
            } else if (checkForVictory(checkDiagsTLBR())) {
                modalFn(currentPlayer);
            } else if (checkForVictory(checkDiagsBLTR())) {
                modalFn(currentPlayer);
            }
            switchPlayer();
        });
    }

    // function checkDiagsL(columnIdx, i) {

    /*

        var seqArr = [];
        var result = columnIdx - i;
        for (var ci = 0; ci < totalNumOfCol; ci++) {
            var curColIndex = allColumns.eq(ci).index();
            for (var ri = 0; ri < totalNumOfRow; ri++) {
                if (curColIndex - ri === result) {
                    seqArr.push(allColumns.eq(curColIndex).children().eq(ri));
                }
            }
        }
        return result;
        */
    /*
//----incomplete - checking column row approach -1 +2 ...
    function checkDiags(passedCol, passedRow) {
        var count = 0;
        console.log("passedRow", passedRow);
        console.log("passedCol", passedCol);
        //column counter
        for (var i = 0; i < allSlots.length; i++) {
            if (allSlots.eq(i).hasClass(currentPlayer) &&

            ) {
                //
                //increment count
                count++;
            }
        }
    }
*/
    /*
    //------------------------incomplete
    function checkDiags(passedCol, passedRow) {
        console.log("passedRow", passedRow);
        console.log("passedCol", passedCol);
        for (
            var firstRow = 0;
            firstRow < totalNumOfRow.length - 4;
            firstRow++
        ) {
            var countDiag = 0;
            var checkRow, checkCol;
            for (
                checkCol = 0, checkRow = firstRow;
                checkCol < totalNumOfCol && checkRow < totalNumOfRow;
                checkCol++, checkRow++
            ) {
                if (
                    passedCol === checkCol &&
                    passedRow === checkRow &&
                    allSlots.hasClass(currentPlayer)
                ) {
                    countDiag++;
                    console.log("countDiag", countDiag);
                }
            }
        }
    }
*/
    /*
    //method using 5 and 7, still need to check next column
    function checkDiags() {
        //for BLTR or / diagonal
        //need to use this somehow
        //allColumns.index() != allColumns.next().index() &&
        
        var count = 0;
        console.log("column is", allColumns.index());
        for (var i = 0; i < allSlots.length; i++) {
            // console.log("i", i);
            if (
                allSlots.eq(i).hasClass(currentPlayer) &&
                allSlots.eq(i + 5).hasClass(currentPlayer) &&
                allSlots.eq(i + 10).hasClass(currentPlayer) &&
                allSlots.eq(i + 15).hasClass(currentPlayer)
            ) {
                console.log("Diag winner is", currentPlayer);
            }
        }
    }
    */

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
        $(".column").off();
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
