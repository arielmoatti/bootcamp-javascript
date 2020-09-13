//1. exercise
function each(candidate, callback) {
    if (Array.isArray(candidate)) {
        for (var i = 0; i < candidate.length; i++) {
            callback(candidate[i], i);
        }
    } else if (typeof candidate == "object") {
        for (var key in candidate) {
            callback(candidate[key], key);
        }
    }
}

each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
);

each(["a", "b"], function (val, idx) {
    console.log("The value of item " + idx + " is " + val);
});

//2. exercise
function revOrder(arr) {
    var revArr = arr;
    console.log("passed array (untouched) is: ", arr);
    return revArr.reverse();
}

var reveredArray = revOrder([1, 2, 3, 4]);
console.log("result 1 using 'reverse' method: ", reveredArray);

//2. exercise another way
function revOrder2(arr) {
    var revArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    console.log("passed array (untouched) is: ", arr);
    return revArr;
}
var reveredArray2 = revOrder2([1, 2, 3, 4]);
console.log("result 2 using for loop: ", reveredArray2);

//3. exercise
function getLessThanZero(arr) {
    var resultArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
}

var result3 = getLessThanZero([1, 2, -1, 0, 12]);
console.log("result3", result3);
