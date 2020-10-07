const http = require("http");
const fs = require("fs");
const path = require("path");

const { generateHtml } = require("./html-builder.js");
// generateHtml();

http.createServer((req, res) => {
    //start by getting rid of all other methods
    if (req.method !== "GET") {
        res.statusCode = 405; //method not allowed
        return res.end(); //will exit everything else
    }
    //
    const filePath = path.normalize(__dirname + "/projects" + req.url);
    //console.log("filePath", filePath);
    if (!filePath.startsWith(`${__dirname}/projects/`)) {
        res.statusCode = 403; //forbidden
        console.log("intruder alert!");
        return res.end();
    }
    //
    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log("error in fs.stat", err);
            req.statusCode = 404;
            return res.end();
        }
        if (stats.isFile()) {
            const extension = path.extname(filePath);
            res.setHeader("Content-Type", contentType[extension]);
            const readStreamHtml = fs.createReadStream(filePath);
            readStreamHtml.pipe(res);
            readStreamHtml.on("error", (err) => {
                console.log("err in readStreamHtml");
                res.statusCode = 500;
                res.end();
            });
        } else {
            //meaning, it is a directory!
            if (req.url === "/") {
                res.end(generateHtml()); //the building of the main HTML!
            } else if (req.url.endsWith("/")) {
                const readStreamHtml = fs.createReadStream(
                    filePath + "index.html"
                );
                res.setHeader("Content-Type", "text-html");
                readStreamHtml.pipe(res);
                readStreamHtml.on("error", (err) => {
                    console.log("err in readStreamHtml");
                    res.statusCode = 500;
                    res.end();
                });
            } else {
                //redirect
                res.setHeader("Location", req.url + "/");
                res.statusCode = 302;
                res.end();
            }
        }
    });
}).listen(8080, () => console.log("Potfolio up and running"));

//need to make an object to deal with the extname
let contentType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
};
