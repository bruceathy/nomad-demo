const navLinks = document.getElementById("nav-links");
const navIcon = document.getElementById("nav-icon");

function toggleMenu() {
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
}

navIcon.addEventListener("click", toggleMenu);
