// copying objects

const me = {
    name : "ravi teja yella",
    age : 25,
    school : "whatever",
    status : "sure",
}

const random = me;

me.age = 26;

console.log(random);

let check = {};

Object.assign(check, me);
console.log(check);

const another = Object.assign({}, me);
console.log(another);

me.name = "changing name";
console.log(me.name);
console.log(another.name);
console.log(check.name)

console.log(Object.keys(me));
console.log(Object.values(me));
