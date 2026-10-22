document.addEventListener('DOMContentLoaded', () => {
    // Menu HP: buka/tutup lewat tombol burger, tutup lagi setelah link dipilih
    const navBurger = document.getElementById('navBurger');
    const navTautan = document.getElementById('navTautan');
    if (!navBurger || !navTautan) return;

    function setMenu(open) {
        navTautan.classList.toggle('nav__tautan--active', open);
        navBurger.setAttribute('aria-expanded', open);
    }

    navBurger.addEventListener('click', () => {
        setMenu(!navTautan.classList.contains('nav__tautan--active'));
    });

    navTautan.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setMenu(false));
    });
});
