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
let activeNavLink = document.querySelector('active')


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function initializeMenu() {
    const navBarList = document.getElementById('navbar__list')
    for (let section of sectionList) {
        const thisNavItem = document.createElement('li');
        thisNavItem.innerHTML = section.dataset.nav;
        thisNavItem.classList.add('menu__link');
        thisNavItem.setAttribute('data-id', section.id);
        // need the next attribute to determine which nav button
        // to toggle when a section is active
        thisNavItem.setAttribute('id', `nav-${section.id}`);
        docFragment.appendChild(thisNavItem);
        if (activeNavLink == null) {
            thisNavItem.classList.toggle('active')
            activeNavLink = thisNavItem;
        }
    }
    navBarList.appendChild(docFragment);
}

// get the elements position relative to the viewport, check it's
// positional values and return true or false.
// uses clientWidth and clientHeight properties for cross-browser support.
function elementInViewport(element) {
    const position = element.getBoundingClientRect();
    const viewHeight = window.innerHeight;
    // activeThreshold set to 25% of the view - can change later if needed
    const activeThreshold = viewHeight * 0.25;
    return (position.top < activeThreshold && position.bottom > activeThreshold);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Scroll to section using scrollIntoView method
function scrollToSection(element) {
    const section = document.getElementById(element.target.dataset.id);
    section.scrollIntoView({behavior: 'smooth'});
}

// loop through each section to determine which one is visible
// uses helper function elementInViewport().
function toggleActiveSection() {
    for (const section of sectionList) {
        if (elementInViewport(section) && section !== activeSection) {
            activeSection.classList.remove('your-active-class');
            section.classList.add('your-active-class');
            activeSection = section;
        }
    }
    // need to toggle nav when active section changes
    // there may be a better way to implement this, i don't like
    // the fact that it's called inside this function, 
    // the two should be separate, it really needs
    // a helper function.
    const toggleNav = document.querySelector(`#nav-${activeSection.id}`);
    toggleActiveNav(toggleNav); 
}

// set active navlink to mimic the active section
function toggleActiveNav(element) {
    // if this is the activelink - leave it be
    if (element !== activeNavLink) {
        element.classList.toggle('active');
        activeNavLink.classList.toggle('active');
        activeNavLink = element;
    }    
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// scroll to section and toggle nav on link click
navBarList = document.getElementById('navbar__list')
navBarList.addEventListener('click', function(e) {
    if(e.target && e.target.nodeName === 'LI') {
        // scroll to section and toggle the nav
        scrollToSection(e);
        toggleActiveNav(e.target);
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


