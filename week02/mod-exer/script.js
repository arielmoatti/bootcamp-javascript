//1. exercise

function selectorStyleChange(par) {
    var storeStr = document.querySelectorAll(par);
    for (i = 0; i < storeStr.length; i++) {
        storeStr[i].style.fontStyle = "italic";
        storeStr[i].style.textDecoration = "underline";
        storeStr[i].style.fontWeight = "bold";
    }
}

selectorStyleChange("h2");

//2. exercise
function classReturnArray(par) {
    var storeArr = [];
    storeArr = document.getElementsByClassName(par);
    return storeArr;
}

var storeReturn = classReturnArray("textBox");
console.log("storeReturn", storeReturn);

//3. exercise
function insrtElm() {
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("AWESOME");
    newDiv.appendChild(newContent);
    newDiv.style.position = "fixed";
    newDiv.style.top = "100px";
    newDiv.style.left = "20px";
    newDiv.style.zIndex = "2147483647";
    newDiv.style.fontSize = "200px";
    document.body.prepend(newDiv);
}

insrtElm();
