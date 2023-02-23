

/* Menu hamburgesa */
export function eventListeners() {
  const mobileMenu = document.querySelector(".menu-mobile");

  mobileMenu.addEventListener("click", navegacionResponsive);
}

export function navegacionResponsive() {
  const navegacion = document.querySelector(".navegacion");

  if (navegacion.classList.contains("mostrar")) {
    navegacion.classList.remove("mostrar");
  } else {
    navegacion.classList.add("mostrar");
  }
}
