document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
});


/* Menu hamburgesa */
function eventListeners() {
  const mobileMenu = document.querySelector(".menu-mobile");

  mobileMenu.addEventListener("click", navegacionResponsive);
}

function navegacionResponsive() {
  const navegacion = document.querySelector(".navegacion");

  if (navegacion.classList.contains("mostrar")) {
    navegacion.classList.remove("mostrar");
  } else {
    navegacion.classList.add("mostrar");
  }
}
