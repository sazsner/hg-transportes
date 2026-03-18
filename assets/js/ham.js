/* const ham = document.querySelector('.ham');
const links = document.querySelector('.nav-links');
const hamBar = document.querySelectorAll('.ham span');
const linksBox = document.getElementById('links-box');



ham.addEventListener('click', () => {
  links.classList.toggle('activate');
  hamBar.forEach(child => { child.classList.toggle('animado') });
  ham.classList.toggle('girar');
  linksBox.classList.add('navy-shadow')
}); */

const ham = document.querySelector('.ham');
const links = document.querySelector('.nav-links');
const hamBar = document.querySelectorAll('.ham span');
const navItems = document.querySelectorAll('.nav-links a');

ham.addEventListener('click', () => {
  links.classList.toggle('activate');
  hamBar.forEach(el => el.classList.toggle('animado'));
  ham.classList.toggle('girar');
  /* scroll block */
  document.body.classList.toggle('menu-open'); // 🔥 clave
});


navItems.forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('activate');
    hamBar.forEach(el => el.classList.remove('animado'));
    ham.classList.remove('girar');

    /* scroll block */
    document.body.classList.remove('menu-open'); // ✅ FIX
  });
});

// CERRAR MENÚ AL HACER CLICK
document.addEventListener('click', (e) => {
  const isClickInsideMenu = links.contains(e.target);
  const isClickHamburger = ham.contains(e.target);

  if (!isClickInsideMenu && !isClickHamburger) {
    links.classList.remove('activate');
    hamBar.forEach(el => el.classList.remove('animado'));
    ham.classList.remove('girar');
    document.body.classList.remove('menu-open');
  }
});
