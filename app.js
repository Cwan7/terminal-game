const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);
let myCash = 0
let priceOfChosenTool = 0
let chooseTool = 0
let daysWorked = 0
victoryAchieved = false
userWantsToPlay = true

//----------------------ARRAYS-----------------------------
const userTools = [{name: 'Teeth', price: '1', profitPerDay: '1'}];

const tools = [
    {code: 1, name: "Scissors", price: 5, profitPerDay: 5},
    {code: 2, name: "Push Mower", price: 25, profitPerDay: 50},
    {code: 3, name: "Battery Mower", price: 250, profitPerDay: 100},
    {code: 4, name: "Starving Students", price: 500, profitPerDay: 250},
]

//---------------------------FUNCTIONS---------------------------
let buyTool = () => {
    if (priceOfChosenTool > myCash) {
        console.log(tools);
        chooseTool = prompt(`You can't afford that, You have $${myCash}, Which tool would you like to purchase? `)
        priceOfChosenTool = tools[chooseTool - 1].price;
        buyTool();
        return
    } else if (priceOfChosenTool <= myCash) {
        myCash = myCash - priceOfChosenTool;
        userTools.splice(0, 1, tools[chooseTool - 1]); 
        console.log(`You have purchased ${tools[chooseTool - 1].name}, You now have $${myCash} left.`)
        console.log(`Your updated tool: ${userTools[0].name}: Profits Per Day: $${userTools[0].profitPerDay}`)
        return;
    }
}

let askStoreOrWork = () => {
    let storeOrWork = prompt(`Your current cash is $${myCash}, Do you want to upgrade your tool [Tool] or keep working [Work]`)
        storeOrWork = storeOrWork.toUpperCase();
        if (storeOrWork === 'TOOL') {
            console.log(tools);
            chooseTool = prompt(`You have $${myCash}, Which tool would you like to purchase? `)
            priceOfChosenTool = tools[chooseTool - 1].price;
            buyTool();
        } else if (storeOrWork === 'WORK') {
            dayWorkedFunction();
        } else {
            console.log('Not a valid response.')
        }
}

let dayWorkedFunction = () => {
    let daysWorkedPrompt = prompt(`With ${userTools[0].name} making $${userTools[0].profitPerDay}/Day, How many days do you want to work?`);

        while (isNaN(daysWorkedPrompt) || daysWorkedPrompt < 1 || daysWorkedPrompt > 10) {
            daysWorkedPrompt = prompt(`Invalid input. Please enter a number between 1 and 10`);
    }myCash = myCash + (daysWorkedPrompt * userTools[0].profitPerDay);
 }
dayWorkedFunction();
while (!victoryAchieved) {
    if (myCash > 1000) {
        victoryAchieved = true;
        console.log(`CONGRADULATIONS!! You have earned more then $1,000`)
        break;
} askStoreOrWork()
}
