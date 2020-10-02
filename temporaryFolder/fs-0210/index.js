const fs = require("fs"); //requiring a core module of Node
const message = "Let's write our third first file with js";
const myPath = __dirname; //gets the current path location

//wrting a file the async way

fs.writeFile(`${myPath}/test.txt`, message, (err) => {
    if (err) {
        console.log("something went wrong in writeFile");
    }
});

//creating an object
const obj = {
    name: "ariel",
    last: "moatti",
    list: ["one", "two"],
};

//writing a file sync way.
fs.writeFileSync(`${myPath}/my_new_file.json`, JSON.stringify(obj, null, 4));

fs.readdir(myPath, { withFileTypes: true }, (err, content) => {
    // console.log("content is: ", content);
    for (let i = 0; i < content.length; i++) {
        // console.log(content[i].name);
        // console.log(content[i].name, "is a file?", content[i].isFile());
    }
});

// console.log("came after readdir");

const myDir = fs.readdirSync(myPath, { withFileTypes: true });

// console.log("readdirSync has this value", myDir);
// console.log("I come after readdirSync");
// console.log(myDir[0].name, "is this a directory", myDir[0].isDirectory());
// console.log(myDir[3].name, "is this a file", myDir[3].isFile());

fs.stat(`${myPath}/test.txt`, (err, data) => {
    if (err) {
        console.log("error in stat");
    }
    // console.log("stat for ", `${myPath}/test.txt`, data);
});

const myStat = fs.statSync(myDir[1].name);
// console.log(`myStat for ${myDir[1].name}`, myStat);

// readFile: reading file content

fs.readFile(`${__dirname}/test.txt`, "utf8", (err, fileContent) => {
    if (err) {
        // console.log("error reading the file");
    }
    // console.log(fileContent);
});

const myFile = fs.readFileSync(`${myPath}/index.js`, "utf8");
console.log("myFile", myFile);
