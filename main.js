#!/usr/bin/env/node
import inquirer from "inquirer";
let Value_A = {
    PKR: 278.40,
    USD: 1
};
let ans = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: "Converting from",
        choices: ["PKR", "USD"]
    },
    {
        name: "to",
        type: "list",
        message: "Converting to",
        choices: ["PKR", "USD"]
    },
    {
        name: "amount",
        type: "number",
        message: "Your amount to convert"
    }
]);
console.log(Value_A[ans.to] / Value_A[ans.from] * ans.amount);
