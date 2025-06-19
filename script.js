// Menú hamburguesa para navegación responsiva
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

// Crear botón hamburguesa
const burger = document.createElement('button');
burger.className = 'burger';
burger.innerHTML = '<span></span><span></span><span></span>';
header.insertBefore(burger, nav);

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    burger.classList.toggle('open');
});

// Cerrar menú al hacer click en un enlace (en móvil)
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-open');
        burger.classList.remove('open');
    });
}); 