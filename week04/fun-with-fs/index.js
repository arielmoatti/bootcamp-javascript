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
