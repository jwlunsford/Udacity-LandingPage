/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const listOfSections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function initializeMenu() {
    const navBarList = document.getElementById('navbar__list')
    const docFragment = document.createDocumentFragment();
    for (let section of listOfSections) {
        const newNavItem = document.createElement('li');
        newNavItem.textContent = section.dataset.nav;
        newNavItem.classList.add('menu__link');
        docFragment.appendChild(newNavItem);
    }
    navBarList.appendChild(docFragment);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport
function insertActiveClass() {

};

// Scroll to section using scrollTO event
function scrollToSection(e) {
    console.log(e.target.textContent);
};

function toggleActiveSection() {

};

function toggleActiveNav() {

};

/**
 * End Main Functions
 * Begin Events
 * 
*/

navBarList = document.getElementById('navbar__list')
navBarList.addEventListener('click', function(e) {
    if(e.target && e.target.nodeName === 'LI') {
        scrollToSection(e);
    }
});


// Build menu
initializeMenu();

// Scroll to section on link click


// Set sections as active


