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
containerMovements.innerHTML = "";  // to remove default coded html

// creating a function to display movements
const displayMovements = function(movements){
  movements.forEach((mov, i) => {

    const type = mov > 0? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);

  });
}
displayMovements(account1.movements); 


// creating a function for calculating and displaying balance
const calcDisplayBalance = function(movements) {
  const balance = movements.reduce((arr, mov) => arr + mov,  0);
  labelBalance.textContent = `${balance} €`;
};
calcDisplayBalance(account1.movements);


// creating functions to display total incomes, withdrawals and interests
const calcDisplaySummary = function(movements){
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interestRate = 0.012;
  const interest =  movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * interestRate)
    .filter(int => int >= 1)   // if the bank ony adds interest if the interest value is > 1 euro
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};
calcDisplaySummary(account1.movements);




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
