const countries = require("./countries");

test("1. testing for empty string, should return an empty array", () => {
    const result = countries.find("");
    expect(result).toEqual([]);
});

test("2. testing to make sure the array has no more than 4 results", () => {
    const result = countries.find();
    expect(result.length).toBeLessThanOrEqual(4);
});

test("3. testing the search is case insensitive", () => {
    const result = countries.find("gErMaNy");
    expect(result[0]).toBe("Germany");
});

test("4. testing no matching countries, an empty array is returned", () => {
    const result = countries.find("blablablabla");
    expect(result).toEqual([]);
});
