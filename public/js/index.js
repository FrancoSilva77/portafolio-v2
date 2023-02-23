import { eventListeners } from "./navegacion-responsive.js";
import { scrollNav } from "./scrollNav.js";

document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
  scrollNav();
});
