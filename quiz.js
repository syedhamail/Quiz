#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright("**********Welcome to the quiz!**********"));
console.log(chalk.blueBright("Passing Marks is 3 out of 5"));
const quiz = await inquirer.prompt([
    {
        type: "list",
        name: "question_1",
        message: "How many states are there in Pakistan?",
        choices: ["3", "5", "4", "7"],
    },
    {
        type: "list",
        name: "question_2",
        message: "How many countries are there in Asia?",
        choices: ["33", "48", "57", "63"],
    },
    {
        type: "list",
        name: "question_3",
        message: "Which of the following is NOT a type of malware?",
        choices: ["Virus", "Worm", "Phishing", "Trojan Horse"],
    },
    {
        type: "list",
        name: "question_4",
        message: "How many elements are there in chemistry?",
        choices: ["118", "133", "148", "100"],
    },
    {
        type: "list",
        name: "question_5",
        message: "Which of the following is the strongest form of multi-factor authentication (MFA)?",
        choices: ["Password and security questions", "Password and one-time code sent via SMS", "Password and biometric verification", "Password and email verification"],
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "4":
        console.log(chalk.green("*Correct*"));
        ++score;
        break;
    default:
        console.log(chalk.red("*Incorrect*"));
        break;
}
switch (quiz.question_2) {
    case "48":
        console.log(chalk.green("*Correct*"));
        ++score;
        break;
    default:
        console.log(chalk.red("*Incorrect*"));
        break;
}
switch (quiz.question_3) {
    case "Phishing":
        console.log(chalk.green("*Correct*"));
        ++score;
        break;
    default:
        console.log(chalk.red("*Incorrect*"));
        break;
}
switch (quiz.question_4) {
    case "118":
        console.log(chalk.green("*Correct*"));
        ++score;
        break;
    default:
        console.log(chalk.red("*Incorrect*"));
        break;
}
switch (quiz.question_5) {
    case "Password and biometric verification":
        console.log(chalk.green("*Correct*"));
        ++score;
        break;
    default:
        console.log(chalk.red("*Incorrect*"));
        break;
}
console.log(`Marks Obatained: ${score}/5`);
if (score >= 3) {
    console.log(chalk.greenBright("Congratulations! You have passed the quiz."));
}
else {
    console.log(chalk.redBright("Sorry! You have failed the quiz."));
}
