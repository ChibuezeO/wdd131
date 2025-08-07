document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('recipeSearch');
    if (searchInput) {
        const recipeCards = document.querySelectorAll('.recipe-card');
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            recipeCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const region = card.querySelector('p:last-child').textContent.toLowerCase();
                if (title.includes(searchTerm) || region.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    const form = document.getElementById('recipeForm') || document.getElementById('communityForm');
    const formMessage = document.getElementById('formMessage');

    if (form && formMessage) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const isRecipeForm = form.id === 'recipeForm';
            const titleField = isRecipeForm ? 'recipeName' : 'submissionTitle';
            const regionField = isRecipeForm ? 'recipeRegion' : 'submissionRegion';
            const descField = isRecipeForm ? 'recipeDescription' : 'submissionDescription';

            const title = document.getElementById(titleField).value;
            const region = document.getElementById(regionField).value;
            const description = document.getElementById(descField).value;
            const submissionType = isRecipeForm ? 'Recipe' : document.getElementById('submissionType')?.value;

            if (title && description && (isRecipeForm ? region : submissionType)) {
                formMessage.textContent = `Thank you! Your ${submissionType || 'Recipe'} "${title}" has been submitted.`;
                formMessage.style.color = 'green';
                form.reset();
            } else {
                formMessage.textContent = 'Please fill out all required fields.';
                formMessage.style.color = 'red';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const footerContent = document.getElementById('footer-content');
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    footerContent.innerHTML = `© ${currentYear} Hyacinth Chibueze Okoro ✔ Awka, Nigeria.`;
    document.getElementById('last-modified').textContent = `Last Modified: ${lastModified}`;
});
