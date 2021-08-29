// we can use find method to return one element of the array based on a condition in the call back function
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// just like filter method, find method also requires a boolean 
console.log("First withdrawal:", movements.find(mov => mov < 0));    // returns the first element that satisfies this condition  
console.log("Check find with no condition", movements.find(mov => mov === 100));    // will return undefined
movements.find(mov => mov === 200)? console.log("Yeah 200 is an element in this array") : console.log("Pussyo fam");
