//~~~~~~~~~imports and declarations
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

//~~~~~~~~~MIDDLEWARE

app.use(
    express.urlencoded({
        extended: false,
    })
);
//takes one argument = a function
//with configuration object)
//for instance, if it was a POST request, it listens to it, parses it and add the chunks to the BODY without all that code
//the keys of the object come from the name="" in the form

app.use((req, res, next) => {
    console.log("middleware is running!");
    console.log(`a ${req.method} request was made to the root route`);
    next();
});
//next is a method. it MUST be called!

app.use(cookieParser());
//cookies MUST be set BEFORE the static public, so we can check who it is before we give them access
//it creates a req.coockie OBJECT

app.use(express.static("./public"));
//pass it a relativ path. make static files in this directory available.

//~~~~~~~~~routes
app.get("/", (req, res) => {
    res.send("<h1>Hello World!!!</h1>");
    console.log("cookies Object:", req.cookies);
}); //takes two arg, 1. string 2. callback function

// res.redirect("/about");
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/users/:username/:postID", (req, res) => {
    // console.log("req.params", req.params);
    //a special object
    const { username, postID } = req.params; //deconstructing
    res.send(`
        <h1>this is the page of ${username}</h1>
        <h3> this is post id ${postID}</h3>
    `);
    console.log("postID", postID);
    console.log("username", username);
});

app.get("/register", (req, res) => {
    res.send(`
<h2>Please tell us about yourself</h2>
        <form method='POST' style="display: flex; flex-direction: column; justify-content: space-between; width: 40%; height: 50%;">
            <input type='text' name='firstname' placeholder='First Name' autocomplete='off'>
            <input type='text' name='lastname' placeholder='Last Name' autocomplete='off'>
            <div>
                <span>How old are you? </span><input type="number" name="age">
            </div>
            <div>
                <input type="checkbox" name="subscribe"><span>Would you like to receive our newsletter?</span>
            </div>
            <button> submit </submit>
        </form>
    `);
});

app.post("/register", (req, res) => {
    res.cookie("first cookie", "this is exciting");
    res.cookie("authenticated", true);
    console.log("post was made");
    // console.log("req.body", req.body);
    const { firstname, lastname, age, subscribe } = req.body; //destructure the body object
    if (subscribe) {
        res.send(`
        <h1>thank you, ${firstname} ${lastname} for subscribing!</h1>
        <h2>You are just ${age} years old!</h2>
        `);
    } else {
        res.send(`
        <h1>we are sorry you chose NOT to subscribe, ${firstname}</h1>
        <h3>we will see you in ${age} days....</h3>
        `);
    }
});

app.get("/private", (req, res) => {
    console.log("req.cookies", req.cookies);
    if (req.cookies.authenticated) {
        res.send("secrect information!");
    } else {
        res.redirect("/");
    }
});

app.listen(8080, () => console.log("server is listening...")); // ==server.listen, takes two values, 1. port, 2. callback function
