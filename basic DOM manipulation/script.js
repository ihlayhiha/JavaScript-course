'use strict';

const startScore = Number(document.querySelector('.score').textContent);
const initMessage = "Start guessing...";
const hideNumberWith = "?";
let secretNumber = Math.trunc(Math.random() * 20) + 1;


document.querySelector('.check').addEventListener('click', function() {
    
    //  defining an object
    let names = {
        checkScore : Number(document.querySelector('.score').textContent),
        guess : Number(document.querySelector('.guess').value),
        highScore : Number(document.querySelector('.highscore').textContent),

        newMessage : function(str){
            document.querySelector('.message').textContent = str; 
            this.message = str;
        },
    
        newScore : function(){
            document.querySelector('.score').textContent = this.checkScore - 1;
        },
    
        displayNumber : function (){
            document.querySelector('.number').textContent = this.guess;
        },
        
        newHighScore : function(newHighScore) {
            document.querySelector('.highscore').textContent = newHighScore; 
        }
    }


    // main DOM manipulation function
    if (!names.guess){
        names.newMessage("No value entered");
    } else {
        if (names.checkScore > 0){
            if (names.guess ===  secretNumber){
                names.newMessage("You guessed it!!");
                names.displayNumber();
                if (names.checkScore > names.highScore){
                    names.newHighScore(names.checkScore);
                }
            } else if (names.guess > secretNumber){
                names.newMessage("Too high...");
                names.newScore();
            } else {
                names.newMessage("Too low...");
                names.newScore();
            }
        } else {
            names.newMessage("You lost! Too many wrong guesses");
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    // setting all the values to defaults again
    document.querySelector('.score').textContent = startScore;
    document.querySelector('.number').textContent = hideNumberWith;
    document.querySelector('.message').textContent = initMessage;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});
