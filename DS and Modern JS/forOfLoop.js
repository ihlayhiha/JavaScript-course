// using the for of loop
const  random = [1, 2, 3, 4 , 5, 1 ];

let index = 0;
for (const number of random) {
    console.log(number, index);
    index ++;
};

// foreach methods cannot use 'break' or 'continue' keywords because all foreach does is basically call a function for each element in the array. Cannot break a function .. so foreach cannot use 'break' or 'continue' just like we can't use break or continue in functions

random.forEach(number =>{
    if (number === 4){
        console.log("The number value is now 4, Initializing break ");
        // break;
    } else {
        // continue;
    }
    console.log(number);
});


// using for of loop for index
// we have to use the .entries() method on the array
for (const item of random.entries()){
    console.log(item);
};

console.log(random.entries());  // is an array iterator which has a nested array of [index, value] arrays

console.log(...random.entries()); // to spread all the items of the array iterable and analyse

const starterMenu = ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'];
const mainMenu = ['Pizza', 'Pasta', 'Risotto'];

const menu = [...starterMenu, ...mainMenu];
for (const item of menu.entries()){
    console.log(item[0] + 1, ":", item[1]);
}

// another  way of doing this using destructuring
for ([index, item] of menu.entries())
    console.log(index + 1, ":",item);
