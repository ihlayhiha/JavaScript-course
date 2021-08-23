// for, foreach and while loops
for (let i = 0; i < 10; i++){
    // console.log("yeah I got this right right?", i);
}

const randArray = [
    "Ravi Teja",
    "Yella",
    2021 - 1994,
    "Teacher",
    ["Whatever", "this", "is"],
    true,
];

const types = [];
const anotherTypes = [];

for (let i = 0; i < randArray.length; i++){
    console.log(randArray[i], typeof randArray[i]);

    types[i] = typeof randArray[i];     // typeof function returns a string. This is just another way of storing strings into an empty array
    anotherTypes.push(typeof randArray[i]); // another way of doing the same thing
}
console.log(types);
console.log(anotherTypes);



randArray[10] = "this is at 10";    // randArray only has 6 elements, so it creates 4 empty items and assign the item at idx = 10 at the end
console.log(randArray);

// --------------------
const years = [1990, 2000, 2010, 2020];
const ages = []
for (let i = 0; i < years.length; i++){
    ages.push(2021 - years[i]);
    console.log(`Age of element no ${i} is : ${2021 - years[i]}`);
}
console.log(ages);

for (let i = 0; i < 10000; i++){
    ages.push(2021 - years[i]);
    if (i < years.length - 1)
        continue;
    break;
}
console.log(ages);

let collectStrings = [];
for (let i = 0; i < randArray.length; i++){
    if (typeof randArray[i] !== 'string'){
        continue;
    }
    collectStrings.push(randArray[i]);
}
console.log(collectStrings);

for (let i = randArray.length - 1; i >= 0; i--){
    if (typeof randArray[i] !== 'string') continue;
    console.log(randArray[i]);
}
console.log();


// while loop
let i = 0;
while (true){
    if (i >= randArray.length) {
        break;
    }
    if (typeof randArray[i] != "string") {
        i ++;
        continue;
    } 
    console.log(randArray[i]);
    i++;   
}

let dice = Math.floor(Math.random() * 7);
let count = 0;
while (dice !== 6){
    dice = Math.floor(Math.random() * 7);
    count ++;
    if (dice == 6) console.log("Congrats! Checking dice value again:" ,dice,"You got it in", count, "counts");
}
console.log("while loop ended");


let checkArray = [];
// randArray.forEach()
randArray.forEach( (element) => {
    console.log("This is getting looped");
    checkArray.push(element);
    return checkArray;
});
console.log(checkArray);


// another challenge

function printForecast(array){
    let finalString = "...";
    for (let i = 0; i < array.length; i++){
        finalString += `${array[i]} degrees C in ${i + 1} days...`
    }
    return finalString;
}

let arr = [17, 21, 23];
console.log(printForecast(arr));


for (let i = randArray.length - 1; i >= 0; i--){
    if (typeof randArray[i] === 'boolean') break;
    randArray.pop();
}

console.log(randArray);


let anotherArray = [];
let indexer = randArray.length;
randArray.forEach(function (element){
    indexer --;
    anotherArray[indexer] = element;
})
console.log(randArray);
console.log(anotherArray);

