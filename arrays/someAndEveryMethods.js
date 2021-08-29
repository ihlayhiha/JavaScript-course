// .some() and .every() methods
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.includes(200));

// with includes, we can essentially test and check if an array includes an element
// with .some() we can check a condition instead
// want to know if there is any number > 0 in this movements for example

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);
const anyDepositAbove5000 = movements.some(mov => mov > 5000);
console.log(anyDepositAbove5000);
console.log(movements.some(mov =>  mov === 200));

// .every() method. Returns the boolean value if every element of the array satisfies the given conditions
console.log(movements.every(mov => typeof mov === 'number'));   // all elements are numbers
console.log(movements.every(mov => mov < 3000));    // one element is = 3000

const checkNumber = function(element){
    return typeof element === 'number';
};

const checkDeposit = function(element){
    return element > 0;
};

// call back functions automatically take the element as it's argument?
console.log(movements.some(checkNumber));
console.log(movements.every(checkNumber));
console.log(movements.filter(checkNumber));
console.log(movements.some(checkDeposit));
console.log(movements.every(checkDeposit));
console.log(movements.filter(checkDeposit));
// if we have to check too many methods with same conditions, we can write them separately and call it into the method
