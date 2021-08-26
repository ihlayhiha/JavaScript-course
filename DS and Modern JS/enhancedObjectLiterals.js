// closer  look at enhanced object literals

const weekDays = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

const openingHours = {
    // thu: {   // using the enhanced string literal instead of writing it literally
    [weekDays[3]]: {
        open: 12,
        close: 22
    },
    [weekDays[4]]: {
        open: 11,
        close: 23
    },
    sat: {
        open: 0,
        close: 24
    },
};


const restaurant = {
    name: "Classico Italiano",
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // order  : function (starterIndex, mainIndex){
    //     return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // we can write it more easily like this
    order (starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];      // don't need to create the property and then define the function keyword
    },

    // openingHours: hours,      // old way of adding object literals
    
    // can also do the same with ES6 enhanced object literals. We can just call openingHours/hours as a property
    openingHours,
};


console.log(restaurant);
console.log(restaurant.order(1, 2));
console.log(openingHours);

// ES6 enhanced object literals
// 1. we can add the object literal directly without needing to define it as a property first. JS does that for you
// 2. we don't need to create the property for method and then set it to some function expression, we can just write it in an easier way without defining the property or the function keyword
// 3. we can now compute  (calculate) property names instead of writing them manually
