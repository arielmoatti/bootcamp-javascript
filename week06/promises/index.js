function double(n) {
    return new Promise((resolve, reject) => {
        if (isNaN(n)) {
            reject(new Error("not a number!"));
        } else {
            resolve(n * 2);
        }
    });
}

// console.log(double(21));

// double(2).then((result) => {
//     console.log(result);
//     double(result).then((secondResult) => {
//         console.log("second result", secondResult);
//     });
// });

//chaining
// double("3")
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log("err in double", err);
//     });

//nesting
// double(2)
//     .then((result) => {
//         double(result)
//             .then((secondResult) => {
//                 console.log("first", result);
//                 console.log("second", secondResult);
//             })
//             .catch((err) => console.log("err in 2nd double"));
//     })
//     .catch((err) => console.log("err in 1st double"));

// return new Promise((resolve, reject) => {
//     if (a) {
//         reject(err);
//     } else {
//         resolve(files);
//     }
// });

// const { promisify } = require("util");
// const result = promisify(someFn);

//experimental promises//

const fs = require("fs").promises;
function getFirstFile() {
    return fs.readdir(__dirname).then((files) => {
        console.log(files[0]);
    });
}

getFirstFile();

//promise.all

Promise.all([double(12), double(22), double(36)])
    .then((results) => {
        console.log(results);
    })
    .catch((err) => {
        console.log(err);
    });
