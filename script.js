document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav-links');

    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('visible');
    });

    const filterSelect = document.getElementById('filter');
    const articles = document.querySelectorAll('.articles article');

    filterSelect.addEventListener('change', () => {
        const value = filterSelect.value;
        articles.forEach(article => {
            article.style.display = value === 'all' || article.classList.contains(value)
                ? 'block'
                : 'none';
        });
    });
});
