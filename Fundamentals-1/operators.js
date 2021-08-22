// about basic operators
const now = 2021;
const myAge = now - 1995;
const anotherAge = now - 1900;
console.log(myAge, anotherAge, 100, "What the hell is this", {"one": 1, "two": 2});

let check = 100;
check--;
check++;
check/=2;
check --;
check **= 2;
console.log(check);

const firstName = "Ravi Teja";
const lastName = "Yella";
console.log(firstName + " " + lastName);

console.log(firstName == lastName);
console.log(firstName === lastName);

if (!firstName === lastName){
    console.log("yeah, they're not the same bruv");
    console.log("U should really buy glasses");
}

// difference between == and === in JS
let checkInt = 100;
let checkString = '100';
if (checkInt == checkString) console.log("Yeah they're the same when u use only '=='");
if (checkInt ===  checkString) console.log("This won't get printed because we check the value type as well");

// coding challenge
const heightMark = 1.69;
const weightMark = 78;
const heightJohn = 1.95;
const weightJohn = 92;

function BMI(height, weight){
    return weight/(height)**2
}

let bmiMark = BMI(heightMark, weightMark);
let bmiJohn = BMI(heightJohn, weightJohn);
console.log("BMI John: ", bmiJohn,"BMI Mark: ", bmiMark);

let markHigherBMI = bmiJohn <= bmiMark;
console.log(markHigherBMI);

if (markHigherBMI) console.log("Yeah, Mark has higher BMI");
else console.log("No, John has higher BMI");


const newName = "Jonas";
const job = "teacher";
const birthYear = 1995;
const year = 2021;

const jonas = "I'm " + newName + ", a " + (year - birthYear) + " year old " + job;
console.log(jonas);

//using template literal
const newJonas = `I'm ${newName}, a ${year - birthYear} years old ${job}!`;
console.log(newJonas);

// going new line using \n
console.log(`whatever this string is ${newName}`);
// going new line using string literals
console.log("String with \nNew line");
console.log(`String with
new line
again yay`);

