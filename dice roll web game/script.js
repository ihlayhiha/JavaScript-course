'use strict';

// assigning values
let turnPlayer1 = document.querySelector('.player--0').classList.contains('player--active');
let carry = 0;

document.querySelector('.btn--roll').addEventListener('click', function (){
    // assigning values
    let roll = Math.trunc(Math.random() * 6) + 1;

    let elements = {
        currentScore1 : Number(document.querySelector('#current--0').textContent),
        currentScore2 : Number(document.querySelector('#current--1').textContent),

        currAdd : function (i, roll){
            i === 0? document.querySelector('#current--0').textContent = this.currentScore1 + roll : document.querySelector('#current--1').textContent = this.currentScore2 + roll;
        },

        currZero : function(i){
            document.querySelector(`#current--${i}`).textContent = 0;
        }
    }
    
    const ifOne = function (){
        if (turnPlayer1){
            elements.currZero(0);
            turnPlayer1 = false;            
        } else {
            elements.currZero(1);
            turnPlayer1 = true;
        }
    };

    if (roll !== 1){
        turnPlayer1? elements.currAdd(0, roll) : elements.currAdd(1, roll);
        carry += roll;
    }
    else {
        ifOne();
        carry = 0;
    };
    colorActive();
});

// adding Event manager for another button inside this button
document.querySelector('.btn--hold').addEventListener('click', function(){
    
    let elements = {
        main1 : Number(document.querySelector('#score--0').textContent),
        main2 : Number(document.querySelector('#score--1').textContent),
        currZero : function (i){
            document.querySelector(`#current--${i}`).textContent = 0;
        },
    };

    if (turnPlayer1){
        document.querySelector('#score--0').textContent = carry + elements.main1;
        elements.currZero(0);
        turnPlayer1 = false;
        carry = 0;
    } else {
        document.querySelector('#score--1').textContent = carry + elements.main2;
        elements.currZero(1);
        turnPlayer1 = true;
        carry = 0;
    }
    colorActive();
});

document.querySelector('.btn--new').addEventListener('click', function(){
    carry = 0;
    for (let i = 0; i < 2; i++) {
        document.querySelector(`#score--${i}`).textContent = 0;
        document.querySelector(`#current--${i}`).textContent = 0;
    }

    turnPlayer1 = true;
    colorActive();
});

function colorActive(){
    if (!turnPlayer1){
        document.querySelector('.player--1').classList.add('player--active');
        document.querySelector('.player--0').classList.remove('player--active');
    } else {
        document.querySelector('.player--0').classList.add('player--active');
        document.querySelector('.player--1').classList.remove('player--active');
    }
}
