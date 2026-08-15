// Menu button functionality
const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');
const navMenu = document.querySelector('.nav-menu');

// Open menu
menuOpenButton.addEventListener('click', () => {
    navMenu.classList.add('open');
});

// Close menu
menuCloseButton.addEventListener('click', () => {
    navMenu.classList.remove('open');
});
