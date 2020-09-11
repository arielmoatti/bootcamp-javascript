// 1. exercise

function Rectangle(width, height) {
    this.getArea = function () {
        return width * height;
    };
}

function Square(face) {
    this.getArea = function () {
        return face * face;
    };
}

var rect = new Rectangle(4, 5);
console.log(rect.getArea());

var square = new Square(4);
console.log(square.getArea());

// 2. exercise

function invertCase(checkStr) {
    var newStr = "";
    for (var i = 0; i < checkStr.length; i++) {
        if (checkStr[i] == checkStr[i].toLowerCase()) {
            var newStr = newStr + checkStr[i].toUpperCase();
        } else {
            var newStr = newStr + checkStr[i].toLowerCase();
        }
    }
    return newStr;
}

invertedStr = invertCase("llUllUUUlUU879UUl");
console.log("The inverted String is: ", invertedStr);
