// Lógica Independiente para WhatsApp
const btnWhatsapp = document.getElementById("btnWhatsapp");
const sectionTrigger = document.getElementById("about"); // Se activa al llegar a About

function handleWhatsappScroll() {
  const scrollActual = window.scrollY || document.documentElement.scrollTop;
  
  // Usamos offsetTop igual que en tu botón Up
  if (scrollActual >= sectionTrigger.offsetTop) {
    btnWhatsapp.classList.add("show");
  } else {
    btnWhatsapp.classList.remove("show");
  }
}

window.addEventListener("scroll", handleWhatsappScroll);

