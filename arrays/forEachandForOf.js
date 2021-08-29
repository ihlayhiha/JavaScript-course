const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


// looping over an array using the .foreach() method
// foreach() method always calls a function with 3 parameters, 1: Value of the element, 2: Index of the element, 3: Entire Array
movements.forEach((check, i, array) =>{
  // console.log(array);
  if (check < 0) console.log("Movement", i + 1,"Withdrew", Math.abs(check));
  else console.log("Movement", i + 1, "Deposited", check);
});


console.log("".padStart(33, "-"));

// another way to write this using for of loop
for (const [index, check] of movements.entries()){
  if (check < 0) console.log("Movement", index + 1, "Withdrew", Math.abs(check));
  else console.log("Movement", index + 1, "Deposited", check);
};

// in foreach, the first value is the current element and the second value is the index,
// in for of loop, when u use entries, the first value will be the index and the second value will be the current element
// continue and break statements do not work on a foreach loop

// foreach with maps and sets
// const list = [[1, 2], [3, 4],[ 33, 4]];
// const rand = new Map(list);
// console.log(rand);
const currencies = new Map([
    ['USD', "United States Dollar"],
    ['EUR', "Euro"],
    ['GBP', "Pound sterling"],
]);

console.log(currencies);

// the three arguments here 1 : current value, 2 : current key, 3 : total map
currencies.forEach((value, key, fullMap) => {
    console.log("Value:", value, "Key:", key);
});

// using foreach with a set
const randSet = new Set([1, 2, 3, 4, 5, 6, 1, 3]);
console.log(randSet);

// the arguments DOES NOT have index value, it'll be the same as element value
// if we pass the variable for index, it'll return the same value as the element 
randSet.forEach((element, undefined, fullSet) => {
    console.log(element, "full set:", fullSet);
});
