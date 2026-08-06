document.addEventListener('DOMContentLoaded', () => {
    // Mobile Nav Toggle
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
});
