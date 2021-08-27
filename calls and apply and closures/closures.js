// closures (one of the toughest things to understand in JS)

// we don't create new closures like a new array or a new function, they happen automatically


const secureBooking = function(){
    let passengerCount = 0;
    const check = "check this";
    return function(){
        passengerCount++;
        console.log("Passenger count:", passengerCount);
    };
};

const booker = secureBooking();
// a closure makes a function remember all the variables that existed at the tie of creation of the function (function's birthplace)
// any function always has the access to all the variables of the execution context in which the function was created, even after that execution context is finished and gone
// booker was born in the execution context of secureBooking function, hence it always has access to the variables in that environment (passengerCount and check, in this case) 
// the closure is then basically the variable environment attached to the function that was there at the time and place the function was created
// when we call the booker() function, JS looks for the variable 'passengerCount' in the closure of the function first, if it cannot find any variable as such, only then, JS will continue to look in the current global environment of the function
booker(); 
booker(); 
booker(); 

let passengerCount = 100;   // doesn't change anything because the JS first searches for variable 'passengerCount' in the function's closure first. 
booker();


// closure if a closed-over variable environment of the execution context in which the function was created, even after the execution context is gone
// we don't create closures, they just exist when a function is created. It's an internal property of a function
// we can check the closure using the dir() for a function

console.dir(booker);

// examples
console.log("".padStart(22,  "-"));

let f;
const check = 10;
const g = function(){
    const a = 23;
    let check = 20;
    f = function(){
        console.log(a * 2, ",", check);
    };
};


const h = function(){
    const b = 333;
    f = function(){
        console.log(b * 2, "function created during h");
    };
};


g();
f();        // will print check as 20 because it searches in it's closure first, closure only saves the execution context variables (a=23, check=20) in this case
console.log(check);  // will be 10 because can't access inner scope variables
console.dir(f);

h();
f();    // now f changes to function created during the execution context of 'h', so the variables it's closures stores are ('b' = 333)
console.dir(f);


// example 2, using Timer

const boardPassengers = function(n, wait){
    const perGroup = n/3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log("There are 3 groups, each with", perGroup, "passenger");
    }, wait* 1000)  // function to be executed and the time, the function executed after 1000 milliseconds (1 second)

    console.log("We will start boarding in", wait, "seconds");  // this will not wait till the timeout function finishes. This logs out immediately
};

boardPassengers(180, 3);

// using timer example
setTimeout(() => {
    console.log("This will appear after 1 second")
}, 1000);

// the only way the timeout function can delay the output is possible only because the closure can store execution context variables till the timeout finishes even after the 'boardPassengers' function is long gone.

// closure coding challenge

// let blueHeader;
(function(){
    const header = document.querySelector('h1');
    header.style.color = "red";

    document.querySelector('body').addEventListener('click', function(){
        header.style.color = "blue";
    });     // by the time we click, this one time function will be long gone but the eventListener's closure will still contain the variables here and use them
    

    // blueHeader = () =>{
    //     header.style.color = "blue";
    // };

})();

// document.querySelector('body').addEventListener('click', blueHeader);
