// When the user scrolls the page, execute myFunction
// window.onscroll = function() {navScroll()};

// Get the navbar
// let navbar = document.getElementById("navbar");
// let about = document.getElementById("about");
// let linksBox = document.getElementById("linksBox");
// Get the offset position of the navbar



// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function navScroll() {
//   if (window.pageYOffset >= about.offsetTop) {
//     navbar.classList.add("navbar-sticky");
//     navbar.classList.add("bg-secondary");
//   } else {
//     navbar.classList.remove("navbar-sticky");
//     navbar.classList.remove("bg-secondary");
//   }
// };

// console.log(navbar, about)

const navbar = document.getElementById("navbar");
const about = document.getElementById("about");

window.addEventListener("scroll", navScroll);

function navScroll() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop >= about.offsetTop) {
    navbar.classList.add('show-nav');
    navbar.classList.add('bg-secondary');
  } else {
    navbar.classList.remove('show-nav');
    navbar.classList.remove('bg-secondary');
  }
}