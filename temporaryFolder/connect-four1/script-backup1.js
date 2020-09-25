(function () {
    var currentPlayer = "player1";
    var modal = $(".winnerModal");
    function switchPlayer() {
        currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
    }

    gameFn();

    function gameFn() {
        $(".column").click(function (e) {
            // console.log("clicked on column");
            var col = $(e.currentTarget);
            var slotsInCol = col.children();
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
            if (i === -1) {
                return;
            }

            console.log("col", col.index(), "row", i);
            var slotsInRow = $(".row" + i);
            // console.log("slotsInRow", slotsInRow);
            if (checkForVictory(slotsInCol)) {
                // victory dance
                console.log("column victory for", currentPlayer);
                $(".column").off();
                modalFn(currentPlayer);
            } else if (checkForVictory(slotsInRow)) {
                console.log("row victory for", currentPlayer);
                $(".column").off();
                modalFn(currentPlayer);
            } else if (checkDiag()) {
                //call the checkfor victory!
                console.log("diag victory for", currentPlayer);
            }

            switchPlayer();
        });
    }

    function checkDiag() {
        // return true;
    }

    function checkForVictory(slots) {
        // console.log("about to check", slots);
        // loop over some slots and check if there a 4 in a row
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            var slot = $(slots[i]);
            if (slot.hasClass(currentPlayer)) {
                //if slot has class "current player"
                //increment count
                count++;
                if (count === 4) {
                    return true; //we want the function to return truthy, for the if above
                }
            } else {
                //if not, then reser it back to 0
                count = 0;
                // console.log("count after resetting", count);
            }
        }
    }

    function modalFn(winner) {
        var winText;
        if (winner === "player1") {
            winText = "red player";
        } else {
            winText = "yellow player";
        }
        var myHtml = "";
        myHtml = "<p>the winner is the" + "<br>" + winText + "!</p>";
        myHtml += "<button class=nextRound>another round!</button>";
        modal.html(myHtml);
        modal.addClass("modalOn");
        $(".nextRound").click(function () {
            console.log("clicked");
            for (var i = 0; i < $(".column").length; i++) {
                $(".column").children(i).removeClass("player1 player2");
                modal.removeClass("modalOn");
                gameFn();
            }
        });
    }
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
    //
})();
