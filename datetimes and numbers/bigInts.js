// big integers
// usually JS stores any number in 64bit (53 bits for value of the number and rest of the bits for sign, decimal point positions)
console.log(2 ** 53 - 1);   // is the biggest number JS can represent
console.log(Number.MAX_SAFE_INTEGER);       // anything beyond this will result in false values
console.log(Number.MAX_SAFE_INTEGER + 10);

// now from ES2020, a new primitive was introduced called bigInt
// u need to use 'n' at the end
console.log(8745157454154151578542145151245);
console.log(8745157454154151578542145151245n);  // bigInt
// can also use the BigInt() function

console.log(BigInt(44541451521521542105415));   //  this constructor function should be used only on smaller numbers for safety

// console.log(10000n + 10000);    // we can't  add a number of type bigInt to regular number (different types)
console.log(10000n + 10000n);

const randNum = 10;
console.log(20n * BigInt(randNum));

console.log(20n > 10) ;     // gives true
console.log(20n == 20);     // will be true
console.log(20n === 20);    // gives false
// because >, ==, < tries to type coerce the values 
console.log(typeof 20n);

console.log("rand" + 200n);     // same as the int
console.log(+'200n');       // doesn't work
// console.log(Math.sqrt(16n));    // can't do Math methods on BigInts

// divisions
console.log(10n / 3n);      //  will return the closest bigInt
console.log(10 / 3);
// console.log(BigInt(10.22));      // wont be possible because the value has to be an integer first to be a bigInt