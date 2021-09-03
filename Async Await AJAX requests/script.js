'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3/name/portugal');
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
    fetch(url).then(
        response => {
            if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
        });
    return response.json();
};


// code for chaining to also render data of neighbor country After the first country
// const getCountryData = function(country){
//     fetch(`${corsAnywhere}https://restcountries.com/v3/name/${country}`, {mode : "cors"})
//         .then(response => {
//             if (!response.ok) throw new Error(`Country not found (${response.status})`);
//             return response.json();
//         })
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbor = data[0].borders[0];

//             if (!neighbor) return;
//             return fetch(`${corsAnywhere}https://restcountries.com/v3/alpha/${neighbor}`);
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
    getJSON(`https://restcountries.com/v3/name/${country}`, "Country not found")
        .then(data => {
            renderCountry(data[0]);
            const neighbor = data[0].borders[0];

            if (!neighbor) throw new Error(`No neighbours for ${data[0].name}`);
            
            // neighbour country
            return getJSON(`https://restcountries.com/v3/alpha/${neighbor}`, "Country not found");
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
getCountryData('portugal');

