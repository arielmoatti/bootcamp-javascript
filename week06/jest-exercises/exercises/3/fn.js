module.exports = function fn(par) {
    //1
    if (typeof par === "string") {
        // return par.split("").reverse().join("");
        return par === "" ? "" : fn(par.substr(1)) + par.charAt(0);
        //2
    } else if (typeof par !== "string" && !Array.isArray(par)) {
        return null;
        //3
    } else if (Array.isArray(par)) {
        let arr = [];
        for (let i = 0; i < par.length; i++) {
            arr.push(fn(par[i]));
        }
        return arr;
    }
};
