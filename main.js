
// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const isOpen = links.getAttribute('data-open') === 'true';
    links.setAttribute('data-open', String(!isOpen));
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
}
// Dynamic year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
