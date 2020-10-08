//~~~~ imports
const express = require("express");
const app = express();
const basicAuth = require("basic-auth");

const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != "discoduck" || creds.pass != "opensesame") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

//~~~~middleware
app.use("/secret", auth);
/*
app.use(function (req, res, next) {
    if ("/secret" === req.path) {
        basicAuth.connect(auth);
    }
});
*/

//~~~~listeners

app.get("/", (req, res) => {
    console.log("GET request for /");
    res.send("<h1>This is my main page</h1>");
});

app.get("/about", (req, res) => {
    console.log("GET request for /about");
    res.send("<h1>about page</h1>");
});

// app.use(auth);

app.get("/secret", (req, res) => {
    console.log("GET request for /secret");
    res.send("<h1>this is super secret!</h1>");
});

app.listen(8080, () => console.log("server is running"));
