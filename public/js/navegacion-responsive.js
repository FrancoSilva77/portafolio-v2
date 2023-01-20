document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
  scrollNav();
});

function scrollNav() {
  const enlaces = document.querySelectorAll(".navegacion a");
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();

      const seccionScroll = e.target.attributes.href.value;
      const seccion = document.querySelector(seccionScroll);
      seccion.scrollIntoView({ behavior: "smooth" });
    });
  });
}


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
