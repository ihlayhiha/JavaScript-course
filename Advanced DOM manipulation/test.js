const rand = null;
let randList = [];
rand? randList.push(200): console.log("Null will be false");
rand?.push(200);
console.log(rand);
console.log(randList?.push(200));
console.log(randList);

randList = [200, 100, 200, 100];
randList.forEach(() => {
    console.log(this);
});

const h1 = document.querySelector('h1');
console.log(h1.textContent);

console.log("".padStart(100, "*"));


const writingDownThisAndE = function(e){
    const element = e.target;
    const list = e.target.classList;
    console.log(element, list);
    console.log("Hovering over the heading, the text content is:", element.textContent);
    console.log("value of the parameter passed as 'this' using bind:", this);
}


h1.addEventListener('mouseover', writingDownThisAndE.bind(10));