document.body.classList.add("loading");

window.addEventListener('load', function () {
  const loader = document.getElementById("loader");
  loader.classList.add("disppear");
  // document.body.classList.remove("loading");
  setTimeout(() => {
    document.body.classList.remove("loading");
  }, 100);
});