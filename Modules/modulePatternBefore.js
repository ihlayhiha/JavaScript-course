// main goal is to encapsulate functionality to have private data and to expose public API
// we usually write IIFE to make sure it's only called once and return what we want to be the public API

const ShoppingCart2 = (function(){
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 222;
    const totalQuantity = 32;

    const addToCart = function(product, quantity){
        cart.push({product, quantity});
        console.log(`${quantity} ${product} has been added to the cart`);
    };

    const orderStock = function(product, quantity){
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart,
        cart,
        totalPrice, 
        totalQuantity,
    };
})();


// the function basically runs once and returns the exposed API's to the variable above
// Whenever we mutate it, the module also changes as this is a live connection 
// live connection because, remember 'closures'. Closures store the all the variables when the function first executes in the execution context
// We may or may not have access to these variables depending on the 'return ' but the variables still get mutated when something changes 
// this is a way of mirroring how importing and exporting modules work using function in the same module
ShoppingCart2.addToCart('banana', 2);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);    // will be undefined
console.log(ShoppingCart2.cart);

// We can mutate the variables by accessing the exposed API's
ShoppingCart2.cart.push({"more banana": 10});
console.log(ShoppingCart2.cart);

ShoppingCart2.addToCart('banana', 2);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2.cart);

// const check1 = 'check1';
// const check2 = 'check2';
// const obj = {check1, check2};
// console.log(obj);
