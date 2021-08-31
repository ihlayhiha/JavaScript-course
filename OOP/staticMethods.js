// methods that are in the same namespace of the constructor (class)
// like Array.from() or Math.round() etc

// defining static methods for both constructor functions and classes\

const PersonConstructor = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
};

const meCons = new PersonConstructor("yella", 1995);
console.log(meCons.birthYear);

// static method on this constructor
PersonConstructor.hey = function(){
    console.log("Hey there!");
    console.log(this);
};

PersonConstructor.hey();

// defining a class
class Person {
    constructor (firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // static method 
    static hey (){
        console.log("Hey there! This is class called", this.name);
        console.log(this);
    }
};

const me = new Person("yella", 1995);
Person.hey();


// challenge 2
class Car {
    constructor (make, speed){
        this.make = make;
        this.speed = speed;
    }

    get speedUS (){
        const temp = Number.parseFloat(this.speed);
        return (temp / 1.6) + " mi/h"; 
    }

    set speedUS(value) {
        const temp = Number.parseFloat(value);
        this.speed = 1.6 * temp + " km/h";
    }

    accelerate(){
        let temp = Number.parseFloat(this.speed);
        temp += 10;
        this.speed = temp + " km/h";
        console.log(`${this.make} going currently at ${this.speed}`);
    }

    brake(){
        let temp = Number.parseFloat(this.speed);
        temp -= 5;
        this.speed = temp + " km/h";
        console.log(`${this.make} going currently at ${this.speed}`);
    }

}

const car1 = new Car("Ford", "120 km/h");
console.log(car1);
console.log(car1.speed);

console.log(car1.speedUS);
car1.speedUS = "120 mi/h";
console.log(car1);
console.log(car1.speed);
console.log(car1.speedUS);

car1.accelerate();
car1.brake();
