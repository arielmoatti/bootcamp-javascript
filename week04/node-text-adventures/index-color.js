const readline = require("readline");
const chalk = require("chalk");

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

const color = {
    q: "Please type in your preferred color: ",
};

function game(adventObj, clrObj) {
    rl.question(clrObj.q, (userColor) => {
        userColor = userColor.toLocaleLowerCase();
        askQuestion(adventObj);
        function askQuestion(adventObj) {
            rl.question(chalk.keyword(userColor)(adventObj.q), (answer) => {
                answer = answer.toLocaleLowerCase();
                let ans = adventObj.answers[answer];
                if (ans) {
                    if (typeof ans == "object") {
                        askQuestion(ans);
                    } else if (typeof ans == "string") {
                        console.log(ans);
                        rl.close();
                    }
                } else {
                    console.log(
                        "ahh, I didn't quite get it, let's try again - "
                    );
                    askQuestion(adventObj);
                } //closes else block
            }); //closes the adventure rl.question
        } //closes askQuestion function
    }); //closes the color rl.question
} //closes game function

game(adventure, color);
