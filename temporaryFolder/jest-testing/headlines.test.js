const headlines = require("./headlines");
const twApi = require("./twApi");

jest.mock("./twApi");

test("1. headlines filters out tweets that don't have one link", () => {
    twApi.getTweets.mockResolvedValue([
        {
            entities: {
                urls: [{ url: "testing-a-real-url.com" }],
            },
            full_text: "I will make it",
        },
        {
            entities: {
                urls: [
                    { url: "testing-a-real-url.com" },
                    { url: "testing-a-real-url.com" },
                ],
            },
            full_text: "I will not make it",
        },
        {
            entities: {
                urls: [],
            },
            full_text: "I will not make it",
        },
    ]);
    return headlines().then((tweets) => {
        expect(tweets.length).toBe(1);
        expect(tweets[0]).toEqual({
            text: "I will make it",
            href: "testing-a-real-url.com",
        });
    });
});
