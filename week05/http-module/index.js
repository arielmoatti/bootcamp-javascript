//calling the http module
const http = require("http");
//calling the fs module
const fs = require("fs");
const myPath = `${__dirname}`;

//the main request handler, passing it req and res objects
const server = http.createServer((request, response) => {
    //error handling
    request.on("error", (err) => console.log("err in req: ", err));
    response.on("error", (err) => console.log("err in res: ", err));

    // happens for every single request that comes in
    console.log("request method: ", request.method);
    console.log("request url: ", request.url);
    console.log("request headers: ", request.headers);

    /////////////////part 2. starts here
    let currentdate = new Date();
    let datetime = `${currentdate.getDate()}.${
        currentdate.getMonth() + 1
    }.${currentdate.getFullYear()} ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}
    `;
    let infoToAppend = `\n${datetime}, ${request.method}, ${request.url}, ${request.headers["user-agent"]}`;
    //.
    fs.appendFile("requests.txt", infoToAppend, (err) => {
        if (err) {
            console.log("error in append file!");
        }
    });
    //////////////part 2. ends here
    if (request.method === "GET" || request.method === "HEAD") {
        response.setHeader("Content-Type", "text-html");
        response.statusCode = 200;
        if (request.method === "GET") {
            response.end(
                "<!doctype html><html><title>Hello World!</title><p>Hello World!</p></html>"
            );
        } else {
            response.end();
        }
    } else if (request.method === "POST") {
        response.statusCode = 302;
        response.setHeader("Location", "/");
        let body = "";
        request.on("data", (chunk) => {
            body += chunk;
        });
        request.on("end", () => {
            console.log("body: ", body);
        });
        response.end();
    } else {
        response.statusCode = 405;
        response.end();
    }
}); //closes the createServer method for const server

server.listen(8080, () => console.log("server is listening...")); //terminal feedback
