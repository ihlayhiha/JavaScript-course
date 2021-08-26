'use strict';
function check(){
    "yeah sure now the tab works"
    
}
console.log(check(0));

// console.log(0??100) ;

const random = [1, 2 , 3,4];
const [a,b, ...others] = random;

const what = random.includes(2)? "true": "false";
console.log(what);

console.log(random.slice(1, 3));

const odds = {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
};
console.log(odds);

for (const [team, value] of Object.entries(odds)) console.log(team, ":", value);

odds?.[199] ?? console.log("yeah this ones shit");

let s = "team1";
console.log(odds?.[s] ?? console.log("yeah this ones shit"));