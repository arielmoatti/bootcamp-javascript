const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const adventure = {
    q: "Welcome to The Land Of Wizards! Would you like to play? [yes||no] ",
    answers: {
        yes: {
            q:
                "You are alone in a dark forest and facing a fork in the road. Which direction do you turn? [left||right] ",
            answers: {
                left: {
                    q:
                        "There's a scary wizard! He asks you a tough question. What's 1+1?",
                    answers: {
                        2: "congratulations! It was fun playing with you. Goodbye!",
                    },
                },
                right: "This was not the right choice. Goodbye!",
            },
        },
        no: "Alright then. Enjoy your day!",
    },
};

function askQuestion(objArg) {
    rl.question(objArg.q, (answer) => {
        let ans = objArg.answers[answer];
        if (ans) {
            if (typeof ans == "object") {
                askQuestion(ans);
            } else if (typeof ans == "string") {
                console.log(ans);
                rl.close();
            }
        } else {
            console.log("ahh, I didn't quite get it, let's try again - ");
            askQuestion(objArg);
        }
    });
}

askQuestion(adventure);
