const ham = document.querySelector('.ham');
const links = document.querySelector('.nav-links');
const hamBar = document.querySelectorAll('.ham span');
const linksBox = document.getElementById('links-box');



ham.addEventListener('click', () => {
  links.classList.toggle('activate');
  hamBar.forEach(child => {child.classList.toggle('animado')});
  ham.classList.toggle('girar');
  linksBox.classList.add('navy-shadow')
});
