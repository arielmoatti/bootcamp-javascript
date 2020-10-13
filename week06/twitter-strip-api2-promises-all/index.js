const express = require("express");
const app = express();

const { getToken, getTweets, filterTweets } = require("./ticker.js");

app.use(express.static("ticker"));

app.get("/data.json", (req, res) => {
    getToken()
        .then((token) => {
            Promise.all([
                getTweets(token, "Slate"),
                getTweets(token, "BuzzFeed"),
                getTweets(token, "TEDTalks"),
            ])
                .then((results) => {
                    const mergedResults = [
                        ...results[0],
                        ...results[1],
                        ...results[2],
                    ];
                    const sortedTweets = mergedResults.sort((a, b) => {
                        return new Date(b.created_at) - new Date(a.created_at);
                    });
                    const filteredTweets = filterTweets(sortedTweets);
                    res.json(filteredTweets);
                })
                .catch((err) => {
                    console.log("err in promise all: ", err);
                });
        })
        .catch((err) => {
            console.log("err in catch: ", err);
        });
});

app.listen(8080, () => console.log("server here at 8080"));
