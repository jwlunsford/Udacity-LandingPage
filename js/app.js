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
    return (
        position.top >= 0 &&
        position.left >= 0 &&
        position.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        position.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


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
        if (isInViewport(section)) {
            section.classList.add('your-active-class');
        }
        else {
            section.classList.remove('your-active-class');
        }
    }
}

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
    const sec1 = document.getElementById('section1');
    const viewHeight = window.innerHeight;
    const scrollY = window.pageYOffset;
    const pos = sec1.getBoundingClientRect();
    const msg = `Top: ${pos.top}
                 View Height: ${viewHeight}
                 Scroll Y: ${scrollY}`
    console.log(msg);
}
)


// Build menu
initializeMenu();


