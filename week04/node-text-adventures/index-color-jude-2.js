const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const adventure = {
    q: "hey Jude! Would you like to sing along? [yes] || [no] ",
    answers: {
        yes: {
            q:
                "Hey Jude, don't... [make] it bad || [be] afraid || [let] me down ",
            answers: {
                make: {
                    q:
                        "Take a sad song and make it better. Remember to... let her into your [heart] || let her under your [skin] ",
                    answers: {
                        heart: {
                            q: "then you [can] start || [begin]",
                            answers: {
                                can: "to make it better!",
                                begin: "to make it better!",
                            },
                        },
                        skin: {
                            q: "then you [can] start || [begin]",
                            answers: {
                                can: "to make it better!",
                                begin: "to make it better!",
                            },
                        },
                    },
                },
                be: {
                    q:
                        "You were made to go out and get her. Remember to... let her into your [heart] || let her under your [skin] ",
                    answers: {
                        heart: {
                            q: "then you [can] start || [begin]",
                            answers: {
                                can: "to make it better!",
                                begin: "to make it better!",
                            },
                        },
                        skin: {
                            q: "then you [can] start || [begin]",
                            answers: {
                                can: "to make it better!",
                                begin: "to make it better!",
                            },
                        },
                    },
                },
                let: {
                    q:
                        "You have found her, now go and get her. Remember to... let her into your [heart] || let her under your [skin] ",
                    answers: {
                        heart: {
                            q: "then you [can] start || [begin]",
                            answers: {
                                can: "to make it better!",
                                begin: "to make it better!",
                            },
                        },
                        skin: {
                            q: "then you [can] start || [begin]",
                            answers: {
                                can: "to make it better!",
                                begin: "to make it better!",
                            },
                        },
                    },
                },
            },
        },
        no: "ok then, maybe another time! byebye",
    },
};

let chalkColors = [
    "black",
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
    "blackbright",
    "gray",
    "grey",
    "redbright",
    "greenbright",
    "yellowbright",
    "bluebright",
    "magentabright",
    "cyanbright",
    "whitebright",
];

const color = {
    q: "Please type in your preferred color: ",
};

function game(adventObj, clrObj) {
    rl.question(clrObj.q, (userColor) => {
        userColor = userColor.toLocaleLowerCase();
        let match = chalkColors.find((col) => col === userColor);
        if (!match) {
            console.log("please choose a valid color.... ");
            game(adventObj, clrObj);
        }
        askQuestion(adventObj);
        function askQuestion(adventObj) {
            rl.question(chalk.keyword(userColor)(adventObj.q), (answer) => {
                answer = answer.toLocaleLowerCase();
                let ans = adventObj.answers[answer];
                if (ans) {
                    if (typeof ans == "object") {
                        askQuestion(ans);
                    } else if (typeof ans == "string") {
                        console.log(chalk.keyword(userColor)(ans));
                        rl.close();
                    }
                } else {
                    console.log(
                        chalk.red(
                            "oh, I can't sing that... type a [word] of choice - "
                        )
                    );
                    askQuestion(adventObj);
                } //closes else block
            }); //closes the adventure rl.question
        } //closes askQuestion function
    }); //closes the color rl.question
} //closes game function

game(adventure, color);
