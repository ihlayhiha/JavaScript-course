'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
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

const accounts = [account1, account2, account3, account4];

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


// creating movements for account1 and replacing the pre-coded default html
// removing the pre-coded default html

// creating a function to display movements
const displayMovements = function(movements, sort=false){
  containerMovements.innerHTML = "";  // to remove default coded html

  const movs = sort? movements.slice().sort((a, b) => a - b) : movements; // we do not want to change the original array. So, create a copy with .slice()

  movs.forEach((mov, i) => {

    const type = mov > 0? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);

  });
};


// creating a function for calculating and displaying balance
const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((arr, mov) => arr + mov,  0);
  labelBalance.textContent = `${acc.balance} €`;
};



// creating functions to display total incomes, withdrawals and interests
const calcDisplaySummary = function(account){
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest =  account.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * account.interestRate/100)
    .filter(int => int >= 1)   // if the bank ony adds interest if the interest value is > 1 euro
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};


// updating UI function
const updateUI = function(acc){
    // display movements
    displayMovements(currentAccount.movements); 
    
    // display balance
    calcDisplayBalance(currentAccount);
    
    // display summary
    calcDisplaySummary(currentAccount);
};



// Initiating a currentAccount variable
let currentAccount;

// Event handlers for User login
// when we click a button in 'form' element, the event listener gets executed and the page always reloads by default 
btnLogin.addEventListener('click', function(event){
  event.preventDefault();   // prevents form from submitting (reloading every time a button gets clicked)
  
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    
    // display UI and welcome message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(" ")[0]}!`;
    containerApp.style.opacity = 100;
    
    // clear the input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    
    // removing focus from input fields after logging in by using .blur() method on the element
    inputLoginPin.blur(); 
    
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

      // updating UI
      updateUI(currentAccount);
    };
});


// Event handler for loan request
btnLoan.addEventListener('click', function(e){
  e.preventDefault();

  const loanValue = Number(inputLoanAmount.value);

  if (loanValue > 0 && currentAccount.movements.some(mov => mov >= loanValue/10)){
    // adding new load value to account movements
    currentAccount.movements.push(loanValue);
    // updating UI
    updateUI(currentAccount);
  };
  // clearing input field values with or without the loan
  inputLoanAmount.value = "";
});



// Event handler for close account 
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin){
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

  displayMovements(currentAccount.movements, checkSort);
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

// // changing the 'movements' element based on the passed element (in this case the movements array for example)
// document.querySelector('.movements').innerHTML = "";

// movements.forEach((mov, i) => {

//   const movType = mov > 0? "deposit" : "withdrawal";

//   const anotherHTML = `
//   <div class="movements__row">
//           <div class="movements__type movements__type--${movType}">${i + 1} ${movType}</div>
//           <div class="movements__date">3 days ago</div>
//           <div class="movements__value">${mov}</div>
//         </div>
//   `;
//   document.querySelector('.movements').insertAdjacentHTML('afterbegin', anotherHTML);
// });


// using .find() method
// console.log(accounts);
// const account =  accounts.find(acc => acc.owner === "Jessica Davis");
// console.log(account);


// using .flat()  method to calculate the overall movement of all the accounts in the bank
// const allMovements = accounts
//     .map(acc => acc.movements)
//     .flat()
//     .reduce((acc, mov) => acc + mov, 0);
// console.log(`Total movement of all accounts: ${allMovements}`);


// // using .flapMap() to combine .flat() and .map() methods
// // .flatMap() method has depth always set to 1
// const totalMovements = accounts
//     .flatMap(acc => acc.movements)
//     .reduce((acc, mov) => acc + mov, 0);
// console.log(`Total movement of all accounts: ${totalMovements}`); 


// more uses of Array.from() function
// we can produce arrays from array-like iterables such as .querySelectorAll()  nodeLists by using Array.from() function

labelBalance.addEventListener('click', ()=>{
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), (element) => Number(element.textContent.replace('€', '')));
  console.log(movementsUI.reduce((acc, cur) => acc + cur, 0));

  // u can also use the spread method
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2.map(element => Number(element.textContent.replace('€', ''))));
});
