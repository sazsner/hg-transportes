//Get the button
let mybutton = document.getElementById("mybutton");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
mybutton.addEventListener("click", topFunction);
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

console.log(document.documentElement.scrollTop);