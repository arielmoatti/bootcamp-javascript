///////////////////////
/////fun with fs //////
///////////////////////

//part 1.

const fs = require("fs");
const myPath = `${__dirname}/files`;

function logSizes(dir) {
    fs.readdir(dir, { withFileTypes: true }, (err, content) => {
        if (err) {
            console.log("error in readdir");
        }
        for (let i = 0; i < content.length; i++) {
            // console.log(content[i].name);
            if (content[i].isFile()) {
                //if it's a file do this
                fs.stat(`${dir}/${content[i].name}`, (err, data) => {
                    if (err) {
                        console.log("error in stat");
                    }
                    console.log(`${dir}/${content[i].name}:`, data["size"]);
                });
            } else if (content[i].isDirectory()) {
                //if it's a directory do this
                logSizes(`${dir}/${content[i].name}`); // call the function (recursive)
            } //closes the if statement checking for directory=true
        } // closes the for loop on all files
    }); // closes the readdir function
} // closes logSizes function

logSizes(myPath);

//part 2.

function mapSizes(dir) {
    const obj = {};
    let fileName;
    let dirName;
    const passedDir = fs.readdirSync(dir, { withFileTypes: true });
    for (let i = 0; i < passedDir.length; i++) {
        if (passedDir[i].isFile()) {
            fileName = `${passedDir[i].name}`;
            const myStat = fs.statSync(`${dir}/${fileName}`);
            obj[fileName] = myStat["size"];
        } else if (passedDir[i].isDirectory()) {
            dirName = `${passedDir[i].name}`;
            obj[dirName] = mapSizes(`${dir}/${passedDir[i].name}`);
        }
    }
    return obj;
}
let returneddObj = mapSizes(myPath);
fs.writeFileSync(
    `${__dirname}/files.json`,
    JSON.stringify(returneddObj, null, 4)
);
