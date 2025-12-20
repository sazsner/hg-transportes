
/* PRE LOADER */
const loader = document.getElementById('loader');
const hidden = document.getElementById('hidden');

window.addEventListener('load', function vanish(){
  loader.classList.add("disppear");
  hidden.classList.remove("hidden")
});