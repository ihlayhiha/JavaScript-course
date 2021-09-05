'use strict';

const imageTimeout = function(seconds){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
};

const where = document.querySelector('.image');
const insertImage = function(src){
    where.innerHTML = `<img src='${src}'/>`;
};

insertImage('img/img-1.jpg');
document.querySelector('img').addEventListener('load', function(){
    
});