'use strict';

const lufthansa = {
    airline : "Lufthansa",
    iatacode : "LH",
    bookings : [],

    book (flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`);
        this.bookings.push({flight: `${this.iatacode}${flightNum}`, name});
    },
};

lufthansa.book(239, "Ravi Teja Yella");
lufthansa.book(5489, "Random Name");
console.log(lufthansa); 

const eurowings = {
    airline : "Eurowings",
    iatacode : "EW",
    bookings : [],
};


const book = lufthansa.book;
console.log(lufthansa.book.name);   // gives back the name of the method
console.log(book.name); // gives back the name of the function

// book(204, "Another name");

// this doesn't work because lufthansa.book() had 'this' references to lufthansa. These references default to "undefined" because the copied function outside in the main Window does not have a 'this' reference
// we can avoid this problem by using "call" or "apply" or "bind" methods

// using .call() method
book.call(lufthansa, 430, "Cristiano Ronaldo");     // first argument  of the call method is whatever object the 'this' must refer to
book.call(eurowings, 430, "Lionel Messi");

const swiss = {
    airline : "Swiss Airlines",
    iatacode : "SA",
    bookings : [],
};

const newFlightData = [333, "Luka Doncic"];
book.call(eurowings, ...newFlightData);
book.call(swiss, 444, "Maria Index");

// using .apply() method. Same as call method but takes an array after the reference instead of values
book.apply(swiss, [399, "George Cooper"]);
book.apply(lufthansa, [385, "Paul Pogba"]);


const flightData = [355, "Didier Drogba"];
book.apply(lufthansa, [...flightData]); 
book.apply(lufthansa, flightData);



// using .bind() method. More important that .call() or .apply()    
// .bind() method does not immediately call the function. It just returns a new method with 'this' keyword reference set to the object desired

// book.bind(eurowings) // returns  a new function with keyword always set to eurowings
const bookEW = book.bind(eurowings);
bookEW(394, "Steven");
bookEW(3043, "Random Name");

const bookSW = book.bind(swiss);
bookSW(449, "Roger Federer");
bookSW(449, "Name You");

// we can also set the default parameters here
// called partial application. Basically means that parts of the arguments of the original function are partially applied already
const  bookEW23 = book.bind(eurowings, 23);
bookEW23("Myself");
bookEW23("Martha");
bookEW23("Spider Man");


// using it for event listeners
lufthansa.planes = 200; 
lufthansa.buyPlane = function (){
    this.planes++;
    console.log(this);
    console.log(this.planes);
};


const buyPlane = lufthansa.buyPlane;

// document.querySelector(".buy").addEventListener('click', lufthansa.buyPlane);    // doesn't work because inside the event listener, the 'this' keyword will point to the 'button' element because the method is called upon the button element.
// we are not calling the function lufthansa.buyPlane, we are merely registering the method there for addEventListener to call. So, the 'this' keyword will refer to which ever object is calling the method (in this case, the button)
document.querySelector(".buy").addEventListener('click', buyPlane.bind(lufthansa));
document.querySelector(".buy").addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// another example of partial application

const addTax = function(rate, value){
    return value + value * rate;
};

console.log(addTax(10/100, 200));

const addVAT = addTax.bind(null, 0.23);      // we use null to refer to this because we don't use 'this' keyword here anyway
console.log(addVAT(100));
console.log(addVAT(13));

// another way of doing it without using .bind() method
const addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));