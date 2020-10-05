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

    //part 2.
    let infoToAppend;
    let currentdate = new Date();
    let datetime = `${currentdate.getDate()}.${
        currentdate.getMonth() + 1
    }.${currentdate.getFullYear()} ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}
    `;
    infoToAppend = `${datetime}, ${request.method}, ${request.url}`;

    fs.appendFile("requests.txt", infoToAppend, (err) => {
        if (err) {
            console.log("error in append file!");
        }
    });
    if (request.method === "GET" || request.method === "HEAD") {
        response.setHeader("content-type", "text-html");
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

// 05.10.2020
//http requests

//If the request method is GET or HEAD, set the content type of the response to 'text/html' and the status code to 200.
//for GET we send a text, not for HEAD

//
//If the request method is POST, log the request body to the console
//we did this

//Part 2
//For each request made to your server
//each one!!!
//use fs.appendFile to add to a file named "requests.txt" a line with the following information in it:
// async function!
//need to read documentation, what arguments, what order
//this runs for every singele reuest. every time we make request it has all the info about the reuqest.  Use /n for a new line
