// copying objects

const me = {
    name : "ravi teja yella",
    age : 25,
    school : "whatever",
    status : "sure",
    randList : [1, 2, 3],
}

const random = me;

me.age = 26;

console.log(random);

let check = {};

Object.assign(check, me);
console.log(check);

const another = Object.assign({}, me);
console.log(another);

me.name = "me";
// console.log(me.name);
// console.log(another.name);
// console.log(check.name)

console.log(Object.keys(me));
console.log(Object.values(me));

// changing primitive type doesn't effect other copies
another.name = "another";
console.log(me.name);
console.log(another.name);
console.log(check.name)


// changing non primitive types effects  others copies as well
// adding new elements to the list changes every list in every copy because they all think the lists are the same
// Object.assign only creates shallow copies and not real copies that aren't related to each other
another.randList.push("another");
console.log(me.randList);
console.log(check.randList);
console.log(another.randList);


// adding  new property doesn't effect all shallow copies
another.adding = "new property";
console.log(me);
console.log(another);


// changing non primitive types however changes every copy value
another.randList.push(100);
console.log(me.randList);
console.log(check.randList);
console.log(another.randList);

// basically all the copies have a property called 'randList' that points to some object (array) in heap memory
// just like all copies have property called 'name' that points to primitive type value (string) in call stack memory
// when u change 'name' of one copy, a new memory slot is created for the particular copy
// when u change 'randList', it still points to the same object but now, a little mutated object.
// hence the copies from Object.assign() are called shallow clones.


// if we need deep clones where even mutating non-primitive object shouldn't effect the other clones, then there's some complex external module u have to import.