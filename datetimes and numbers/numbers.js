// dealing with numbers
console.log(0.1 + 0.2);

console.log("check" + 2, typeof ("check" + 2));

console.log(typeof +"22", +"22");

console.log((10.22222).toFixed(2), typeof (10.222222).toFixed(2));

console.log(Math.round(10.6), typeof Math.round(10.6));

console.log((10).toFixed(2))  ;

console.log(Number.parseFloat("10.5555px"));
console.log(Number.parseInt("10px"));

console.log(Number.parseInt('90px', 10)) ;

console.log(isNaN('20'));   
console.log(isNaN(29));
console.log(isNaN(+'20px'));
console.log(isNaN(+'20'));
console.log(isNaN(20/0));

console.log(isFinite(23));
console.log(isFinite('2222'));
console.log(isFinite(+'2222'));
console.log(isFinite(parseFloat("23px")));

const randomInRange = (min, max) => Math.trunc(Math.random() * (max - min) + min);
console.log(randomInRange(10, 20));
const hundredRandoms = Array.from({length: 100}, () => Math.trunc(Math.random() * (10) + 1) + 10);
console.log(hundredRandoms);

console.log(+(2.356).toFixed(4));
console.log((2.3455).toFixed(4));

console.log(10 % 2);

const isEven = n => n > 0 && n % 2 === 0;
console.log(isEven(10));
console.log(isEven(-10));

console.log(Math.floor(10.4444));
console.log(Math.floor('10.4444'));         // Math.floor() automatically tries to parse the given string (does type coercion)
console.log(Math.floor('10.4444px'));

console.log(Math.round('100.34'));      // Math.round() also automatically tries to parse the input (does type coercion itself)