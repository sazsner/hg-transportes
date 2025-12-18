let scrollReveal = document.querySelectorAll(".scrollReveal");

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i=0; i < scrollReveal.length; i++) {
    let alturaAnimado = scrollReveal [i].offsetTop;
    if (alturaAnimado - 700 < scrollTop) {
      scrollReveal[i].style.opacity = 1;
      scrollReveal[i].classList.add("mostrarArriba");
    }
  }
}
window.addEventListener('scroll', mostrarScroll);