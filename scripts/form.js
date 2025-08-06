const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

function populateProducts() {
    const select = document.getElementById('productName');
    if (select) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            select.appendChild(option);
        });
    }
}

function updateReviewCount() {
    const reviewCount = localStorage.getItem('reviewCount') ? parseInt(localStorage.getItem('reviewCount')) : 0;
    const countElement = document.getElementById('reviewCount');
    if (countElement) {
        localStorage.setItem('reviewCount', reviewCount + 1);
        countElement.textContent = reviewCount + 1;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    populateProducts();
    if (document.getElementById('reviewCount')) {
        updateReviewCount();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const footerContent = document.getElementById('footer-content');
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    footerContent.innerHTML = `© ${currentYear} Hyacinth Chibueze Okoro ✔ Awka, Nigeria.`;
    document.getElementById('last-modified').textContent = `Last Modified: ${lastModified}`;
});