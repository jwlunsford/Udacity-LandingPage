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

// Scroll to anchor ID using scrollTO event
function scrollToSectionID(id) {

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

// Build menu
initializeMenu();

// Scroll to section on link click

// Set sections as active


