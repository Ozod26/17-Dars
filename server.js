
// Module package FILE

// const moment = require("moment");

// const calculate = require("./hisob.js");

// const natija = calculate.kopaytirish(80, 20);
// console.log("natija", natija);

// console.log('*************');
// const natija2 = calculate.qoshish(80, 20);
// console.log("natija", natija2);
// console.log('*************');

// const natija3 = calculate.ayrish(80, 20);
// console.log("natija", natija3);

// console.log(require("module").wrapper);

// console.log(arguments);

const Account = require("./account");
Account.tellMeAboutClass();
Account.tellMeTime()

console.log("***************");

const myAccount = new Account('Adam', 10, 8623798745354);
myAccount.giveMeDetails();

myAccount.makeDeposit(10);

// Ferari 2,5mln usd

myAccount.withdrawMoney(11);

myAccount.makeDeposit(60);