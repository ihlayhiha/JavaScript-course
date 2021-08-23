'use strict';

// one line if else statements
let result = true && true ? "Yeah this is true" : "Yeah this is false";

const check1 = "Check";
const check2 = new String("Check");
console.log(check1);
console.log(check1 instanceof String);
console.log(check2);
console.log(check2 instanceof String);



const friends = ["Pardhu", "Yella", "Sandeep"];
console.log(friends);
console.log(friends instanceof Array);


const years = new Array(1991, 1984, 2008, 2002);
console.log(years);
console.log(years instanceof Array);

console.log(friends[1]);
console.log(friends.toString());

// .length
console.log(friends.length);
friends[2] = "Adding this at idx 2";
console.log(friends);

let high = 100;
let low = 20;
const jonas = ["firstName", "lastName", high - low ];
console.log(jonas.length);

const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

let moreYears = [1000, 2000, 2001, 2002];
moreYears.forEach(element => {
    console.log(calcAge(element));
});

moreYears.forEach(element => {
    console.log(calcAge(element));
});

// basic array methods

// .push() method. Adds elements to the end of the array
friends.push("New friend");
console.log(friends);
// console.log(friends[-1]);  indexes that are negatives or >= length gives 'undefined' as result
console.log(friends.length);
const newLength = friends.push("Another friend");       // gives back the length of the array after adding new one
console.log(newLength);

let newFriends = friends;
console.log(newFriends);
friends.push("One more friend");    // both newFriends and friends arrays changes because arrays are reference types and only their hex's are stored in stack memory
console.log(newFriends);
console.log(friends);

// .unshift(arg) method. Provided with an argument, Adds that element at the beginning of the array
let finalLength = friends.unshift("First friend");      // gives back the length of the array after adding 'first friend' at the beginning
console.log(friends);
console.log(newFriends);
console.log(finalLength);

// .pop() method. The same
let lastOne = friends.pop();
console.log(lastOne);
console.log(friends);
console.log(newFriends);

// .shift() removes the first element of the array
let firstOne = friends.shift();
console.log(firstOne);
console.log(friends);
console.log(newFriends);

// .indexOf() gives back the index of given element 
let idxOf = friends.indexOf("Yella");
console.log(idxOf);
console.log(friends.indexOf("check this"));     // returns -1 if the element is not present in the array

// .includes() method. Returns boolean values if and whether the element is in the array
let randFriend = "Pardhu";
if (friends.includes(randFriend)){
    console.log(`Yay! ${friends[friends.indexOf(randFriend)]} is one of our friends!`);
}

friends.push(23);
console.log(newFriends.includes('23'));
console.log(newFriends.includes(23));

console.log(result);