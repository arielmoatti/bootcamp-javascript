function translateNumberToGerman() {
    try {
        // $(".refresh").removeClass("on");
        // $(".resultDiv").empty().html();
        var numToTrans = askForNumber();
        console.log("numToTrans", numToTrans);
        var germanNums = [
            "eins",
            "zwei",
            "drei",
            "vier",
            "fünf",
            "sechs",
            "sieben",
            "acht",
            "neun",
            "zehn",
        ];
        console.log(germanNums[numToTrans - 1]);
        var results = germanNums[numToTrans - 1];
        $(".resultDiv").html("<p class='german'>" + results + "</p>");
        $(".refresh").addClass("on");
    } catch (err) {
        console.log("err", err);
        translateNumberToGerman();
    }
}

$(".refresh").click(function () {
    $(".refresh").removeClass("on");
    $(".resultDiv").empty().html();
    setTimeout(function () {
        translateNumberToGerman();
    }, 300);
    // location.reload();
});

function askForNumber() {
    var num = prompt("Please enter a number between 1 and 10");
    if (num >= 1 && num <= 10 && num == parseInt(num)) {
        return num;
    }
    throw new Error("Bad number");
}

translateNumberToGerman();
