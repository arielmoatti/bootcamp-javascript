const secrets = require("./secrets.json");
const https = require("https");
const { text } = require("express");

module.exports.getToken = function (callback) {
    let creds = `${secrets.Key}:${secrets.Secret}`;
    let encodedCreds = Buffer.from(creds).toString("base64");

    const options = {
        method: "POST",
        host: "api.twitter.com",
        path: "/oauth2/token",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };
    function cb(response) {
        if (response.statusCode != 200) {
            console.log("something went wrong...", response.statusCode);
            callback(response.statusCode);
            return;
        }
        let body = "";
        response.on("data", function (chunk) {
            body += chunk;
        });
        response.on("end", function () {
            // console.log("body", body); // this shows the returned JSON
            let parsedBody = JSON.parse(body);
            // console.log("parsedBody", parsedBody); //this shows the parsed object
            callback(null, parsedBody.access_token);
        });
    }

    const req = https.request(options, cb);
    req.end("grant_type=client_credentials");
    // this function will get the token from twitter
};

//~~~~~

module.exports.getTweets = function (bearerToken, callback) {
    const statuses = {
        method: "GET",
        host: "api.twitter.com",
        path:
            "/1.1/statuses/user_timeline.json?screen_name=nytimes&tweet_mode=extended",
        headers: {
            Authorization: `Bearer ${bearerToken}`,
        },
    };
    function cb(response) {
        if (response.statusCode != 200) {
            console.log("something went wrong...", response.statusCode);
            callback(response.statusCode);
            return;
        }
        let body = "";
        response.on("data", function (chunk) {
            body += chunk;
        });
        response.on("end", function () {
            // console.log("body", body); // this shows the returned JSON
            let parsedBody = JSON.parse(body);
            // console.log("parsedBody", parsedBody); //this shows the parsed object
            callback(null, parsedBody);
        });
    }
    const req = https.request(statuses, cb);
    req.end();
};

module.exports.filterTweets = function (tweets) {
    let tweetsArr = [];
    let filteredArr = tweets.filter(
        (tweet) => tweet.entities.urls.length === 1
    );

    for (let i = 0; i < filteredArr.length; i++) {
        let obj = {};
        obj.url = filteredArr[i].entities.urls[0].url;
        obj.enclosedTextContent = filteredArr[i].full_text.split(" http")[0];

        tweetsArr.push(obj);
    }
    console.log("tweetsArr", tweetsArr);
    return tweetsArr;
};
/*

        let tweetsurl = tweets[i].entities.urls;
        if (tweetsurl.length === 1) {
            let tweetstext = tweets[i].full_text;
            let filteredUrl = tweetsurl.map((singleUrl) => singleUrl.url);
            let cleanTweet = tweetstext.split("http", 1);
            // console.log("cleanTweet", cleanTweet);
            // tweetsArr.push({"'url: '" + filteredUrl[0] + "'"});
            tweetsArr.push(
                `{"url: "${filteredUrl[0]}", "enclosedTextContent": "${cleanTweet[0]}"},`
            );

            */
// console.log("filteredUrl", filteredUrl);
// console.log(`tweet in index number ${i} is:  ${tweetstext}`);
// console.log("I found one!");

// console.log("tweetsArr", tweetsArr);

// if (tweetsurl.filter((tweet) => tweet.entities.urls.length === 1)) {
// }
// tweets.filter(
//     (tweet) => tweet.entities.urls.length === 1
// );
// console.log("tweetsurl", tweetsurl);

// let urls = tweetsurl.map(url => url.url);
// let hasAtLeastOneUrl = tweetsurl.filter((url) => url.length > 0);
// console.log("hasAtLeastOneUrl", hasAtLeastOneUrl);

// let brokenDownUrl = tweetsurl[0];
// let justUrl = brokenDownUrl.url;
// console.log("justUrl", justUrl);
// console.log("brokenDownUrl", brokenDownUrl);

// tweetsObj.enclosedTextContent = tweetstext;
