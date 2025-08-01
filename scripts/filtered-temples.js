document.addEventListener('DOMContentLoaded', () => {
    const footerContent = document.getElementById('footer-content');
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    footerContent.innerHTML = `© ${currentYear} Hyacinth Chibueze Okoro ✔ Awka, Nigeria.`;
    document.getElementById('last-modified').textContent = `Last Modified: ${lastModified}`;

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const gallery = document.getElementById('templeGallery');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        hamburger.setAttribute('aria-label', navMenu.classList.contains('active') ? 'Close navigation' : 'Open navigation');
    });

    const temples = [
        { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
        { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
        { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
        { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
        { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
        { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
        { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
        { templeName: "Accra Ghana", location: "Independence Ave North Ridge, Accra Ghana", dedicated: "2004, January, 11", area: 17500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/200x200/accra-ghana-temple-759299-wallpaper.jpg" },
        { templeName: "Billings Montana", location: "Rim point drive, Billings Montana,  United States", dedicated: "1999, Nov, 21", area: 33800, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/billings-montana/320x200/08-Billings-Montana-Temple-1781063.jpg" },
        { templeName: "Idaho Falls", location: "Idaho Falls, Idaho. United states", dedicated: "1945, September, 25", area: 85624, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/320x200/7-Idaho-Falls-Temple-1375367.jpg" },
    ];

    function createTempleCards(templesToShow) {
        gallery.innerHTML = '';
        templesToShow.forEach(temple => {
            const card = document.createElement('figure');
            card.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p>Location: ${temple.location}</p>
                    <p>Dedicated: ${temple.dedicated}</p>
                    <p>Size: ${temple.area} sq ft</p>
                </figcaption>
            `;
            gallery.appendChild(card);
        });
    }

    function filterTemples(filter) {
        let filteredTemples = [...temples];
        const year = parseInt(new Date().getFullYear());

        if (filter === 'old') {
            filteredTemples = temples.filter(t => {
                const [year] = t.dedicated.split(', ')[0];
                return parseInt(year) < 1900;
            });
        } else if (filter === 'new') {
            filteredTemples = temples.filter(t => {
                const [year] = t.dedicated.split(', ')[0];
                return parseInt(year) > 2000;
            });
        } else if (filter === 'large') {
            filteredTemples = temples.filter(t => t.area > 90000);
        } else if (filter === 'small') {
            filteredTemples = temples.filter(t => t.area < 10000);
        }
        createTempleCards(filteredTemples);
    }

    document.querySelector('nav').addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const filter = e.target.getAttribute('data-filter');
            filterTemples(filter === 'all' ? temples : filter);
        }
    });

    createTempleCards(temples);
});