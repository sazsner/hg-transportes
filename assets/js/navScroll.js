// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.getElementById("navbar");
let about = document.getElementById("about");
let linksBox = document.getElementById("linksBox");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= about.offsetTop) {
    navbar.classList.add("sticky-top");
    navbar.classList.add("bg-secondary");
  } else {
    navbar.classList.remove("sticky-top");
    navbar.classList.remove("bg-secondary");
  }
}; 