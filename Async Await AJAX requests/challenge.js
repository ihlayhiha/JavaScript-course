'use strict';

const whereAmI =  function(lat, lng){
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(res => {
            if (!res.ok) throw new Error(`Yeah, this country is not loading bruv, status: ${res.status}`);
            return res.json();
        })   
        .then(data => {
            console.log(`You are in ${data.city}, ${data.country}`);
            return data;
        })
        .catch(err => {
            console.error(`Error message: ${err.message}`);
        })
        .finally(document.querySelector('.challenge1').textContent = "Challenge 1 DONE");
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
// console.log(whereAmI(-33.933, 18.474));



// Testing WebAPI environment, microtask queue (resolved promises etc), callback queue (timeouts, load images, event listeners etc), EVENT LOOP and the basic JS engine in JavaScript Runtime

console.log('Test start');          //  going to be run first           

setTimeout(() => {                  // going to be run after running everything in the microtask queue(resolved promises) run ... i.e. 4th
    console.log('0 seconds has passed');
}, 0);  

Promise.resolve('Promise resolve immediately')
    .then(res => {
        // console.log(res)
        setTimeout(() => {
            console.log("5 seconds timeout inside resolved promise");
        }, 5000);                      // will be the last as it gets added to the callback queue after 5 seconds .i.e 5th

        for (let i=0; i<100000000; i++){};
        console.log(res);
    }); // going to be run after running everything in call stack .i.e 3rd 

console.log('Test end');            // going to be run second
