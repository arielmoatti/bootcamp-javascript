//1. exercise
function addNums() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
var fnReturn = addNums(5, 10, 15, 100, 200);
console.log(fnReturn);

//2. exercise
function waitThenRun() {
    console.log("hello!");
}
setTimeout(waitThenRun, 1500);

//3. exercise
function calc(num) {
    var sum = 0;
    if (num <= 0 || Number.isNaN(num)) {
        return "ERROR";
    } else if (num >= 1000000) {
        return num;
    } else {
        do {
            sum += num * 10;
        } while (sum < 1000000);
        return sum;
    }
}

var result = calc(1.3);
console.log("result: ", result);
