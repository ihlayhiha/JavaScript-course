// sorting arrays

const randStrings = ["one", "two", "three", "four"];
// .sort() method mutates the array
console.log(randStrings.sort());
console.log(randStrings);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// we can't use .sort() method directly on number values,

console.log(movements.sort());
// when we use .sort() without call function, JS engine converts elements to strings and then sorts them like they are strings

// While giving call back values for sort......   .sort((a, b) => ...)
// for ascending sorted list 
// (a, b) => neg values-------> Do Not Switch
// (a, b) => pos values-------> Switch positions
movements.sort((a, b) => a - b);    //  if a > b, we switch positions of a and b
console.log(movements);

descendingMovements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for descending sorted list
// (a, b) => pos values -------> Do Not Switch
// (a, b) => neg values -------> Switch positions
console.log(descendingMovements.sort((a, b) => b - a));