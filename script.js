document.addEventListener('DOMContentLoaded', () => {
    // 1. Tombol Menu Navigasi
    const menuToggle = document.getElementById('menu-toggle');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            alert('Menu Navigasi SDTQ ATTAMAM:\n- Tentang Kami\n- 3 Pilar Utama\n- Dokumentasi Kegiatan\n- Mentor & Pendidik\n- PPDB 2025-2026');
        });
    }

    // 2. Navigasi Halus (Smooth Scroll) untuk Tautan Jangkar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
