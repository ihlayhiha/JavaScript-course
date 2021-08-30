'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-08-27T17:01:17.194Z',
    '2021-08-27T23:36:17.929Z',
    '2021-08-29T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};


const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////

// creating usernames using .map() method
accounts.forEach(account => {
  account.username = account.owner.toLowerCase().split(" ").map(item => item[0]).join("");
});


// formatting movements dates
const formatMovementDate = function(date){
    const calcDaysPassed = (days1, days2) => Math.round(Math.abs(days2 - days1)/(1000 * 60 * 60 * 24));

    const daysPassed = calcDaysPassed(new Date(), date);
    console.log(daysPassed);
    let formattedDate;

    switch (daysPassed){
      case 0 :{
        formattedDate = "Today";
        break;
      };
      case 1 :{
        formattedDate = "Yesterday";  
        break;
      };
      default :{
        formattedDate = `${daysPassed} days ago`;
        break;
      };
    };
    return formattedDate;
};


// formatting currencies function
const formatCurr = function(value, locale, currency){
  return new Intl.NumberFormat(locale, {
    style : "currency",
    currency : currency,
  }).format(value);
};



// creating movements for account1 and replacing the pre-coded default html
// removing the pre-coded default html

// creating a function to display movements
const displayMovements = function(acc, sort=false){
  containerMovements.innerHTML = "";  // to remove default coded html

  const movs = sort? acc.movements.slice().sort((a, b) => a - b) : acc.movements; // we do not want to change the original array. So, create a copy with .slice()

  movs.forEach((mov, i) => {

    const type = mov > 0? "deposit" : "withdrawal";
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date);

    const formattedMov = formatCurr(mov, acc.locale, acc.currency);

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);

  });
};


// creating a function for calculating and displaying balance
const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((arr, mov) => arr + mov,  0);
  labelBalance.textContent = formatCurr(acc.balance, acc.locale, acc.currency);
};



// creating functions to display total incomes, withdrawals and interests
const calcDisplaySummary = function(account){
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest =  account.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * account.interestRate/100)
    .filter(int => int >= 1)   // if the bank ony adds interest if the interest value is > 1 euro
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};


// updating UI function
const updateUI = function(acc){
    // display movements
    displayMovements(currentAccount); 
    
    // display balance
    calcDisplayBalance(currentAccount);
    
    // display summary
    calcDisplaySummary(currentAccount);
};


// start LOGOUT TIMER
const startLogOutTimer = function(){
  // writing a function to call it immediately (the setInterval function waits for the given interval to call the function first time)
  const tick = () => {
    const min = `${Math.trunc(time / 60)}`.padStart(2, 0);
    const sec = `${time % 60}`.padStart(2, 0);
    // in each call, we print remaining time to user interface
    labelTimer.textContent = `${min}:${sec}`;
    
    // when 0 seconds, stop timer. Log user out
    if (time === 0) {
      labelWelcome.textContent = "Timeout expired, login again to get started";
      containerApp.style.opacity = 0;
      clearInterval(timer);
    };

    // decrease time by 1s
    time--;
  };
  // setting the time to 5 minutes
  let time = 300;

  // timer is called every second
  tick();     // calling the function immediately
  const timer = setInterval(tick, 1000);  // calling it at every interval since then
  return timer;
};


// Initiating a currentAccount variable and a timer variable
let currentAccount, timer;


// Event handlers for User login
// when we click a button in 'form' element, the event listener gets executed and the page always reloads by default 
btnLogin.addEventListener('click', function(event){
  event.preventDefault();   // prevents form from submitting (reloading every time a button gets clicked)
  
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  
  if (currentAccount?.pin === +inputLoginPin.value) {

    // display UI and welcome message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(" ")[0]}!`;
    containerApp.style.opacity = 100;

        // Date at the top
    const now = new Date();
    const options = {
      year : "numeric",
      month : "numeric",
      day : "numeric",
      hour : "numeric",
      minute : "numeric",
    };
    
    // const locale = navigator.language;

    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);

    // // day/month/year format
    // const day = `${now.getDate()}`.padStart(2, '0');
    // const month = `${now.getMonth() + 1}`.padStart(2, '0');
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, '0');
    // const minute = `${now.getMinutes()}`.padStart(2, '0');
    // labelDate.textContent = `${day}/${month}/${year},  ${hour}:${minute}`;
    
    // clear the input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    
    // removing focus from input fields after logging in by using .blur() method on the element
    inputLoginPin.blur(); 
    
    // starting Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // updating UI
    updateUI(currentAccount);
  };
});


// Event handlers/listeners for transfers
btnTransfer.addEventListener('click', function(e){
  e.preventDefault();   // preventing the default submitting 

  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  const amount = Number(inputTransferAmount.value);

  // clearing input fields
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentAccount.balance &&
    receiverAcc.username !== currentAccount.username
    ){

      // doing the transfer
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);

      // add transfer date
      currentAccount.movementsDates.push(new Date().toISOString());
      receiverAcc.movementsDates.push(new Date().toISOString());

      // updating UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    };
});


// Event handler for loan request
btnLoan.addEventListener('click', function(e){
  e.preventDefault();

  const loanValue = Math.floor(inputLoanAmount.value);

  if (loanValue > 0 && currentAccount.movements.some(mov => mov >= loanValue/10)){
    setTimeout(() => {// adding new load value to account movements
      currentAccount.movements.push(loanValue);

      // updating loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // updating UI
      updateUI(currentAccount);}, 2500);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
  };
  // clearing input field values with or without the loan
  inputLoanAmount.value = "";
});



// Event handler for close account 
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && +inputClosePin.value === currentAccount.pin){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);

    // deleting message to the console
    console.log(`Deleting ${accounts[index].owner.split(' ')[0]}'s account`);

    // deleting the account using slice
    accounts.splice(index, 1);

    // hide UI and welcome message
    labelWelcome.textContent = `Login again to get started...`;
    containerApp.style.opacity = 0;
  };

  // clearing input fields for both right or wrong entries
  inputClosePin.value = inputCloseUsername.value = "";

});


let checkSort = true;
// Event handler for Sorting movements
btnSort.addEventListener('click', function(e){
  e.preventDefault();

  displayMovements(currentAccount, checkSort);
  checkSort = !checkSort;
});




/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// writing isEven function
// const isEven = n => n > 0 && n % 2 === 0;
// console.log(isEven(10));
// console.log(isEven(21));


// console.log([...document.querySelectorAll('.movements__row')]);


// labelBalance.addEventListener('click', function() {
//   [...document.querySelectorAll('.movements__row')].forEach(function(row, i){
//     if (isEven(i)) row.style.backgroundColor = 'orangered';
//     if (i % 3 === 0)row.style.backgroundColor = 'blue';
//   });
// } );

// console.log(8745157454154151578542145151245);
// console.log(8745157454154151578542145151245n);  // bigInt

// console.log(new Date(account1.movementsDates[0])); 
