module.exports.dbl = function dbl(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(n)) {
                reject("bad number");
            } else {
                resolve(n * 2);
            }
        }, 200);
    });
};
