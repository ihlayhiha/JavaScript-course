const ordersSet = new Set([
    "Pasta",
    "Pizza",
    "Pizza",
    "Chapathi",
    "Pasta",
]);

console.log(ordersSet, typeof ordersSet);

console.log(new Set("yella"));

// .size is a property of the set. gives the size of the set
console.log(ordersSet.size);

// .has() methods checks if an element is in the set
console.log(ordersSet.has("Chapathi"));

// .add() method adds to the set, it changes the set
console.log(ordersSet.add("Garlic Bread"));     // calling add method does return a new set with added new element

// .delete() deletes an element from the set
ordersSet.delete("Chapathi");
console.log(ordersSet);

// there  is no way to retrieve elements from a set

// .clear() deletes all elements from the set

// iterating over the set
for (const order of ordersSet) console.log(order);

// conversion  from a set to an array
// const orderArray = new Array(ordersSet);   // doesn't work. It'll just make an array  with single set element instead 

const orderArray = [...ordersSet];      // using spread operator to spread out elements of the set and converting them to array
console.log(orderArray);

const randNums = [1, 2, 3, 4, 5, 3, 2, 5, 7,];
const numbers = new Set(randNums);
console.log(numbers);

console.log(randNums);
const uniqueNums = [...new Set(randNums)];
console.log(uniqueNums);