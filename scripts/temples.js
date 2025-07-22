document.addEventListener('DOMContentLoaded', () => {
    const footerContent = document.getElementById('footer-content');
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    footerContent.innerHTML = `© ${currentYear} Hyacinth Chibueze Okoro ✔ Last Modified: ${lastModified}`;
});
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    hamburger.setAttribute('aria-label', navMenu.classList.contains('active') ? 'Close navigation' : 'Open navigation');
});