document.body.classList.add("loading");

window.addEventListener('load', function () {
  loader.classList.add("disppear");
  document.body.classList.remove("loading");
});