const rand = {
    list1 : [1, 2,3],
    add (){
        const joined = this.list1.join("\n");
        console.log(joined);
    },

    another  : ["yeah", "sure"],
    message : "adding these" + "\n" + new Array(...this.another).join(""),
    string : "check",

}

rand.add();
console.log(rand.another, typeof rand.another);
console.log(rand.message);

console.log(typeof rand.string);
console.log(new Array(...rand.another));