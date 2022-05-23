window.onscroll = function() {
  glue()
};


// Code for Sticky Navbar
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function glue() {
  if (window.scrollY >= sticky) {
    document.getElementById("navbar").style.position = 'fixed';
    document.getElementById("navbar").style.top = '0';
  } else {
    document.getElementById("navbar").style.position = 'absolute';
    document.getElementById("navbar").style.top = '50px';
  }
}

