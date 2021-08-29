// about map, filter, reduce methods

// .map() method
// maps returns back the array of exact structure by applying a function on each values of the array. Sort of like foreach method
console.log(["this", "is", "random", "usage", "of", "map"].map((item, i, arr) =>{
    return `${item.slice(0, -1)} is what you get when u take out the last letter of element no: ${i + 1} in array ${arr}`  
}));

// .filter() method
// we can apply filter for elements that satisfy a certain condition, the condition is set by using a callback function again
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(mov => {
    return mov > 0;     // we return a boolean value inside the filter call method and the elements that gives the boolean value will be returned
});

const withdrawals = movements.filter(mov => mov < 0);


console.log(movements);
console.log(deposits);
console.log(withdrawals);

// .reduce() method
// reduce is essentially boiling down all the elements of an array to one single value
// parameters of reduce, 1: Accumulator 2: Current element, 3: Current Index, 4: Entire array 
// after the function call, we give the initial value of the accumulator, it is defaulted to zero
const reduced = movements.reduce((acc, curr, i, arr) =>{
    console.log(`iteration no: ${i + 1}, accumulator: ${acc}`);
    return acc + curr;
}, 0);
// for each loop, this reduce function takes 'acc + curr' value as it's next accumulator value

const anotherReduced = movements.reduce((acc, curr) => acc + curr, 1000);   // will be 1000 more than reduced

console.log(reduced);
console.log(anotherReduced);

// using reduce method to get max value of movements array
const max = movements.reduce((acc, mov) => mov > acc? mov: acc, movements[0]);

const anotherMax = movements.reduce((acc, mov) => {
    console.log(`acc: ${acc}, mov: ${mov}, ${mov > acc? 'switching' : 'the same'}`);
    return mov > acc ? mov : acc;
}, movements[0]);
console.log(max);
console.log(anotherMax);


// challenge
let dogAges = [5, 2, 4, 1, 15, 8, 3];
// let dogAges = [16, 6, 10, 5, 6,  1, 4];
const humanAges = dogAges.map(age => age <= 2? 2 * age : 16 + age * 4);
console.log(humanAges);

const adultDogs = dogAges.filter(age => (age > 2 && 16 + age * 4) >= 18);
console.log(adultDogs);

const humanAdultDogs = adultDogs.map(age => 16 + age * 4);
const avgHumanAgeDog = humanAdultDogs.reduce((acc, age) => acc + age/humanAdultDogs.length, 0);
console.log(avgHumanAgeDog);

// using map and filter and reduce methods in a chain
const euroToUSD = 1.1;
console.log("Total deposit in Euros", movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0));

// called pipeline
const totalDepositInUSD = movements
    .filter(mov => mov > 0)
    .map(mov => mov * euroToUSD)
    .reduce((acc, mov) => acc + mov, 0);

console.log("Total deposit in USD", totalDepositInUSD);
console.log(5020 * 1.1);

