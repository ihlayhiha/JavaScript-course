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


// using and and or for  short circuiting
// if everything is falsy value, the \\ operator simply returns whatever is at the end

console.log(3 || "next to 3");      // will  return 3 because 3  is a  truthy value unlike 0
console.log(false || "next to false");
console.log(0 || "next to 0");
console.log("" || "next to empty string");
console.log(0 || "");   // returns "" as "" is at the end

console.log([] || "next to empty list");    // will be the empty array because empty array is still truthy value
console.log({} || "next to empty object");  // will be the empty object because empty object is still truthy value
console.log(undefined || "next to undefined"); // undefined is a falsy value
console.log(null || "next to null");    // null and undefined are both falsy values
console.log(undefined || null);         // will return null, undefined is a falsy value, null is at the end .
console.log(null || undefined);         // will return undefined, undefined is a falsy value at the end .
console.log(undefined || null || 0 || "");         // returns nothing, "" is at the end 
console.log(undefined || 0 || "" || null);         // will return null, null is at the end

const randList =  [];
console.log(randList || "next to randList");
let random;
console.log(random || "next to randomly declared variable that doesn't have a value assigned");



const checkGuests = restaurant.guests? "Yes there are guests" : "No, u don't have any guests yet";
console.log(checkGuests);


// && operator
// && operators works exactly the reverse of || operator
// checks if the first value is falsy and returns first value if it's falsy

console.log(0 && "random");
console.log(100 && "random");
console.log("random" && null);
console.log(undefined && null);   // checks first one, if falsy, function stops and returns the value, so result = undefined
console.log(null && undefined);   // checks first, null is falsy, returns null instantly
console.log(0 && null);           // 0
console.log(10 && null || undefined);   // will be undefined because it checks between null and undefined