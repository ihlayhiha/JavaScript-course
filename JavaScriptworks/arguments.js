// about the number of arguments for a function

// using 'arguments' keyword
const addExpr = function(a, b){
    console.log(arguments);
    console.log(typeof arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 8 , "whatever", [1, 2, 3]);

var addArrow = (a, b) => {
    // console.log(arguments);      // arguments keyword only exists in function expressions and declarations. It doesn't exist in arrow functions
    return a + b;
};

addArrow(2, 4);
// addArrow(2, 4, 8);