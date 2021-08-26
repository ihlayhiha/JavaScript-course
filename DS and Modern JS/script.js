'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order : function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};


// using destructuring

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// another way of writing this (called destructuring)
const [x, y, z] = arr;
console.log(x, y, z);


// working with the data from the restaurant
// let [first, second] = restaurant.categories;
// console.log(first, second);

let [main, , secondary] = restaurant.categories;   // to get the first and 3rd elements skipping the second one
console.log( main, secondary);    


// if we have to switch between main and secondary normally
const temp = main;
main = secondary;
secondary = temp;
console.log("switched", main, secondary);

// doing the switch using destructuring
[main, secondary] = [secondary, main]; 
console.log("switched again", main, secondary);

console.log(restaurant.order(2, 0));
// receiving 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 3, [5 ,6]];
const [first, , last] = nested;
console.log(first, last, last[1]);

// another way of destructuring a nested array is to match it's exact form
const [check, it, [out, bitch]] = nested;
console.log(check, it , out, bitch);

// what if we add more values that they exist in the array
const [i, j, k, l, m, n, o, p] = nested;
console.log(i, j, k, l, m, n, o, p);    // all values that don't exist are defaulted to undefined
// we can set default values to avoid being undefined if we want to
const [aa="yeah", bb="yeah", cc="yeah", dd="yeah", ee="yeah", f="yeah"] = nested;
console.log(aa, bb,  cc, dd, ee, f);
