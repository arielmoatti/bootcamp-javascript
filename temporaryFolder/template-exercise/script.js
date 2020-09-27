function test(oper) {
    var a = 5;
    var b = 12;
    function arithmetics() {
        // var sum = "a" + oper + "b";
        // var sum = "a" + oper + "b";
        return eval("a" + oper + "b");
        // return eval(sum);
    }
    // return a;
    return arithmetics();
}

var result = test("+");
console.log("result", result);
