// const { test, expect } = require("@jest/globals");
const { expect } = require("@jest/globals");
const { dbl } = require("./dbl");

test("1. dbl returns argument x 2 if passed a number", () => {
    return dbl(2).then((number) => {
        expect(number).toBe(4);
    });
});

test("2. dbl rejects promise if NaN is passes", () => {
    return dbl("testing").catch((err) => {
        expect(err).toBe("bad number");
    });
});
