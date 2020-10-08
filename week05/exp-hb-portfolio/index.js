const express = require("express");
const app = express();
const projects = require("./projects.json");

const hb = require("express-handlebars");
app.engine("handlebars", hb());
app.set("view engine", "handlebars");

//~~~~middleware
app.use(express.static("./projects"));
app.use(express.static("./public"));

//~~~~handlers
app.get("/", (req, res) => {
    res.render("home", {
        // layout: "main",
        projects,
    });
});

//
//
//
app.listen(8080, () => console.log("server is listening..."));
