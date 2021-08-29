// .flat() and .flatMap() methods

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
const arr2 = [[1, [2, 3]], [4, [5, 6]], 7, 8];

// default flat depth = 1. Only flats nested array of one depth
console.log(arr.flat());   // flat depth is how many nested arrays we want to flatten
console.log(arr2.flat());   // === console.log(arr2.flat(1))
console.log(arr2.flat(2));  

// .flatMap() is basically .flat() and map () combined. Takes an array, maps it and then flats it to 1 depth