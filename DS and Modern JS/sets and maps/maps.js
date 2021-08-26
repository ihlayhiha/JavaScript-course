// lot more useful than sets
// just like objects, the big difference is that in maps, the keys can be of ANY type
// in objects, the keys are basically almost always strings, but in maps, they can be of any data type

const rest = new Map();     // easiest way to create a map
// to fill up the map, we can use .set() method

rest.set(1, 100);       // calling the set method like this does return a new set, i.e u can print it down and also allows us to chain
console.log(rest);      
console.log(rest.set("name", "Classico Italiano"));

console.log(rest.set([1, 2], "This is mapped from a list"));

rest.set("categories", "Chaining1").set("Another categories", "Chaining2").set("Another another categories", "chaining3");
console.log(rest);

// to read data from a map, we use .get() method
console.log(rest.get("Another another categories"));

// using optional chaining to check properties in maps
console.log(rest.get?.("Another categories") ?? "Yeah this key isn't there in the map");
console.log(rest.get?.("Checking is this works") ?? "Yeah this key isn't there in the map");

// .has() if the map contains a certain key
rest.has("Another categories")? console.log("Yes it's there"):  console.log("No it isnt");

// .delete() 
rest.delete("Another another categories");
console.log(rest);

// .size property on maps. Returns the no of properties
console.log(rest.size);

// .clear() clears everything from the map