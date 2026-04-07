/* let scrollReveal = document.querySelectorAll(".scrollReveal");

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
window.addEventListener('scroll', mostrarScroll); */




// const elementosRul = document.querySelectorAll(".scrollReveal");

// function mostrarScroll() {
//   const triggerBottom = window.innerHeight * 0.85; // Se activa al llegar al 85% de la pantalla

//   elementosRul.forEach(caja => {
//     const cajaTop = caja.getBoundingClientRect().top;

//     if (cajaTop < triggerBottom) {
//       caja.classList.add("mostrarArriba");
//     } else {
//       // Opcional: quita el comentario de abajo si quieres que se oculte al subir
//       // caja.classList.remove("mostrarArriba");
//     }
//   });
// }

// // Escuchamos el scroll
// window.addEventListener('scroll', mostrarScroll);

// // Ejecutamos una vez al cargar por si hay elementos ya visibles arriba
// mostrarScroll();





// Configuramos el observador
const opciones = {
  root: null, // usa el viewport del navegador
  rootMargin: "0px 0px -100px 0px",
  threshold: 0.15 // Se activa cuando se ve el 15% de la sección
};

const aparecerAlScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Añadimos la clase que hace la magia
      entry.target.classList.add("reveal-visible");
      // Dejamos de observar este elemento para ahorrar memoria
      observer.unobserve(entry.target);
    }
  });
}, opciones);

// Seleccionamos todos los elementos con la clase .revelar y los ponemos a vigilar
document.querySelectorAll(".reveal").forEach(elemento => {
  aparecerAlScroll.observe(elemento);
});