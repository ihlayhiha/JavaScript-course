// trying out importing modules
import './shoppingCart.js';     // Is executed before any code in the rest of the importing module
import { addToCart, totalPrice, totalQuantity, randName as myName, tax } from './shoppingCart.js';
import * as ShoppingCart from './shoppingCart.js';  // importing whole module as a module object
import add, { cart } from './shoppingCart.js';        // how to import default exports
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

console.log("Importing module");

// console.log(shippingCost);   // won't work

addToCart('bread', 5);  
console.log(totalPrice, totalQuantity);
console.log("My name is "+ myName);
console.log(tax);

console.log(ShoppingCart);
ShoppingCart.addToCart('butter', 10);

console.log(add);
add('cookies', 200);

// imports are live-connections, what we import is merely references from export module
// if we mutate values here, the values change there as well, and vice-versa 
console.log(ShoppingCart.cart);
console.log(cart);

const state = {
    cart : [
        {product : "Banana", quantity : 10},
        {product : "Apple",   quantity : 20},
    ],

    user : { loggedIn : true},
};


console.log(state);

const stateClone = Object.assign({}, state);    // creating a shallow clone
const stateDeepClone = cloneDeep(state);
// cloneDeep from lodash makes a deep clone that doesn't mutate when u mutate the original object

state.user.loggedIn = false;

console.log(stateClone.user.loggedIn);
console.log(stateDeepClone.user.loggedIn);

