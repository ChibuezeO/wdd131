const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById('copyright-year').textContent = `© ${currentYear} Hyacinth Okoro ✔ Awka, Nigeria`;

document.getElementById('last-modified').textContent = `Last Modified: ${lastModified}`;