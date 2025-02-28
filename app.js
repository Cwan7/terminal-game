const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);
let myCash = 0
const tools = [
    {name: "Scissors", price:'5', profitPerDay: '5'},
    {name: "Push Mower", price:'25', profitPerDay: '50'},
    {name: "Battery Mower", price:'250', profitPerDay: '100'},
    {name: "Starving Students", price:'500', profitPerDay: '250'},
]
const userTools = [
    {name: 'Teeth', price: '1', profitPerDay: '1'},
]
