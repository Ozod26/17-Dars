const moment = require('moment');

class Account {
  #amount;
  #account_id

    constructor(name, amount, account_id) {
     this.name = name;
     this.#amount = amount
     this.#account_id = account_id
    }

    tellMeBalance() {
        console.log(`Sizning hisobingizdagi qoldiq: ${this.#amount}$`,);
        return this.#amount;
    }

    withdrawMoney(amount) {
        if(this.#amount > amount) {
            this.#amount -= amount;
         console.log(`Hisobdan ${amount} yechildi va qoldiq ${this.#amount}`);
        } else {
            console.log(`Sizning balanisingizda pul yetarli emas: ${this.#amount}`);
        }
    }
    
    makeDeposit(pulTushdi) {
        this.#amount += pulTushdi;
        console.log(`Hisobingiz toldirildi, hisobingiz ${this.#amount}$ tashkil etadi`);

    }
    giveMeDetails() {
        console.log(`Salom hurmatli ${this.name} sizning hisobingiz ${this.#amount}$ ga teng`);
        console.log('Hisob raqamingiz:', this.#account_id);
    }
    static tellMeAboutClass() {
       console.log('Bu class accountlarni yasash uchun xizmat qiladi');
    }
    static tellMeTime() {
        console.log(`Hozirgi vaqt ${moment().format("YYY MM DD HH:mm:ss")}`);
     }
}

module.exports = Account;