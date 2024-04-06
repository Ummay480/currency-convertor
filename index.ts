#!usr/bin/env node
import inquirer from "inquirer"

const currency: any = {
    USD: 1, // Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 288
}

let userAnswer =await inquirer.prompt(
    [
        {
            name: "from",
            message: "Enter from Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP"," INR", "PKR"]
        },
        {
            name: "to",
            message: "Enter to Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP"," INR", "PKR"]
        },
        {
            name: "amount",
            message: "Enter from Currency",
            type: "number"           
        }
    ]    
)

let userfromCurrency = userAnswer.from
let userToCurrency=userAnswer.to
let fromAmount = currency[userfromCurrency]//Exchange Rate
let toAmount = currency [userToCurrency] // Exchange Rate
let amount = userAnswer.amount
let baseAmount = amount / fromAmount //USD base currencey
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);



