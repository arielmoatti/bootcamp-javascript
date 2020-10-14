const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");

test("album names are in alphabetical order", () => {
    spotify.search.mockResolvedValue({
        albums: {
            items: [{ name: "b" }, { name: "c" }, { name: "a" }],
        },
    });

    return getAlbumNames("meat loaf").then((albumNames) => {
        // expect(albumNames).toEqual(albumNames.sort()); //this doesn't work!
        expect(albumNames).toEqual(["a", "b", "c"]); //better to hard code it
    });
});
