#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 12345;
console.log("wellcome to shifa's code - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin code is correct, you login successfully.");
    // console.log(`current account balance is ${myBalance}`)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation",
            choices: [
                { name: "Withdraw Amount", value: "Withdraw Amount" },
                { name: "Check Balance", value: "Check Balance" }
            ]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawmethod",
                type: "list",
                message: "select a withdrawal method:",
                choices: [
                    { name: "Fast Cash", value: "Fast Cash" },
                    { name: "Enter Amount", value: "Enter Amount" }
                ]
            }
        ]);
        if (withdrawAns.withdrawmethod === "Fast Cash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: "select amount",
                    choices: [
                        { name: "1000", value: 1000 },
                        { name: "5000", value: 5000 },
                        { name: "2000", value: 2000 },
                        { name: "10000", value: 10000 },
                        { name: "15000", value: 15000 },
                        { name: "20000", value: 20000 }
                    ]
                }
            ]);
            if (fastcashAns.fastcash > myBalance) {
                console.log("insuficient balance");
            }
            else {
                myBalance -= fastcashAns.fastcash;
                console.log(`${fastcashAns.fastcash} withdraw successfully.`);
                console.log(`your remaining balance is: ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawmethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "enter the amount to withdraw:",
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("insufficient balance.");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw successfully`);
                console.log(`your remaining balance is: ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`your account balance is: ${myBalance}`);
    }
}
else {
    console.log("pin is incorrect, try again!");
}
