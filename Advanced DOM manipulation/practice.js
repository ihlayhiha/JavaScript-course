'use strict';


///
///////////////////////////////////////

// tabs at the end

const tabContainer = document.querySelector('.operations__tab-container');
const tabs = tabContainer.children;
const tabsContent = document.querySelectorAll('.operations__content');

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// const message = document.createElement('BUTTON');
// // message.textContent = "Yeah this is a random Message";
// message.innerHTML = "Yeah this is a random Message<button>Click here<button>";


// const header = document.querySelector('.header');
// // header.prepend(message);  
// // header.append(message.cloneNode(true));  

// // header.after(message.cloneNode(true));
// header.before(message.cloneNode(true));

// const htmlListSections = document.getElementsByClassName('section');
// console.log(htmlListSections);

// // message.classList.add('section');
// console.log(htmlListSections);

// message.setAttribute('className', 'section');
// console.log(message.classList);

// console.log(htmlListSections);

// console.log(document.querySelectorAll('.section'));

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 =  document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(){
    section1.scrollIntoView({behavior: "smooth"});
});


// const nav = document.querySelector('.nav');
// const navLinks = document.querySelector('.nav__links');
// const navItems = document.querySelectorAll('.nav__item');

// console.log(nav.querySelectorAll('.nav__item'));

// console.log(nav.children);      // gives back a live HTML list collection of elements
// console.log(nav.childNodes);    // gives back a node list of everything including textContent, elements etc

// [...nav.children].forEach((element)=> element.style.backgroundColor = 'orangered');

// console.log(...nav.childNodes);

// nav.firstElementChild.style.backgroundColor = "green" ;
// nav.lastElementChild.style.backgroundColor = "white";

// navLinks.firstElementChild.style.backgroundColor = "black";

// // going upwards
// // basically selecting parents
// console.log('Parent Element of nav links: ',navLinks.parentElement);
// console.log("Parent Node of nav links:", navLinks.parentNode);      // in this case, the parent element and node are basically the same

// console.log(navLinks.closest('.nav__item'));    // null because no parent element in the parent chain of navLinks has nav__item
// navLinks.closest('.header').style.backgroundColor = 'orangered';

// console.log(navLinks.children);
// const h1 = document.querySelector('h1');
// console.log(h1.previousElementSibling?.textContent);    // will be null because only h1 and h4 siblings exist here
// console.log(h1.nextElementSibling?.textContent);        // will return  the text content of h4

// console.log(navLinks.parentElement.children);
// const child =  navLinks.parentElement.children;
// console.log([...child].includes(navLinks));
// console.log()

// console.log([...navLinks.parentElement.children].includes(navLinks));

//

tabContainer.addEventListener('click', e =>{

    if ([...tabs].includes(e.target.closest('button'))) {
        const clicked = e.target.closest('button');

        // removing activity from all tabs
        [...tabs].forEach(element => element.classList.remove('operations__tab--active'));

        // adding activity for the clicked tab
        clicked.classList.add('operations__tab--active');

        // removing already upstaged content first
        tabsContent.forEach(element => element.classList.remove('operations__content--active'));

        // activating clicked tab data
        document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
    };
});

// 
// adjusting the opacity on the nav bar
const nav = document.querySelector('nav');
const logo = nav.querySelector('img');
const navLinks = document.querySelector('.nav__links');
const navItems = document.querySelectorAll('.nav__item');


// changing opacity when u hover over nav elements
const changeOpacity = function(e){
    const checker = e.target;
    if ([...navItems].includes(checker.closest('.nav__item'))) {
        const link = checker.closest('.nav__item');
        navItems.forEach(item => {
            // adding transparency
            if (item !== link) {
                item.style.opacity = this;
                logo.style.opacity = this;
            };
        });
    };
};

nav.addEventListener('mouseover', changeOpacity.bind(0.5));
nav.addEventListener('mouseout', changeOpacity.bind(1));


// adding smooth transition from nav links to the website sections
navLinks.addEventListener('click', function(e){
    e.preventDefault();
    const clicked = e.target.closest('.nav__item');
    if (clicked) document.querySelector(`${e.target.getAttribute('href')}`).scrollIntoView({behavior: "smooth"});
});


const initialCoords = section1.getBoundingClientRect();

// adding sticky navigation
// using scroll event (available on window and not document)... not efficient
// window.addEventListener('scroll', function(){
//     console.log(this.window.scrollY);
//     if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//     else nav.classList.remove('sticky');
// });

// adding sticky using Intersection Observer API
// const obsCallBack = function(entries, observer){
//     entries.forEach(entry => console.log(entry));
// };
// // entries is an array of entries based on the thresholds
// const obsOptions = {
//     root : null,
//     threshold : [0, 0.2],        // how much of the element must be intersected to your selected root 
// };

// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');

const navHeight = nav.getBoundingClientRect();

const stickyNav = function(entries){
    const [entry] = entries;
    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin : `-${navHeight.height}px`,
});
headerObserver.observe(header);


// reveal element using Intersection Observer API

const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer){
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');

    // after observer observes a section, we can un-observe because it's not needed anymore
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root : null,
    threshold : 0.15,
});
allSections.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});

