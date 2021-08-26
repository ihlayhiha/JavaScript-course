// using optional chaining
const restaurant = {
    name: "Classico Italiano",
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        },
    },

    order : function (starterIndex, mainIndex){
        return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

console.log(restaurant.openingHours.mon);


// if we want to check opening hours without raising errors using normal if methods
if (restaurant.openingHours.mon)  console.log(restaurant.openingHours.mon);
if (restaurant.openingHours.fri)  console.log(restaurant.openingHours.fri.open);

// doing the same with optional chaining to avoid error 
// WITH optional chaining
console.log(restaurant.openingHours.mon?.open)    // added a question mark before open to check. If mon doesn't exist (undefined or null), undefined is returned immediately and code stops there.
console.log(restaurant.openingHours.fri.open);

// if we want to have optional  chaining check for more properties in a statement
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours?.fri?.open);    // as soon as it gets undefined or null value, the expression stops there and returns undefined

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of weekDays){
    console.log(day, ":", restaurant.openingHours[day]?.open);  // we use [day] because it's a string and can't be called as a property
}

for (const day of weekDays){
    let open = restaurant.openingHours[day]?.open;
    open? console.log("opened on", day, "at", open) : console.log('We are closed on', day);
}

for (const day of weekDays){
    const open = restaurant.openingHours[day]?.open ?? "Closed";
    console.log(day, "status: ", open);
};

console.log(restaurant.orderPizza?.(1, 3) ?? "This method doesn't exist");
console.log(restaurant.order?.(2, 3));

// optional chaining works on properties, methods and even  on arrays
const rand = [1 , 2, 3, 4];
console.log(rand?.[10] ?? "index 10 doesn't exist in this array");
console.log(rand?.[3] ?? "Index 3 does not exist in this array");
console.log(restaurant.orderChicken?.(1, 9) ?? "Yeah u can't buy chicken from here. We do have items that contains chicken");
console.log(rand?.[100] ?? "mate  the array isn't that long");

console.log(rand.isFingerOf?.(10) ?? "isFinger of is not a method of arrays");
console.log(rand.isIndexOf?.(3) ?? "isIndexOf is not a method of arrays");
console.log(rand.indexOf?.(2) ??  "indexOf is not a method of this array");

const empty = [];
console.log(empty?.[0] ?? "yeah this list is empty af");

const word = "this is a sentence";
const [...letters] = word;
console.log(...word);   // prints out all  letters in word separated by spaces
console.log(letters);   // list of all letters in word

for (const key of Object.keys(restaurant)) {
    console.log(key, "type:", typeof key);
}
// Object.keys(restaurant) gives back a list of keys that are all strings

for (const day of Object.keys(restaurant.openingHours)) console.log(day, "type:", typeof day);

for (const [day, {open, close}]  of Object.entries(restaurant.openingHours)) console.log(day, "open:", open, "close:", close);
