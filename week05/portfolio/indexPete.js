const http = require("http");
const fs = require("fs");
const path = require("path");

// const fun = require("./fun.js");

const { generateHtml } = require("./fun");
// console.log('fun: ',fun);
// fun.generateHtml();
// console.log("generateHtml: ", generateHtml);
generateHtml();

http.createServer((req, res) => {
    // console.log('__dirname: ',__dirname);

    // const myReadStream = fs.createReadStream(__dirname + '/projects/panes/panes.css');
    // // // pipe the readable stream into a writeable stream (i.e. response object);
    // myReadStream.pipe(res);

    if (req.method !== "GET") {
        res.statusCode = 405; // method not allowed
        return res.end();
    }

    // console.log('req.url: ',req.url);
    const filePath = path.normalize(__dirname + "/projects" + req.url);
    // console.log('filePath: ',filePath);

    // traversal attack (DOT DOT SLASH)

    if (!filePath.startsWith(`${__dirname}/projects/`)) {
        res.statusCode = 403; // forbidden
        console.log("🚨INTRUDER ALERT!!🚨");
        return res.end();
    }

    // console.log('Now is the time to try and serve something...');
    // console.log('filePath: ',filePath);

    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log("err in fs.stat");
            // we didnt find anything so...
            res.statusCode = 404;
            return res.end();
        }
        // console.log('do something...', stats);
        if (stats.isFile()) {
            // console.log("Then serve the file...", filePath);
            // console.log("path.extname(filePath): ", path.extname(filePath));
            // we still need to create a readable stream from the filepath
            // we need to set the correct header type based on the extname
        } else {
            console.log("its a directory");
            if (req.url.endsWith("/")) {
                // console.log("filePath: ", filePath);
                const readStreamHtml = fs.createReadStream(
                    filePath + "index.html"
                );
                res.setHeader("Content-Type", "text/html");
                readStreamHtml.pipe(res);
                readStreamHtml.on("error", (err) => {
                    console.log("err in readStreamHtml", err);
                    res.statusCode = 500;
                    res.end();
                });
            } else {
                // redirect them to a url that has a slash at the end
                res.setHeader("Location", req.url + "/");
                res.statusCode = 302;
                res.end();
            }
        }
    });
}).listen(8080, () => console.log("Portfolio up and running"));
