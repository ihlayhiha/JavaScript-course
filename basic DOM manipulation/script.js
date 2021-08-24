'use strict';

const startScore = Number(document.querySelector('.score').textContent);
const initMessage = "Start guessing...";
const initInput = document.querySelector('.guess').value;
const hideNumberWith = "?";
let secretNumber = Math.trunc(Math.random() * 20) + 1;

function initializer(){
    // initializing values
    document.querySelector('.score').textContent = startScore;
    document.querySelector('.message').textContent = initMessage;
    document.querySelector('.number').textContent = hideNumberWith;
    document.querySelector('.guess').value = initInput;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // initializing style elements
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
};  


document.querySelector('.check').addEventListener('click', function() {
    
    //  defining an object
    let names = {
        checkScore : Number(document.querySelector('.score').textContent),
        guess : Number(document.querySelector('.guess').value),
        highScore : Number(document.querySelector('.highscore').textContent),

        newMessage : function(str){
            document.querySelector('.message').textContent = str; 
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
        if (names.checkScore > 1){
            if (names.guess ===  secretNumber){
                // style elements for winning 
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';
                // display texts, values for winning
                names.newMessage("You guessed it!!");
                names.displayNumber();
                // record if high score
                if (names.checkScore > names.highScore){
                    names.newHighScore(names.checkScore);
                }
            } else {
                names.newMessage(names.guess > secretNumber? "Too High..." : "Too low...");
                names.newScore();
            } 
        } else {
            names.newMessage("You lost! Too many wrong guesses");
            names.newScore();
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    // Initializing values to default values again except for highScore
    initializer();
});
