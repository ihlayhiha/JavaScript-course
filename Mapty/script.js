'use strict';

// prettier-ignore




// Classes for Workouts
class Workout {
    date = new Date();
    id = (Date.now() + "").slice(-10);

    constructor (coords, distance, duration){
        // this.date = new Date();
        this.coords = coords;       // [latitude, longitude]
        this.distance = distance;   // in km
        this.duration = duration;   //  in min
    }

    // Getting the time and date for description
    _setDescription(){
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }
};

class Running extends Workout{
    type = "running";

    constructor(coords, distance, duration, cadence){
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();
    }  

    calcPace(){
        // min/km
        this.pace = this.duration/this.distance;
        return this.pace;
    }
}

class Cycling extends Workout{
    type = "cycling";

    constructor(coords, distance, duration, elevationGain){
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this._setDescription();
    }  

    calcSpeed(){
        //km/hr
        this.speed = this.distance/(this.duration/60);
        return this.speed;
    }
}

// Assigning variables for elements 
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

////////////////////////////
// APPLICATION ARCHITECTURE
class App {
    #map;
    #mapEvent;
    #workouts = [];

    constructor(){
        this._getPosition();
        form.addEventListener('submit', this._newWorkOut.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
    }


    // getting position
    _getPosition(){
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function(){
                alert("Location access denied!");
            });
        };
    }

    
    // loading map
    _loadMap(position){
        const  {latitude, longitude} = position.coords;
        console.log(`https://www.google.com/maps/@${latitude},${longitude},15z`);   
        
        // trying Leaflet library for map
        const coords = [latitude, longitude];
        this.#map = L.map('map').setView(coords, 13);

        // the map is made from tileLayers. OpenStreetMap is basically a open source map that everyone can use for free
        // https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'   we can change styles by changing this urls available
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        //  map event
        this.#map.on('click', this._showForm.bind(this));
    }


    // showing form when clicked on map
    _showForm(mapE){
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }


    // hiding the form when right input is logged
    _hideForm(){
        // Emptying inputs
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = "";
        // Hiding form
        form.style.display = "none";
        form.classList.add('hidden');
        // Setting the form back to hidden grid after 1 second
        setTimeout(function(){
            form.style.display = 'grid';
        }, 1000); 
    }


    // toggling elevation or cadence fields depending on the type
    _toggleElevationField(){
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');    
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');    
    }


    // adding new workout
    _newWorkOut(e){

        // helper functions to check the input values
        const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp)); 
        const allPositive = (...inputs) => inputs.every(inp => inp > 0); 

        e.preventDefault();

        // Get data from
        const type = inputType.value;
        const distance  = +inputDistance.value;
        const duration = +inputDuration.value;
        const {lat, lng} = this.#mapEvent.latlng;
        let workout;
        
        // If workout running, create running obj
        if (type === "running"){
            const cadence = +inputCadence.value;

            // Check if data is valid
            if (!validInputs(distance, duration, cadence) || !allPositive(distance, duration, cadence)) {
                return alert("Inputs have to be positive numbers");
            };

            workout = new Running([lat, lng], distance, duration, cadence);
        };
        
        // If workout cycling, create cycling obj
        if (type === "cycling") {
            const elevation = +inputElevation.value;
            
            // Check if data is valid
            if (!validInputs(distance, duration, elevation) || !allPositive(distance, duration)) {
                return alert("Inputs have to be positive numbers");
            };
            
            workout = new Cycling([lat, lng], distance, duration, elevation);
        };

        // Add new obj to workout Array
        this.#workouts.push(workout);

        // Render workout on map as marker
        this._renderWorkoutMarker(workout);      

        // Render workout on the list
        this._renderWorkout(workout);

        // Hide form and clear input fields
        this._hideForm();
    }


    // rendering the workout on the map
    
    _renderWorkoutMarker(workout){
        L.marker(workout.coords)
            .addTo(this.#map)
            .bindPopup(L.popup({
                maxWidth : 250,
                minWidth : 100,
                autoClose : false,
                closeOnClick : false,
                className : `${workout.type}-popup`,
            })
            )
            .setPopupContent(`${workout.type === "running"? '🏃‍♂️': '🚴‍♀️'} ${workout.description}`)
            .openPopup();
    }


    // rendering the workout on the side bar
    _renderWorkout(workout){
        let html = `
            <li class="workout workout--${workout.type}" data-id=${workout.id}>
                <h2 class="workout__title">${workout.description}</h2>
                <div class="workout__details">
                    <span class="workout__icon">${
                        workout.type === "running"?'🏃‍♂️': '🚴‍♀️'
                    }</span>
                    <span class="workout__value">${workout.distance}</span>
                    <span class="workout__unit">km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⏱</span>
                    <span class="workout__value">${workout.duration}</span>
                    <span class="workout__unit">min</span>
                </div>`;
        
        if (workout.type === "running") {
            html+= `
                    <div class="workout__details">
                        <span class="workout__icon">⚡️</span>
                        <span class="workout__value">${(workout.pace).toFixed(1)}</span>
                        <span class="workout__unit">min/km</span>
                    </div>
                    <div class="workout__details">
                        <span class="workout__icon">🦶🏼</span>
                        <span class="workout__value">${workout.cadence}</span>
                        <span class="workout__unit">spm</span>
                    </div>
                </li>`;
        };

        if (workout.type === "cycling") {
            html += `
                    <div class="workout__details">
                        <span class="workout__icon">⚡️</span>
                        <span class="workout__value">${(workout.speed).toFixed(1)}</span>
                        <span class="workout__unit">km/h</span>
                    </div>
                    <div class="workout__details">
                        <span class="workout__icon">⛰</span>
                        <span class="workout__value">${workout.elevationGain}</span>
                        <span class="workout__unit">m</span>
                    </div>
                </li>`;
        };
        // inserting it after the form
        form.insertAdjacentHTML('afterend', html);
    }

};


new App();
