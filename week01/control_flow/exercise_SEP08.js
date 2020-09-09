//1. part "Data Types"
function logType(arg) {
    if (typeof arg === "string") {
        console.log("string!");
    } else if (typeof arg === "boolean") {
        console.log("boolean!");
    } else if (typeof arg === "function") {
        console.log("function!");
    } else if (typeof arg === "bigint") {
        console.log("bigint!");
    } else if (typeof arg === "undefined") {
        console.log("undefined!");
    } else if (isNaN(arg)) {
        console.log("not a number!");
    } else if (typeof arg === "number") {
        console.log("number!");
    } else if (Array.isArray(arg)) {
        console.log("hurray!");
    } else if (typeof arg === "object") {
        console.log("object!");
    } else if (typeof arg === "null") {
        console.log("null!");
    } else {
        console.log("I have no idea!");
    }
}
logType(10);

// 2. part "create inverted new object"
var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};
for (var key in a) {
    b[a[key]] = key;
}
console.log(b);

//3. part "countdown from 10 to 1"
for (var i = 10; i >= 1; i--) {
    console.log(i);
}
