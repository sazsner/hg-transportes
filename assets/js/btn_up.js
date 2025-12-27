//Get the button and about section
const buttonUp = document.getElementById("buttonUp");
const aboutSection = document.getElementById("about");

window.addEventListener("scroll", scrollFunction);
buttonUp.addEventListener("click", topFunction);

// function scroll button
function scrollFunction() {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop >= aboutSection.offsetTop) {
    buttonUp.classList.remove("hidden");
  } else {
    buttonUp.classList.add("hidden");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

console.log(document.documentElement.scrollTop);