class Person {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge (){
        console.log(2021 - this.birthYear);
    }

    get age(){
        return 2021 - this.birthYear;
    }
};

const  randPerson = new Person("rand", 1990);
console.log(randPerson.age);

class Student extends Person {
    constructor(fullName, birthYear, course){
        super(fullName, birthYear);
        this.course = course;
    }

    introduce (){
        console.log("Hi, this is a student");
    }
};

const newStudent = new Student('yella', 1995, "CS");
console.log(newStudent);
console.log(newStudent.fullName);
console.log(newStudent.age);