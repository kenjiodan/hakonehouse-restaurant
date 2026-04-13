const slides = document.querySelector('.carrossel-slides');
let counter = 0;

document.getElementById('next').addEventListener('click', () => {
    counter++;
    if (counter > 1) counter = 0; // Volta ao início
    slides.style.transform = `translateX(${-counter * 100}%)`;
});

document.getElementById('prev').addEventListener('click', () => {
    counter--;
    if (counter < 0) counter = 1; // Vai ao final
    slides.style.transform = `translateX(${-counter * 100}%)`;
});

/* ===== MENU HAMBÚRGUER ===== */
        const menuToggle = document.getElementById('menuToggle');
        const mainNav    = document.getElementById('mainNav');
 
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('open');
            const icon = menuToggle.querySelector('i');
            icon.className = mainNav.classList.contains('open')
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars';
        });
 
        /* Fechar menu ao clicar em link */
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('open');
                menuToggle.querySelector('i').className = 'fa-solid fa-bars';
            });
        });
 