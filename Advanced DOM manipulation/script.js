'use strict';

///////////////////////////////////////

// header
const header = document.querySelector('.header');

// navigation bar

const nav = document.querySelector('nav');
const logo = nav.querySelector('img');
const navLinks = document.querySelector('.nav__links');
const navItems = document.querySelectorAll('.nav__item');

// tabs at the end

const tabContainer = document.querySelector('.operations__tab-container');
const tabs = tabContainer.children;
const tabsContent = document.querySelectorAll('.operations__content');

// basic scroll to section-1 button

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 =  document.querySelector('#section--1');

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


// scrolling to section-1 (smooth scrolling)
btnScrollTo.addEventListener('click', function(){
  section1.scrollIntoView({behavior: "smooth"});
});


// adding functionality to the TAB container and it's operations content
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


// adjusting the opacity on the nav bar
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


// Sticky navigation bar at the top from section-1 onwards till the bottom
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
