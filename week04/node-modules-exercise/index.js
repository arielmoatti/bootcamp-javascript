const url = require("url");
const parsedUrl = url.parse(process.argv[2]);

console.log("The protocol is", parsedUrl.protocol);
console.log("The host is", parsedUrl.host);
console.log("The hostname is", parsedUrl.hostname);
console.log("The port is", parsedUrl.port === "" ? "null" : parsedUrl.port);
console.log("The pathname is", parsedUrl.pathname);
console.log(
    "The query is",
    parsedUrl.search === "" ? "null" : parsedUrl.search
);
new URLSearchParams(parsedUrl.search).forEach(function (value, name) {
    console.log("The value of the", name, "parameter is", value);
});
