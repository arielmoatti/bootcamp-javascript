///////////////////////
/////fun with fs //////
///////////////////////

const { readdir, stat } = require("fs").promises;
const myPath = `${__dirname}/files`;

// const fs = require("fs");

function logSizes(dir) {
    return readdir(dir, { withFileTypes: true }).then((content) => {
        for (let i = 0; i < content.length; i++) {
            if (content[i].isFile()) {
                //if it's a file do this
                stat(`${dir}/${content[i].name}`).then((data) => {
                    console.log(`${dir}/${content[i].name}:`, data["size"]);
                }); //closes the stat promise
            } else if (content[i].isDirectory()) {
                //if it's a directory do this
                logSizes(`${dir}/${content[i].name}`); // call the function (recursive)
            } //closes the if statement checking for directory=true
        } // closes the for loop on all files
    }); //closes the readdir promise
} //closes the logSized function

logSizes(myPath).then(() => console.log("done!"));
/*

function logSizes(dir) {
    return readdir(dir).then((content) => {
        for (let i = 0; i < content.length; i++) {
            if (content[i].isFile) {
                stat(`${dir}/${content[i].name}`).then((data) => {
                    console.log(`${dir}/${content[i].name}:`, data["size"]);
                });
            } else if (content[i].isDirectory) {
                logSizes(`${dir}/${content[i].name}`);
            }
        }
    });
}
console.log(logSizes(myPath));
*/
