// Using if and else statements
const herName = "Sarah";
const age = 11;
const isLegalAge = age>=18;


if (isLegalAge){
    console.log(`${herName} is old enough to drive!`);
    console.log("Let's celebrate!");
} else {
    console.log(`Sorry! ${herName} is not old enough to drive`);
    console.log(`Come back after ${18 - age} years!`);
}

const birthday = 2222;
let century;

if (birthday < 2000){
    century = 20;
    console.log("19th century");
} 
else if (birthday < 2010 && birthday >= 2000){
    century = 20;
    console.log("20th century")
} 
else {
    century = 21
    console.log("21st century")
}


// Type conversion
const inputYear = '1991';
console.log(inputYear + 18);

console.log("Converting type string to type Number using inbuilt Number() function");
let numYear = Number(inputYear);
console.log(numYear + 18);

let tryThis = Number("Yella");
let anotherTry = Number("Hundred");
console.log(tryThis);   // returns NaN = Not a Number
console.log(typeof tryThis);   // still a type number but it's not a number
console.log(anotherTry);   // returns NaN = Not a Number


// Converting string to number
console.log(String(20));
console.log(typeof String(20));

// type coercion
let coercion = "I am " + 20 + " years old"; 
console.log(coercion);
console.log("I am " + 20 + " years old");
// JS also converts strings to numbers when triggered with '-' operator
console.log('23' - '10' - 3);       // will give 10 as '-' operator coerces string to int
console.log('23' + '10' + 3);       // will give 23103

console.log('23' * '2');            // will give 46 
console.log('23' / '2');            // will give 11.5, only the + operator coerces numbers to string. Rest of them coerces string to int
console.log('23' > '2');            // same, converts string to int if possible

// guess the value of n
let n = '1' + 1;
n = n - 1;
console.log(n); // 10
