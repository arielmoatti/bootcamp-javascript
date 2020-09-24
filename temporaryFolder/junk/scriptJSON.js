var superMan = {
    name: "Superman",
    secretIdentity: "Clark Kent",
    age: 77,
    wearsCapes: true,
    spouse: null,
    powers: ["flight", "strength", "x-ray vision"],
    residences: {
        Metropolis: "main",
        Antarctica: "weekends and holidays",
    },
    doSomething: function () {
        console.log("hello");
    },
    home: "what",
};

var jsonVersion = JSON.stringify(superMan);
// console.log("jsonVersion", jsonVersion);

try {
    throw Error;
} catch (err) {
    console.log("there was an error", err);
}

// var parsedMan = JSON.parse(jsonVersion);
// console.log("parsedMan", parsedMan);
