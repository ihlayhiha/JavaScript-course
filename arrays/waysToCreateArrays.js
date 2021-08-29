// ways to create and fill arrays
const arr = [1, 2, 3, 4];
const newArr = new Array(1, 2, 3, 4 ,5);
console.log(new Array(9));      // will be an array of 9 empty items
console.log(new Array(10).filter(item => item));    // removing items that are 'undefined' which is basically an empty array
console.log(newArr);

// programmatically generating arrays (without having to define all items manually)
const x = new Array(7);     // array of 7 empty items
// one method we can call on this empty array is .fill() method

x.fill(7);      // entire array filled with 7
console.log(x);

const y = new Array(3);
y.push(10);
console.log(y);
console.log(y.fill(20));        // doesn't matter if the array has empty of occupied places, .fill() fills up the whole array

const z = new Array(10);
z.fill(1, 3, 5);    // 1: value to fill,  2: begin parameter, 3: End parameter, index of end element. (final index is not gonna be included in the array)
console.log(z);
console.log(z.fill("sure", 0, 3));

// using ArrayFrom() function to fill arrays from exists arrays
const xx = new Array(10);

// we provide the length of the array using length property in object and then give a callback function to return what elements we want to get filled with
const anotherArr = Array.from({length: 7}, () => 1);    
console.log(anotherArr);

const oneMoreArr = Array.from({length: 7}, (curr, index) => index + 1);     // also has the same parameters for callback function like foreach or map methods
console.log(oneMoreArr);

const evenMore = Array.from({ length: 7}, (_, i) => i + 1);     // '_' underscore is usually used as a throw away variable, we can also use 'undefined'
console.log(evenMore);

const hundredDiceRolls = Array.from({ length: 100}, () => Math.trunc(Math.random() * 6) + 1);
console.log(hundredDiceRolls);

// more uses of Array.from() function
// we can produce arrays from array-like iterables such as .querySelectorAll()  nodeLists by using Array.from() function

const fromArray = Array.from(new Array(10), () => 2);
console.log(fromArray);

const fromObject = Array.from({ name: "My name", age: 30, length: 10}, ()=> Math.trunc(Math.random()));
console.log(fromObject);    // the object must  have a property called length to generate a new array with length. or else, array will be defaulted length=0

const fromAnotherArray = Array.from([1, 2, 3, 4, 5], (val, i) => Math.trunc(Math.random() * i) + 1);
console.log(fromAnotherArray);

const newArray = Array.from([1, 2, 3, 4, 5], (val, i) => [val, Math.trunc(Math.random() * i) + 1]);
console.log(newArray);
