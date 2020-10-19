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
const sectionList = document.querySelectorAll('section');
const docFragment = document.createDocumentFragment();

let activeSection = document.querySelector('.your-active-class');
let activeNavLink = document.querySelector('active-navlink')


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function initializeMenu() {
    const navBarList = document.getElementById('navbar__list')
    for (let section of sectionList) {
        const newNavItem = document.createElement('li');
        newNavItem.textContent = section.dataset.nav;
        newNavItem.classList.add('menu__link');
        newNavItem.setAttribute('data-id', section.id);
        docFragment.appendChild(newNavItem);
    }
    navBarList.appendChild(docFragment);
}

// get the elements position relative to the viewport, check it's
// positional values and return true or false.
// uses clientWidth and clientHeight properties for cross-browser support.
function isInViewport(element) {
    const position = element.getBoundingClientRect();
    const viewHeight = window.innerHeight;
    // activeThreshold within 35% of the view
    const activeThreshold = viewHeight * 0.35;
    return (position.top < activeThreshold && position.bottom > activeThreshold);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Add class 'active' to section when near top of viewport
function insertActiveClass() {

}

// Scroll to section using scrollTO event
function scrollToSection(e) {
    const section = document.getElementById(e.target.dataset.id);
    section.scrollIntoView({behavior: 'smooth'});
}

// loop through each section to determine which one is visible
// uses helper function isInViewport().
function toggleActiveSection() {
    for (const section of sectionList) {
        if (isInViewport(section) && section !== activeSection) {
            activeSection.classList.remove('your-active-class');
            section.classList.add('your-active-class');
            activeSection = section;
        }
    }
}

// set active nav to reflect the active section
function toggleActiveNav() {

}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// scroll to section on link click
navBarList = document.getElementById('navbar__list')
navBarList.addEventListener('click', function(e) {
    if(e.target && e.target.nodeName === 'LI') {
        scrollToSection(e);
    }
}
)

// set sections as active
document.addEventListener('scroll', function () {
    toggleActiveSection();
}
);


// Build menu
initializeMenu();


