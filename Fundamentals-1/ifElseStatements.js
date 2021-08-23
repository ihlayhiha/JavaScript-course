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

// alert("What do your say!");
// let favorite = Number(prompt("what's your fav number?"));

// while (true){
//     if (isNaN(favorite)){
//         favorite = prompt("Wrong input. I asked for your favorite NUMBER!!!. Try again")
//     } else {
//         break;
//     }
// }
// console.log(favorite);
// console.log(isNaN(favorite));



// Challenge

console.log("The 10th fibonacci value is : ", factorial(10));

function factorial(n){
    if (n === 0) return 0
    else if (n === 1) return 1
    return (factorial(n - 1) + factorial(n - 2))
}



let fib = (n)=> {
    if (n == 0) return 0
    else if (n === 1) return 1
    return fib(n - 1) + fib(n - 2)
}
console.log(fib(10));

const randArrowFunction = (a, b, c) => a + b + c;
console.log(randArrowFunction(1, 2, 3));


let declareFunction = function (a, b, c) { return a + b + c}

console.log(declareFunction(1, 2, 3));

declareFunction = 100;
fib = 200;
console.log(declareFunction);
console.log(fib);
factorial = 23;
console.log(factorial);

// console.log(factorial(200));      wont work because factorial is not a function anymore

const fibonacci = function (a){
    if (a === 0) return 0;
    if (a === 1) return 1;
    return fibonacci(a - 1) + fibonacci(a - 2);
}

console.log(fibonacci(10));

const expressFactorial = function (a){
    if (Math.floor(a) != a || typeof(a) != "number"){
        throw new Error("Invalid input for a factorial function. Input has to be a non-negative integer");
    }
    if (a === 0) return 1;
    if (a === 1) return 1;
    return a * expressFactorial(a - 1);
}


try {
    expressFactorial(10.2);
} catch (error) {
    console.log("yeah, you can only have  factorials for non negative integers.");
}

// console.log(expressFactorial(10.2));

// let randCheck = 10.4;
// console.log(Math.floor(randCheck));

// if (Math.abs(randCheck) !== randCheck)
//     console.log("randCheck is not integer");

try{
    expressFactorial("ten");
}
catch (error){
    console.log("Factorial function is only for non negative integers");
}

try{
    expressFactorial('yeah');
}
catch (e){
    if (e instanceof TypeError) console.log("Yeah this is just Error");
    // console.log("Factorial function is only for non negative integers");
    else console.log("Yeah this is some other Error");
}
finally{
    console.log(expressFactorial(10));
}

randCheck = new String();
console.log(randCheck instanceof String);


class Parent{
}
class Child  extends Parent{

}

let child = new Child()
console.log(child instanceof Child);
console.log(child instanceof Parent);

// const instance = 10;
// let name = "MyName";
// if (true) nmed = "This is my new name";
// console.log(name);