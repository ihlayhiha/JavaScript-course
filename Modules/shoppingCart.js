// trying out exporting modules
console.log("Exporting module");

const shippingCost = 10;
export const cart = [];        // variables declared here are scoped into this module, will not be available unless we export

// exports, Named exports and default exports

// exports always should be top level code, cannot export from a scoped block
export const addToCart = (product, quantity)=> {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} was added to the cart`);
};

// Named exports for multiple exports at the same time
const totalPrice = 233;
const totalQuantity = 23;

export { totalPrice, totalQuantity };

const taxCost = 20;
const randName = "Yella";

export { randName,  taxCost as tax};


// Default exports
// We use default export when we want to export only one thing from the module
// default export doesn't have a name. When u import the module, u give  the name to it
// obviously only one default export for one module

export default (product, quantity)=> {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} was added to the cart`);
};

