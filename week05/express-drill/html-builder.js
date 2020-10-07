const fs = require("fs");
const myPath = `${__dirname}/projects`;

function generateHtml() {
    let myHtml = `<!doctype html><html><title>Portfolio</title><h1>My Portfolio</h1><ul>`;
    const dirs = fs.readdirSync(myPath, { withFileTypes: true });
    for (let i = 0; i < dirs.length; i++) {
        myHtml += `<li><a href="/${dirs[i].name}">${dirs[i].name}</a></li>`;
    }
    myHtml += "</ul></html>";
    return myHtml;
}

module.exports.generateHtml = generateHtml;
