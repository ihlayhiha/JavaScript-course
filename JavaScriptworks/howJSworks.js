'use strict';
// checking to see how JavaScript works
console.log(this);

const arrow = () => {
    console.log("This is an arrow function");
    console.log("This is 'this' inside arrow function", this);
}

arrow();


// if we use strict, 'this' property does not exist inside normal function expressions or functions declarations
function declaring(){
    console.log(this);  // will just return undefined
    console.log("This is normally declared function");
    console.log("'this' property does not exist inside these functions", this);
}

const expressing = function (){
    console.log(this);  // will just return undefined
    console.log("This is inside an function expression");
}

declaring();
expressing();

const dict = {
    name : "my name",
    email : "my email",
    birthYear : 1995,
    random : this,

    calcAge : function(){
        // this here refers to whatever object that this method  is called upon (here it's dict for now)
        return 2021 - this.birthYear;
    },

    // this isn't a normally declared or expressed function, so, 'this' exists and refers to the 'dict' object inside this function
    expressCheck : function () {
        console.log("*********************8");
        console.log(this);
    },
    
    // arrow functions do not have 'this' property. They just return whatever the parent object (the window in this case)
    arrowCheck : () =>{
        console.log("*********************8");
        console.log(this);
    },

}

console.log("--------------------------------------");
console.log("--------------------------------------");
console.log("--------------------------------------");

console.log(dict.calcAge()) ;
dict.expressCheck();
dict.arrowCheck();
// console.log(dict.random);


const anotherDict = {
    birthYear : 1000,
}
anotherDict.calcAge = dict.calcAge;
console.log(anotherDict.calcAge());


const test = function(){
    console.log(this);
}
test(); // will be undefined because 'this' does not exist in a normally declared or expressed function


console.log("--------------------------------------");
console.log("--------------------------------------");
console.log("--------------------------------------");

var x = 10;
let y = 10;
const z = 10;

console.log(x);
console.log(this.x);    // when we declare variables with 'var' keyword, they add to the main window as a property
console.log(y);
console.log(this.y);    // will be undefined because we defined it with 'let'
console.log(z);
console.log(this.z);    // will be undefined because we defined it with 'const'


console.log("--------------------------------------");
console.log("--------------------------------------");
console.log("--------------------------------------");


const random = {
    name : "yella",
    birthYear : 1995,
    
    randVar : function(){
        console.log(rand1);     // will give undefined because declaring as 'var' automatically initiates the variable and sets it to undefined until  we set a value. Will not be error.
        var rand1 = 10;
        console.log("assigned random variable using var", rand1);
    },
    
    randLet : function(){
        // console.log(rand2); // will give error unlike when we used 'var' because we didn't define it before calling it
        let rand2 = 10;
        console.log("assigned random variable using let", rand2);
    },
    
    randConst :  function(){
        // console.log(rand3);     // will give error unlike  when we used 'var' 
        const rand3 = 10;
        console.log("assigned random variable using const", rand3);
    }
}
// console.log(rand1);
random.randVar();
random.randLet();
random.randConst();


console.log("--------------------------------------");
console.log("--------------------------------------");
console.log("--------------------------------------");

var birthYear = 1999;

const fun1 = function (){
    console.log("This is function 1");
    var rand1 = 10;
    // return fun2();

    function fun2(){
        let rand2 = 20;
        return rand1 + rand2;
    };

    
    return fun2() + rand1;
};

const arrow2 = () =>{
    console.log("This is the arrow function");
    console.log(birthYear);
    console.log(this.birthYear);    // this will work because arrow function inherits 'this' from parent scope. (which is  window scope basically)
};
arrow2();


console.log(fun1());