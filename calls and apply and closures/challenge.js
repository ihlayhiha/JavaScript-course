// challenge
'use strict';

const poll = {
    question : "What is your favorite programming language?",
    options : ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers : new Array(4).fill(0),

    displayResults(type="array"){
        type === "array"? console.log(this.answers) : console.log("Poll results are", ...this.answers);
    },

    promptMessage (){
        const message = this.question + "\n" + this.options.join("\n");
        this.ask = message;
        return message
    },

    count : function(){
        this.promptMessage();
        const reply = Number(prompt(this.ask));
        if (isNaN(reply)) return;
        else {
            if (this.options[reply]){
                this.answers[reply] += 1;
                this.displayResults();
            };
        };
    },
};

poll.promptMessage();

document.querySelector(".poll").addEventListener('click', poll.count.bind(poll));
// const setStringDisplay