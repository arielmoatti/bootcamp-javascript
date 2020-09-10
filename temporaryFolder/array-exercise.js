//2. exercise
function revOrder(arr) {
    var revArr = arr;
    return revArr.reverse();
}

var result2 = revOrder([1, 2, 3, 4]);
console.log("result2", result2);

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
