const express = require("express");
const app = express();
const projects = require("./projects.json");

const hb = require("express-handlebars");

//added global helpers-----------
const hbSet = hb.create({
    helpers: {
        someFn() {
            return "helllllllllllllloooo";
        },
    },
});
//-------------

app.engine("handlebars", hbSet.engine); //this is changed!
app.set("view engine", "handlebars");

//~~~~middleware
app.use(express.static("./projects"));
app.use(express.static("./public"));

//~~~~handlers
app.get("/", (req, res) => {
    res.render("home", {
        projects,
    });
});

app.get("/p/:project", (req, res) => {
    const { project } = req.params;
    const selectedProject = projects.find((item) => item.dir === project);
    if (!selectedProject) {
        return res.sendStatus(404);
    } else {
        res.render("description", {
            selectedProject,
            projects,
        });
    }
});
//
//
//
app.listen(8080, () => console.log("server is listening..."));

//example for helpers:
app.get("/ignore", (req, res) => {
    res.render("home", {
        projects,
        helpers: {
            shouting(text) {
                return text + "!!!!!!";
            },
        },
    });
});
