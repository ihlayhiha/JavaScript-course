'use strict';

// assigning variables to elements to call their classList properties later
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const showModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}

const closeModal = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// opening modal with click
btnShowModal.forEach((item) =>{
    item.addEventListener('click', showModal);
});

// closing modal with click
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// adding esc key for closing modal
document.body.addEventListener('keydown', function(key){
    if  (key.key === 'Escape' && !modal.classList.contains('hidden'))
        closeModal();
})
