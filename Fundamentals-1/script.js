let js = "Amazing";
// if (js === "Amazing") alert("Javascript is FUN!");

console.log(10 + 19);
console.log("Logging another string into the console");

let firstName = "Ravi Teja";
let lastName = "Yella";

console.log(firstName, lastName);
// let new = 29 is not allowed as 'new' is JS keyword
// 2 other ways to assign similar variables
let $new = 20;
let _new = 200;

// name is also partly reserved keyword but it's allowed to be used
let name = "My name";
// but better avoid it

// variables in all upper cases is a constant variable
let PI = 2.339;
let WHATEVER = "Whatever dude!";

let me = {
    myName: "Ravi Teja Yella",
};

console.log(me);

let sample;
console.log(sample);
let nothing = null;
console.log(nothing);

let firstVar = 10;
let secondVar = firstVar;

firstVar += 1;
console.log(secondVar);
console.log(firstVar);

let secondDict = me;

// only the reference of non-primitive type is stored in stack memory. So if I change one by calling the reference, everything changes 
me["Adding new key"] = "New Value";
secondDict["Adding from secondDict"] = "New value from second Dict";
console.log(me);
console.log(secondDict);

true;
if (me == secondDict){
  console.log("Yeah they're the same");
};

let myStatus = true;
console.log(typeof(me));
console.log(typeof(myStatus));
console.log(typeof myStatus);

let rand = typeof myStatus;
let randAnother = typeof(myStatus);
console.log(typeof rand);
console.log(typeof(randAnother));

rand = 1;
console.log(typeof rand);

let year;
console.log(year);
console.log(typeof year);

year = 100;
console.log(year);

// this is regarded as a bug or an error in javascript
// null is not an object but type of null shows it as it's some object
console.log(typeof null);

// we can also declare variables with 'var' and 'const'

let age = 30;
age = 43;

// we cannot declare empty variables
// When declaring constants, we need initialize the variables
const constant = 100;
console.log(constant);
console.log(typeof constant);


// var is  an old way to declare variables before 2006 but it's a bit different to using 'let'
var randInt = 20;
console.log(randInt);
randInt = "yella";
console.log(randInt);