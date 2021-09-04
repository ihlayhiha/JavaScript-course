'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.eu/rest/v2/name/portugal');
// request.send();

// request.addEventListener('load', function() {
//     console.log("This has been loaded");
//     console.log(this.responseText);

// });


/////////////////////////////////////

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'

const renderCountry = function(data, className = ""){
    const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${((+data.population)/1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>language</p>
            <p class="country__row"><span>💰</span>currency</p>
          </div>
    </article>`;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    // countriesContainer.style.opacity = 1;
};

// catching Error
const renderError = function(msg){
    countriesContainer.insertAdjacentText("beforeend", msg);
    // countriesContainer.style.opacity = 1;
};


// const request = fetch('https://restcountries.com/v3/name/portugal');
// console.log(request);

// Using fetch API

// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v3/name/${country}`)
//         .then(function(response) {      // .then() method always returns a promise no matter if we return a value or not
//             return response.json();     // response.json() is also a promise, so we can't directly assign variables to it until it's settled
//         })
//         .then(function(data) {          // calling .then() method to check if response.json() is settled
//             console.log(data);          //  data will come back as list with one item data
//             renderCountry(data[0]);     // rendering the data (country) on to the webapp
//         })
// };


// code for rendering data of a selected country
// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v3/name/${country}`)
//         .then(response => response.json())
//         .then(data => renderCountry(data[0]));
// };


const getJSON = function(url, errorMsg = "Something went wrong") {
    return fetch(url)
        .then(res => {
            if (!res.ok) throw new Error(`${errorMsg} ${res.status}`);

            return res.json();
        });
};

// code for chaining to also render data of neighbor country After the first country
// const getCountryData = function(country){
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//         .then(response => {
//             if (!response.ok) throw new Error(`Country not found (${response.status})`);
//             return response.json();
//         })
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbor = data[0].borders[0];

//             if (!neighbor) return;
//             return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//         })
//         .then(response => response.json())
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {                                         // .then(), .catch() both return promises and .finally() is the same as always
//             console.error(err);
//             renderError(`Something went wrong ${err.message}. Try again`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         });
// };



const getCountryData = function(country){
    // Country 1
    getJSON(`https://restcountries.eu/rest/v2/name/${country}`, "Country not found")
        .then(data => {
            renderCountry(data[0]);

            const neighbor = data[0].borders[0];

            if (!neighbor) throw new Error(`No neighbours for ${data[0].name}`);
            
            // neighbour country
            return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbor}`, "Country not found");
        })
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {                                         // .then(), .catch() both return promises and .finally() is the same as always
            console.error(err);
            renderError(`Something went wrong ${err.message}. Try again`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};


// calling the function
// getCountryData('portugal');

// const whereAmI =  function(lat, lng){
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//         .then(res => {
//             if (!res.ok) throw new Error(`Yeah, this country is not loading bruv, status: ${res.status}`);
//             return res.json();
//         })   
//         .then(data => {
//             console.log(`You are in ${data.city}, ${data.country}`);
//             console.log(getCountryData(data.country));
//             return data;
//         })
//         .catch(err => {
//             console.error(`Error message: ${err.message}`);
//         })
//         .finally(console.log('Yay'));
// };

// whereAmI(52.508, 13.381);



// creating promises
// promisifying means - converting call back based async behavior to promise based async behavior
const lotteryPromise = new Promise(function(resolve, reject){
    console.log("Lottery draw initiated");

    setTimeout(()=> {
        if (Math.random() >= 0.5) {
            resolve('You won the lottery!');
        } else {
            reject(new Error("Unlucky!"));
        };
    }, 2000);
});

lotteryPromise
    .then(res => console.log(res))
    .catch(err => console.error(err));


// promisifying timeout
const wait = function(seconds){
    return new Promise(function (resolve){
        // setTimeout(() => resolve(), seconds * 1000);
        setTimeout(resolve, seconds * 1000);
    });
};

wait(2).then(() => {
    console.log("This is being printed after 2 seconds");
    return wait(1);
}).then(()=> console.log("This is being printed after 1 second"));


wait(2)
    .then(() => {
    console.log("2 seconds passed");
    return wait(1);
    })
    .then(() => {
    console.log("3 seconds passed");
    return wait(1);
})
    .then(() => {
    console.log("4 seconds passed");
    return wait(1);
})
    .then(() => {
    console.log("5 seconds passed");
    return wait(1);
})
    .then(()=> console.log());


// another way of promisify instantly
Promise.resolve(`random`).then(x => console.log(x));
Promise.reject(new Error('random')).catch(x => console.error(x));



////////////////////////////////////////
// promisifying geoLocator
// geoLocation also has async behavior, loads in the webAPI environment, then goes to call back queue
// promisifying geoLocation API
// navigator.geolocation.getCurrentPosition((position) => console.log(position), err => console.error(err));

// const getPosition = function() {
//     return new Promise(function(resolve, reject){
//         navigator.geolocation.getCurrentPosition((position) => {
//             resolve(position);
//         }, err => {
//             reject(err);
//         });
//     });
// };

// another way of writing the same code
const getPosition = function(){
    return new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

// getPosition().then(pos => console.log(pos));    // we basically converted a geoLocation API to a promise based API

// we can use getPosition() and use it for whereAmI()
const whereAmI =  function(){
    getPosition().then(pos => {
        console.log(pos);
        const {latitude  : lat, longitude : lng} = pos.coords;
        console.log(lat, lng);
        return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    })
        .then(res => {
            // console.log(res);
            if (!res.ok) throw new Error(`Yeah, this country is not loading bruv, status: ${res.status}`);
            return res.json();
        })   
        .then(data => {
            console.log(`You are in ${data.city}, ${data.country}`);
            console.log(getCountryData(data.country));
            return data;
        })
        .catch(err => {
            console.error(`Error message: ${err.message}`);
        })
        .finally(console.log('Yay'));
};

// btn.addEventListener('click', whereAmI);
whereAmI();



///////////////////////////////////////
//  Using Async Await
const newWhereAmI = async function(){
    // Geo location
    try {
        const pos = await getPosition();
        const {latitude : lat, longitude: lng} = pos.coords;

        // reverse Geo coding
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)    
        if (!resGeo.ok) throw new Error("Problem getting location data");
        const dataGeo = await resGeo.json();
        console.log(dataGeo);
        
        // Country
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
        if (!res.ok) throw new Error("Problem getting Country");
        // console.log(res);

        const data = await res.json();
        console.log(data);
        renderCountry(data[0]);

        return `You are in ${dataGeo.city}, ${dataGeo.country}.`;
    } catch (error) {
        console.error(error);
        renderError(`${error.message}`);

        // reject promise returned from async function
        throw error;
    };
};

// console.log(newWhereAmI());
// with async await we can't use the chain catch methods like before because there's nothing to chain
// Instead, we use try - catch statement

try {
    throw new Error("This is a test for try catch statements");
} catch (error) {
    console.error(error);
};


try {
    let y = 1;
    const x = 2;
    x = 19;
} catch(error) {
    console.error(error);
};


////////////////////////////////////////
// returning values from async functions
console.log("1: This is the first");
// console.log(newWhereAmI());
// const city = newWhereAmI();
// console.log(city);

newWhereAmI()
    .then(city => console.log(city))
    .catch(error => console.error(error.message))
    .finally(() => console.log("Done with this chains"));
console.log("3: This is the third");

(async () => {
    try {
        const city = await newWhereAmI();
        console.log("using IIFE, Immediately Invoked Function Expressions")
        console.log(city);
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("3: This is the third");
    };
})();

// IIFE check
(() => console.log("Immediately Invoked Function Expression check"))();


//////////////////////////////////
// Running parallel promises
const get3Countries = async function(c1, c2, c3){
    try {

        // loading 3 AJAX calls one after another using await is a time wasting
        const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`, "Country not found");
        const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`, "Country not found");
        const [data3] = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`, "Country not found");

        console.log("PRINTING CAPITALS");
        console.log([data1.capital, data2.capital, data3.capital]);

        // trying to make them fetch at the same time without using .then() methods
        // we can do it by using Promise.all() 
        // Promise.all() takes in an array of promises and makes then run at the same time, also returns an array
        // called combinator function because it takes multiple AJAX calls and runs them at the same time
        const data = await Promise.all([
            getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
            getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
            getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
        ]);
        console.log(data.map(val => val[0].capital));
        // if one promise rejects, everything rejects when u use Promise.all()

    } catch (error) {
        console.error(error);
    };
};

get3Countries('portugal', 'canada', 'india');

// 0: Promise.all()
// More combinators functions on promises
// 1: Promise.race(), settles  as soon as first of the input promises is settled
// Promise getting rejected first also short circuits the race
(async function(){
    const res = await Promise.race([
        getJSON(`https://restcountries.eu/rest/v2/name/italy`),
        getJSON(`https://restcountries.eu/rest/v2/name/portugal`),
        getJSON(`https://restcountries.eu/rest/v2/name/spain`),
    ]);
    
    console.log("USING PROMISE RACE");
    console.log(res[0].name);
})();


// Used to counter never ending promises, we can  create a timeout promise which automatically rejects when the timeout passes before the fetch request settles
const timeout = function(seconds){
    return new Promise(function(_, reject){
        setTimeout(() => {
            reject(new Error("Request took too long"));
        }, seconds* 1000);
    });
};

(async () => {
    try {
        const beforeTimer = await Promise.race([getJSON(`https://restcountries.eu/rest/v2/name/spain`), timeout(0)]);
        console.log(beforeTimer[0].name);
    } catch (err) {
        console.error(err);
    }
})();


// 2: Promise.allSettled() 
// takes in an array of promises, returns an array of all settled promises no matter if they're settled or not
// Unlike Promise.all(), this does NOT short circuit even when a promise rejects

(async () => {
    try {
        const allSettled = await Promise.allSettled([getJSON(`https://restcountries.eu/rest/v2/name/spain`),
        timeout(0),
        Promise.resolve("SUCCESS"),
        Promise.reject("ERROR")]);
        
        console.log('USING ALL SETTLED PROMISES');
        console.log(allSettled);
    } catch(error){
        console.error(error);
    };
})();


// 3. Promise.any()
// takes in array of promises and the first full filled promise, ignores all the rejected promises and returns back the full filled promise
(async () => {
    try {
        const anyPromise = await Promise.any([getJSON(`https://restcountries.eu/rest/v2/name/spain`), timeout(0)]);
        console.log('USING PROMISE.ANY()');
        console.log(anyPromise[0].name);
    } catch (err) {
        console.error(err);
    }
})();

