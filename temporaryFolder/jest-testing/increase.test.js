const { test, expect } = require("@jest/globals");
const { increase } = require("./increase");

//takes 2 arguments: a string, describing what is being test, 2nd is the callback containing the actual unit test
test("1. passing NaN to increase returns 'error'", () => {
    const result = increase(NaN); //callback calling the function with the argument needed to be tested
    expect(result).toBe("error");
});

test("2. passing a number less than 0 returns 'error'", () => {
    const result = increase(-1);
    expect(result).toBe("error");
});

test("3. passing a number larger than 1 returns multiply by 10", () => {
    const result = increase(200);
    expect(result).toBe(2000000);
    expect(result).toBeGreaterThanOrEqual(1000000);
});

test("4. passing a number larger than a million returns that number", () => {
    expect(increase(1000001)).toBe(1000001);
});

test("5. passing a string returns 'error'", () => {
    expect(increase("blue")).toBe("error");
});
