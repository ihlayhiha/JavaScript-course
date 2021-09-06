"use strict";const account1={owner:"Jonas Schmedtmann",movements:[200,450,-400,3e3,-650,-130,70,1300],interestRate:1.2,pin:1111},account2={owner:"Jessica Davis",movements:[5e3,3400,-150,-790,-3210,-1e3,8500,-30],interestRate:1.5,pin:2222},account3={owner:"Steven Thomas Williams",movements:[200,-200,340,-300,-20,50,400,-460],interestRate:.7,pin:3333},account4={owner:"Sarah Smith",movements:[430,1e3,700,50,90],interestRate:1,pin:4444},accounts=[account1,account2,account3,account4],labelWelcome=document.querySelector(".welcome"),labelDate=document.querySelector(".date"),labelBalance=document.querySelector(".balance__value"),labelSumIn=document.querySelector(".summary__value--in"),labelSumOut=document.querySelector(".summary__value--out"),labelSumInterest=document.querySelector(".summary__value--interest"),labelTimer=document.querySelector(".timer"),containerApp=document.querySelector(".app"),containerMovements=document.querySelector(".movements"),btnLogin=document.querySelector(".login__btn"),btnTransfer=document.querySelector(".form__btn--transfer"),btnLoan=document.querySelector(".form__btn--loan"),btnClose=document.querySelector(".form__btn--close"),btnSort=document.querySelector(".btn--sort"),inputLoginUsername=document.querySelector(".login__input--user"),inputLoginPin=document.querySelector(".login__input--pin"),inputTransferTo=document.querySelector(".form__input--to"),inputTransferAmount=document.querySelector(".form__input--amount"),inputLoanAmount=document.querySelector(".form__input--loan-amount"),inputCloseUsername=document.querySelector(".form__input--user"),inputClosePin=document.querySelector(".form__input--pin");accounts.forEach((e=>{e.username=e.owner.toLowerCase().split(" ").map((e=>e[0])).join("")}));const displayMovements=function(e,n=!1){containerMovements.innerHTML="";(n?e.slice().sort(((e,n)=>e-n)):e).forEach(((e,n)=>{const t=e>0?"deposit":"withdrawal",o=`\n    <div class="movements__row">\n          <div class="movements__type movements__type--${t}">${n+1} ${t}</div>\n          <div class="movements__value">${e}€</div>\n        </div>\n    `;containerMovements.insertAdjacentHTML("afterbegin",o)}))},calcDisplayBalance=function(e){e.balance=e.movements.reduce(((e,n)=>e+n),0),labelBalance.textContent=`${e.balance} €`},calcDisplaySummary=function(e){const n=e.movements.filter((e=>e>0)).reduce(((e,n)=>e+n),0);labelSumIn.textContent=`${n} €`;const t=e.movements.filter((e=>e<0)).reduce(((e,n)=>e+n),0);labelSumOut.textContent=`${Math.abs(t)} €`;const o=e.movements.filter((e=>e>0)).map((n=>n*e.interestRate/100)).filter((e=>e>=1)).reduce(((e,n)=>e+n),0);labelSumInterest.textContent=`${o} €`},updateUI=function(e){displayMovements(currentAccount.movements),calcDisplayBalance(currentAccount),calcDisplaySummary(currentAccount)};let currentAccount;btnLogin.addEventListener("click",(function(e){e.preventDefault(),currentAccount=accounts.find((e=>e.username===inputLoginUsername.value)),currentAccount?.pin===Number(inputLoginPin.value)&&(labelWelcome.textContent=`Welcome back ${currentAccount.owner.split(" ")[0]}!`,containerApp.style.opacity=100,inputLoginUsername.value=inputLoginPin.value="",inputLoginPin.blur(),updateUI())})),btnTransfer.addEventListener("click",(function(e){e.preventDefault();const n=accounts.find((e=>e.username===inputTransferTo.value)),t=Number(inputTransferAmount.value);inputTransferAmount.value=inputTransferTo.value="",t>0&&n&&t<=currentAccount.balance&&n.username!==currentAccount.username&&(currentAccount.movements.push(-t),n.movements.push(t),updateUI())})),btnLoan.addEventListener("click",(function(e){e.preventDefault();const n=Number(inputLoanAmount.value);n>0&&currentAccount.movements.some((e=>e>=n/10))&&(currentAccount.movements.push(n),updateUI()),inputLoanAmount.value=""})),btnClose.addEventListener("click",(function(e){if(e.preventDefault(),inputCloseUsername.value===currentAccount.username&&Number(inputClosePin.value)===currentAccount.pin){const e=accounts.findIndex((e=>e.username===currentAccount.username));console.log(`Deleting ${accounts[e].owner.split(" ")[0]}'s account`),accounts.splice(e,1),labelWelcome.textContent="Login again to get started...",containerApp.style.opacity=0}inputClosePin.value=inputCloseUsername.value=""}));let checkSort=!0;btnSort.addEventListener("click",(function(e){e.preventDefault(),displayMovements(currentAccount.movements,checkSort),checkSort=!checkSort}));const currencies=new Map([["USD","United States dollar"],["EUR","Euro"],["GBP","Pound sterling"]]),movements=[200,450,-400,3e3,-650,-130,70,1300];labelBalance.addEventListener("click",(()=>{const e=Array.from(document.querySelectorAll(".movements__value"),(e=>Number(e.textContent.replace("€",""))));console.log(e.reduce(((e,n)=>e+n),0));const n=[...document.querySelectorAll(".movements__value")];console.log(n.map((e=>Number(e.textContent.replace("€","")))))}));
//# sourceMappingURL=index.335a83eb.js.map