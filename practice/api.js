'use strict';

// console.log("Hello");
// console.log("This is a live server");

// // fetch()
// console.log(fetch('https://reqres.in/api/users'));

// const helper = function(){
//     fetch('https://reqres.in/api/users')
//         .then(response => console.log(response));
// };
// helper();

// const animals = function(){
//     console.log("This is fetching");
//     fetch('https://cat-fact.herokuapp.com/facts')
//     .then(response =>{
//         console.log(response);
//         return response.json();
//     })
//     .then(data => console.log(data));
// };
// animals();

// try {
//     await fetch('http://example.com');
// } catch(err) {
//     alert(err)
// };

// fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all')
//     .then(response => response.json())
//     .then(data => console.log(data));


const whereAmI = function(lat, lng){
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(res => res.json())
        .then(data => console.log(data));
};

// whereAmI(52.504, 12.346);

const catPic = document.querySelector('.catpic');

// fetch('https://aws.random.cat/meow').then(res => res.json()).then(data => {
//     console.log(data);
//     catPic.innerHTML = `<img src="${data.file}" />`;
// });


const animeFromNet = document.querySelector('.anime'); 
fetch('https://animechan.vercel.app/api/random')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        animeFromNet.innerHTML = `
        <p> anime: ${data.anime} <p>
        <p> character : ${data.character}<p>
        <p> quote: ${data.quote}<p>
        `;
    });
 
// whereAmI()
let latitude, longitude;

console.log(navigator.geolocation.getCurrentPosition((position)=> {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(latitude, longitude);
    whereAmI(latitude, longitude);
}, err => console.log(err)));


