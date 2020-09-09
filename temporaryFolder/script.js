//1. exercise
function addNums() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
// var fnReturn = addNums(5, 10, 15, 100, 200);
// console.log(fnReturn);

//2. exercise
function waitThenRun(
    
    setTimeout(waitThenRun(), 7500);
    return;
    ) {
}

var result = waitThenRun();
console.log("result: ", result);
