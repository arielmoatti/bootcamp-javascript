const chalk = require("chalk");
const http = require("http");
const qs = require("querystring");

const server = http.createServer((req, res) => {
    req.on("error", (err) => console.log("Error in request", err));
    res.on("error", (err) => console.log("Error in response", err));

    // console.log("req.method: ", req.method);

    if (req.method === "GET") {
        // send some html as a response!
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;
        res.write(`
            <!doctype html>
            <html>
            <title>Colors</title>
            <form method="POST">
            <input type="text" name="text">
            <select name="color">
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
                <option value="gray">gray</option>
                <option value="magenta">magenta</option>
                <option value="cyan">cyan</option>
            </select>
            <button type="submit">Go</button>
            </form>
            </html>
        `);

        res.end();
    }

    if (req.method === "POST") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            const userText = qs.parse(body).text;
            const userColor = qs.parse(body).color;
            res.setHeader("Content-Type", "text/html");
            res.statusCode = 200;
            res.write(`
                <a href="/" style="color: ${userColor}">Hello ${userText}</a>
            `);
            res.end();
            console.log(chalk.keyword(userColor)(userText));
        });
    }
});

server.listen(8080, () => console.log(chalk.yellow("Server up and running")));
