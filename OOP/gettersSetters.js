// using getters and setters for classes and objects
const account = {
    name :  'Jonas',
    movements : [200, 405, 483, 400],

    get latest() {
        return this.movements.slice(-1).pop();  // slice to create a shallow copy because we don't want to change the movements 
    },

    set latest(value) {
        this.movements.push(value);
    },
};

console.log(account.latest);
account.latest = 200;
console.log(account.movements);

// using it for classes
class Person {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(2021 - this.birthYear);
    }

    get age(){
        return 2021 - this.birthYear;
    }

    // set a property that already exists
    set fullName (name) {
        console.log(name);
        if (name.includes(" ")) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName(){
        return this._fullName;
    }

    // set a property that doesn't exist ** automatically creates a property and from then on, the same as before
    set likes(rand) {
        this._likes = rand;
    }

    get likes(){
        return this._likes;
    }
}

const me = new Person("Ravi Teja Yella", 1996);
console.log(me);
console.log(me.__proto__);
console.log(me.age);
me.calcAge();

console.log(me.fullName);
console.log(me);

me.likes = "Taylor Swift";
console.log(me.likes);

const walker = new Person("Walter White", 1000);
console.log(walker);
console.log(walker.fullName);