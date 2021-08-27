// functions that run once and disappear 
'use strict';

// const runOnce = function(){
//     console.log("This will never run again");
// };

// writing them like this without assigning it a variable

(function(){
    console.log("This function expression will never run again");
})();
// basically transforming the statement into expression with parenthesis
// using () at the end to call it (immediately invoked function expression)

( ()=>console.log("This arrow function will also never run again"))();
// basically closing a function expression in parenthesis and immediately invoking the function with () at the end

(function(){
    let rand = 10;
    console.log("Just assigned rand as 10");
})();
// console.log(rand);