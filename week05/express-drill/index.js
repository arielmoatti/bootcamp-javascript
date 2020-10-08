//~~~~~~~~~imports and declarations
// const fs = require("fs");
const { generateHtml } = require("./html-builder.js"); //imports the Html builder
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

//~~~~~~~~~MIDDLEWARE

app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(cookieParser());

app.use((req, res, next) => {
    if (!req.cookies.accepted && req.url != "/cookie") {
        console.log("cookies were NOT accepted, denied");
        //store the path in a cookie
        res.cookie("url", req.originalUrl);
        res.redirect("/cookie");
    } else {
        next(); //return????
    }
});

app.use(express.static("./projects"));

//~~~~~~~~~routes

app.get("/", (req, res) => {
    res.send(generateHtml()); //the building of the main HTML!
});

app.get("/cookie", (req, res) => {
    //welcomes the user to accept coockies.
    res.send(
        `<form method='POST'>
        <div><input type="checkbox" name="userCookies"<span>This website uses cookies. Tick the box to accept our cookie policy and hit "submit"</span></div><button> submit </submit></form>`
    );
});
//
//
app.post("/cookie", (req, res) => {
    const { userCookies } = req.body;
    if (userCookies) {
        console.log("user submit with cookie ticked");
        res.cookie("accepted", true);
        res.redirect(req.cookies.url);
    } else {
        console.log("user submit without cookies!");
        res.send(
            `<p>Your access to this website was denide. You must accept our cookie policy first!</p>`
        );
    }
});

app.listen(8080, () => console.log("server is listening..."));
