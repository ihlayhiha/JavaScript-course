// Dates and Times

// first we need to actually create a date. 4 ways to create a date

// 1: Using Date class
const now = new Date();
console.log(now);

// 2: Parse a date from a given string, passing the string into the same Date() constructor
const wasNow = new Date('Aug 30 2021 11:06:52');
console.log(wasNow);
console.log(new Date("december 24, 2015"));
console.log(new Date(2044, 10, 15, 23, 22, 21));    // month in JS is 0 based. 10 - November
console.log(new Date("Nov 31"));    // if nov 31  doesn't exist, it'll give Dec 1st

console.log(new Date(0));       // Unix time, Jan 1st 1970
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days (in milliseconds) since the Unix time


console.log("".padStart(100, "*"));
// working with dates

const future = new Date(2044, 10, 15, 23, 22);
console.log(future);

// .getFullYear(), .getMonth(), .getDate() , .getDay() , .getHours() , .getMinutes() , .getSeconds() methods
console.log(future.getFullYear());  // year
console.log(future.getMonth());     // month (0 - based, i.e. Nov = 10)
console.log(future.getDate());      // date
console.log(future.getDay());       // day of the week (0- based, 0: Sunday, 6: Saturday)
console.log(future.getHours());     // hours
console.log(future.getMinutes());   // minutes
console.log(future.getSeconds());   // seconds

// .toISOString gives a string of a date that follows the international standards
console.log(future.toISOString());      // z at the end represents UTC time

// .getTime() gives the milliseconds since Unix time
console.log(future.getTime());
const timeSpan = future.getTime();
console.log(new Date(timeSpan).toISOString());

// time stamp for right now
console.log(Date.now());

// we can also .set..() all these values
future.setFullYear(2050);
console.log(future);

// operations with dates
console.log(future);
// if we convert 'future' into a number, we get the time span in milliseconds since Unix
console.log(Number(future));
console.log(+future);

const anotherFuture = new Date(+future + 2000000);
console.log(anotherFuture);
console.log(anotherFuture - future);

const daysPassed = (days1, days2) => (days2 - days1)/(1000 * 60 * 60 * 24);
console.log(daysPassed(future, anotherFuture));

console.log(daysPassed(new Date("Jan 31, 2021"), new Date("Mar 31, 2021")));
console.log(new Date("jan 31"));    // year wil default to 2001
console.log(new Date("jan 31, 2021"));    

// for complex purposes, there's a library  called 'moment.js'
