var rowArr = [
    [0, 6, 12, 18, 24, 30, 36],
    [1, 7, 13, 19, 25, 31, 37],
    [5, 11, 17, 23, 29, 35, 41],
];

var diagRowArr = [];
// var diag1Row;
// var diag2Row;

// console.log("rowArr", rowArr);
//run this for every "slot" hasClass
document.addEventListener("click", function () {
    var slot = 5;
    for (var i = 0; i < rowArr.length; i++) {
        for (var j = 0; j < rowArr[i].length; j++) {
            // console.log("i", rowArr[i]);
            if (slot === rowArr[i][j]) {
                diagRowArr.push(i);
            }
        }
    }
    for (x = 0; x < diagRowArr.length; x++) {
        if (diagRowArr[x]) console.log("diagRowArr", diagRowArr);
    }
});

// console.log("diag1Row", diag1Row);

// if (diag1Row - diag2Row === 1) {

// }
