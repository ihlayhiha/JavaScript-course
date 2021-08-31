'use strict';
// OOP
const h1 = document.querySelector('h1');
console.log(h1);

console.dir(h1);


//  challenge
// Using a constructor function to implement a car
const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
    console.log(`This is a ${this.make} car, currently going at ${this.speed}`);
};
Car.prototype.accelerate = function(){
    let calcSpeed = Number.parseFloat(this.speed);
    calcSpeed += 10;
    this.speed = calcSpeed + " km/h";
    console.log(`Car is now going at ${this.speed}`);
};
Car.prototype.brake = function(){
    let calcSpeed = Number.parseFloat(this.speed);
    calcSpeed -= 5
    this.speed = calcSpeed + ' km/h';
    console.log(`Car is now going at ${this.speed}`);
};

const car1 = new Car('BMW', '120 km/h');
const car2 = new Car('Mercedes', '95 km/h');

console.log(car1 instanceof Car);
console.log(car1);

car1.accelerate();

console.dir(car1);

console.log(car1.__proto__);
console.log(car1.__proto__.__proto__);

// Using 'class' in JS. 

class PersonCl {
    constructor (firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // methods will be added to .prototype() property
    calcAge() {
        console.log(2021 - this.birthYear);
    }

    sayHello() {
        console.log(`Hello! This is ${this.firstName}`);
    }
};

const yella = new PersonCl("Yella", 1995);
yella.calcAge() ;
console.log(yella);
console.dir(yella);

console.log(yella.__proto__ === PersonCl.prototype);
console.log(yella.__proto__);

PersonCl.prototype.greet = function(){
    console.log(`Hey ${this.firstName}`);
};
yella.greet();
yella.sayHello();


// 1. classes are NOT hoisted, so we can't use them before declaring them
// 2. classes are also first class citizens like functions (we can ask them into functions and also return them from functions)
// 3. body of a class is always executed in 'strict' mode even when we didn't activate it in the script

