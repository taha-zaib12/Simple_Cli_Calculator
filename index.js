#! /usr/bin/env node       
import inquirer from "inquirer";
//printing a welcome message:
console.log("\n\t WELCOME TO \'tahazaib99\' - CLI Simple CALCULATOR\n");
// ASKING QS FROM USER THROUGH INQUIRER
let answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select One Operator To Perform Operations:",
        type: "list",
        name: "operators",
        choices: ["Addition", "Substraction", "Multiplication", "Division"]
    },
]);
//CONDITIONAL STATEMENTS IF-ELSE
if (answer.operators === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("invalid input");
}
