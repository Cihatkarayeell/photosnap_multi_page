document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuOpened = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOpen = document.querySelector('.open-toggle');
    const mobileMenuClose = document.querySelector('.close-toggle');
    const main = document.querySelector('.main');
    const header = document.querySelector('.header');

    if (mobileMenuOpened && mobileMenu && mobileMenuOpen && mobileMenuClose && main && header) {
        mobileMenuOpened.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileMenuClose.classList.toggle('active');
            mobileMenuOpen.classList.toggle('active');
            main.classList.toggle('active');
            header.classList.toggle('active');
        });
    } else {
        console.error('One or more elements could not be found.');
    }
});

const toggleBall = document.querySelector('.toggle-section');
const pricingCards = document.querySelectorAll('.pricing-card');
toggleBall.addEventListener('click', () => {
    toggleBall.classList.toggle('active');

    pricingCards.forEach(card => {
        card.classList.toggle('yearly');
      });
}) 