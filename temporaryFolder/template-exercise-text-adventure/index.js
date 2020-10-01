const readline = require("readline"); //built in in node, no need to install

const rl = readline.createInterface({
    // a method to create interface, it takes an object as argument
    input: process.stdin, //the object allows us to input and print out
    output: process.stdout,
});

let gamePlay = {
    q: "Welcome to The Land Of Wizards! Would you like to play?",
    answers: {
        yes: {
            q:
                "You are alone in a dark forest and facing a fork in the road. Which direction do you turn?",
            answers: {
                left: {
                    q:
                        "There's a scary wizard! He asks you a tough question. What's 1+1?",
                    answers: {
                        2: "congratulations!",
                    },
                },
                right: "This was not the right choice. Goodbye!",
            },
        },
        no: "Alright then. Enjoy your day!",
    },
};
/*
//1.

//takes two arguments: 1. the actual text, 2. is the user input as argument into a callback function
function askQuestion(ObjArg) {
    rl.question(ObjArg.q, (answer) => {
        
        if (ObjArg.answers[answer]) {
            console.log(ObjArg.answers[answer]);
            askQuestion(gamePlay); //we need to use recursion to be passed
            //need to check typeOf === object continue, if === string, close interface
            //when the last question was asked, close the interface
            // rl.close(); //exits the program
        } else {
            console.log("I didn't quite get it, let me ask you again -");
            askQuestion(gamePlay);
        }
    });
}
askQuestion(gamePlay);
*/
/*
function findVal(object, key) {
    var value;
    Object.keys(object).some(function (k) {
        if (k === key) {
            value = object[k];
            return true;
        }
        if (object[k] && typeof object[k] === "object") {
            value = findVal(object[k], key);
            return value !== undefined;
        }
    });
    return value;
}

console.log(findVal(gamePlay, "answers"));
*/

function iterate(obj, stack) {
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {
                iterate(obj[property], property);
            } else {
                console.log(property + "   " + obj[property]);
                // $("#output").append($("<div/>").text(stack + "." + property));
            }
        }
    }
}

// iterate(gamePlay, "q");
iterate(gamePlay);
