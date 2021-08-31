// inheritance for both constructors and classes
const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.shit = function(){
    console.log("I've shit myself");
};

Person.prototype.calcAge = function()   {
    console.log(2021 - this.birthYear);
}

const Student = function(firstName, birthYear, course){
    Person.call(this, firstName, birthYear);
    this.course = course;
};

Student.prototype = Object.create(Person.prototype);    // making Student.prototype inherit from Person.prototype first and then we can add our own methods to the Student prototype
// Student.prototype = Person.prototype     // shouldn't do this because, this suggests that we want both prototypes to be the same object instead of behaving similarly

Student.prototype.introduce = function(){
    console.log(`Hello! I'm ${this.firstName}, I'm doing ${this.course} course`);
};


const rand = new Person("rand", 1999);
rand.shit();
const randStudent = new Student("Rand student", 1999, "Computer Sciences");
randStudent.introduce();
randStudent.shit();

// prototype chain
// Object.prototype -> Person.prototype -> Student.prototype (we can modify student prototype after inheriting if we want to)

console.log("".padStart(50, "*"));

console.log(rand.__proto__);
console.log(randStudent.__proto__);
rand.shit();

console.log(randStudent instanceof(Student));
console.log(randStudent instanceof(Person));
console.log(Student.prototype.constructor);

Student.prototype.constructor = Student;

console.log(randStudent instanceof(Student));
console.log(randStudent instanceof(Person));
console.log(Student.prototype.constructor);

const newStudent = new Student();
console.log(newStudent instanceof(Student));
console.log(newStudent instanceof(Person));

// we linked prototypes together, so  every instance of Student class will be an instance of Person class as well


//  Challenge

const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
};

const EV = function(make, speed, batteryPercent){
    Car.call(this, make, speed);
    this.type = "electric";
    this.batteryPercent = batteryPercent;
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is now moving at ${this.speed} km/h`);
};

EV.prototype = Object.create(Car.prototype);

const tesla = new EV('Tesla', 100, 50);
console.log(tesla.type);
console.log(tesla instanceof Car);

EV.prototype.chargeBattery =  function(chargeTo){
    this.batteryPercent = chargeTo;
};

EV.prototype.accelerate = function (){
    this.speed += 20;
    this.batteryPercent -= (this.batteryPercent/100);
    console.log(`${this.make} is now moving at ${this.speed} km/h, battery percent: ${this.batteryPercent}`);
};


const newCar = new Car('Ford', 100);
newCar.accelerate();


tesla.chargeBattery(20);
console.log(tesla.batteryPercent);
console.log(tesla)
tesla.accelerate();
tesla.accelerate();


console.log("".padStart(40, "*"));
/// Inheritance with classes

class PersonCl {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(2021 - this.birthYear);
    }

    greet(){
        console.log("Hey there!");
    }

    get age(){
        return (2021 - this.birthYear);
    }
};

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course){
        // should always call super() first before others
        super(fullName, birthYear);
        this.course = course;
    }

    introduce(){
        console.log(`Hi. I'm ${this.fullName}, doing ${this.course} course`);
    }
}

const clsPerson = new PersonCl("Person", 1995);
console.log(clsPerson.fullName);
console.log(clsPerson.birthYear);
console.log(clsPerson.age);
clsPerson.calcAge();


console.log("".padStart(40, "*"));
const clsStudent = new StudentCl("Yella Ravi Teja", 1995, "Computer Sciences");
console.log(clsStudent.fullName);
console.log(clsStudent.birthYear);
console.log(clsStudent.course);
clsStudent.calcAge();
clsStudent.introduce();
console.log(clsStudent.age);

console.log(clsStudent instanceof(PersonCl));