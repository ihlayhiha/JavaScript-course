'use strict';

// Arrays are also objects. 
// const yellaArray = [
//     "Ravi Teja",
//     "Yella",
//     2021 - 1994,
//     "Teacher",
//     ["Whatever", "this", "is"],
// ];

// console.log(yellaArray);

"Objects in JavaScripts are something like Dictionaries  but Objects here have properties";

// one way of creating an object
const yella = {
    firstName : "Ravi Teja",
    lastName : "Yella",
    yearsAlive : 2021 - 1995,
    occupation : "Teacher",
    friends : ["Whatever", "this", "is"],
};

// another way of writing this
const anotherYella = {
    "firstName" : "Ravi Teja",
    "lastName" : "Yella",
    "yearsAlive" : 2021 - 1995,
    "occupation" : "Teacher",
    "friends" : ["Whatever", "this", "is"],
};



console.log(yella);
console.log(anotherYella);
console.log(yella.firstName);   // calling it using the .
console.log(yella["firstName"]);    // calling it using [] but we have to use the string version of the key for it

console.log();
console.log(anotherYella.firstName);    // is the same as ---
let tester = "first" + "Name";
console.log(anotherYella[tester]);     //  because we are assigning a type to the key (as a string)?

// retrieving data from objects
console.log(yella["check"]);    // gives undefined if there is no such key in the object

let keyCheck = (yella["firstName"]) ? "Yes this key exists" : "No this key doesn't exist";
console.log(keyCheck);

function checkKey(key){
    if (yella[key]) {
        console.log("Yes, this key exists");
        return `Value of ${key}: ${yella[key]}`;
    }
    console.log(`Value of this key is: ${yella[key]}`)
    return "False generator";
}
console.log(checkKey("firstName"));

// if the value of the key is either 0 or value does not exist (undefined), yella[key] gives 'false'
yella["addingZero"] = 0;
console.log(checkKey("addingZero"));    // gives false because the key value is 0

yella.location = "India";
console.log(checkKey("location"));

yella.bestFriend = yella.friends[yella.friends.indexOf("this")];
console.log(yella.bestFriend);
console.log(checkKey("bestFriend"));
console.log(yella);

// We can even add functions to objects (by adding function expressions instead of function declarations)
const me = {
    firstName : "Ravi Teja",
    lastName : "Yella",
    birthYear : 1995,
    occupation : "Teacher",
    friends : ["Whatever", "this", "is"],
    hasDriversLicence : false,

    // calcAge : function (birthYear) {
    //     return 2021 - birthYear
    // },


    // calcAge : function (){
    //     return 2021 - this.birthYear;
    // },

    calcAge : function(){
        this.age = 2021 - this.birthYear;
        this.random = "random";
        return this.age;
    },

    // checkLicence : function(){
    //     this.verifier = this.hasDriversLicence ? "has" : "doesn't have";
    //     return;
    // },

    getSummary : function(){
        this.summary = `${this.firstName} ${this.lastName} is a ${this.calcAge()}yr old ${this.occupation}. He ${this.hasDriversLicence? "has": "doesn't have"} a driving licence`
        // console.log(summary);
    }

};

// calling both expressive functions (methods) so they'll get executed and add more key-value pairs  
console.log(me.calcAge());      // me.calcAge() is the function
console.log(me["calcAge"]());   // me['calcAge]()is the function
me.getSummary();
// console.log(me.checkLicence());


// checking all
console.log(me);
console.log(me.age);
// Get summary challenge
// let intro = `${me.firstName} ${me.lastName} is a ${me.age}yr old ${me.occupation}. He ${me.verifier} a driving licence.`
// console.log(intro); 

console.log(me.summary);
console.log(me);

// Arrays are also objects, just that they're predefined and so we call the built in methods instead of what we did with the objects here like 'yella' and 'me where we wrote  our own methods
// ------------------------------------------------------------------------------->
// Coding challenge
console.log("----------------------------------------------------------------");

const applyBMI = function (name, height, mass){
    const sample = {
        name : name,
        height : height,
        mass : mass,

        calcBMI : function (){
            this.bmi = this.mass/this.height**2;
            return this.bmi;
        }
    };
    return sample;
}

let mark = applyBMI("Mark Miller", 1.69, 78);
let john = applyBMI("John Smith", 1.95, 92);

// initializing
mark.calcBMI();
john.calcBMI();

let compareBMI = {
    compare : function(){
        if (mark.bmi > john.bmi){
            this.big = mark;
            this.small = john;
        } else {
            this.big = john;
            this.small = mark;
        }
    }
}
// initializing
compareBMI.compare();

let printable = `${compareBMI.big.name}'s BMI(${compareBMI.big.bmi}) is bigger than ${compareBMI.small.name}'s BMI(${compareBMI.small.bmi})`;
console.log(printable);  