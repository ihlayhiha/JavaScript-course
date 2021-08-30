// timers 
// 2 types of timers. 
// 1: SetTimeOut timer basically runs once after a define time, 
// 2: setIntervalTimer runs forever until we stop it

// this mechanism or function put on a timeout while the rest of the code complies is called : ASYNCHRONOUS JavaScript
setTimeout(()=>{
    console.log("Here's your first pizza!");
}, 2000);
console.log("Waiting for my pizza...");

// all the arguments we passed to the setTimeOut function after the delay '2000' will be arguments for the function

setTimeout((ing1, ing2) => {
    console.log(`Here's your second pizza with ${ing1} and ${ing2}!`)
}, 4000, "olives", "spinach");
console.log("Waiting for my second pizza....");

// we can cancel the timeout before the delay has passed
const ingredients = ["olives", "spinach"];
setTimeout(() => {
    console.log(`Here's your third pizza with ${ingredients.join(" & ")}`);
}, 6000, ...ingredients);
console.log("Waiting for my third pizza...");



// clearing the timeout
const pizzaTimer = setTimeout((ing1, ing2) => {
    console.log(`Here's your fourth pizza with ${ing1} and ${ing2}`);
}, 8000, ...ingredients);
console.log("Waiting for my fourth pizza...");

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);  // deletes the timer if executed before the delay passed



// SET INTERVALS
// when we want the function to run over and over again for whatever time span 
// for example, creating a clock with set interval function
setInterval(() => {
    const now = new Date()
    console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}, 1000);
// for every second, the function prints the current date every second
