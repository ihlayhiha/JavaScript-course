let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-4, 4));
console.log(arr.slice()); // gives back full array, one way of making a shallow copy
console.log([...arr]);    // another way of making a shallow copy

// using .splice() method, changes the array
// console.log(arr.splice(2));   // gives back the slice from index = 2, changes the original array 
arr.splice(-1);
console.log(arr);   // will be the array after removing the splice (2) and splice(-1) 
arr.splice(1, 2)    // the 2 at the end = number of elements we want to take out. (we want to take out 2 elements beginning from 1)
console.log(arr);


// reverse() method, mutates the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
// reverse method mutate the original array
arr2.reverse();
console.log(arr2);

// .concat() method
const concat = arr.concat(arr2);
console.log(concat);
console.log([...arr, ...arr2]); // concat using the spread operator

// .join() method
console.log(concat.join("-"));

// .shift() method, removes the first element from the array
console.log(arr.shift());   // returns 'a' 
console.log(arr);         // same as .pop() but removes the first one instead
console.log(concat);