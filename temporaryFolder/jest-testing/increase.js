module.exports.increase = function increase(n) {
    if (isNaN(n) || n <= 0) {
        return "error";
    }
    while (n < 1000000) {
        n *= 10;
    }
    return n;
};
