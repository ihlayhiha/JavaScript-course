// Common JS modules are mostly used in Node.js (barring recent changes to ES6 modules)
// Common JS modules are another type of modules we can use instead of ES6 modules

// almost all the modules in the npm repository still use the Common JS module system
// NPM was originally only intended for Node, which mostly uses Common JS module system


// Using commonJS system to import and export

// To export pattern
export.addToCart = (product, quantity)=> {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} was added to the cart`);
};

// this won't work in the browser but it would work in Node js
// Node js is where JS runs outside the browser


// to Import pattern
const { addToCart } = require('./shoppingCart.js');
