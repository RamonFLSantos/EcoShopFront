import { initLogin } from './login.js';
import { initCadastro } from "./cadastro.js";

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.endsWith("login.html")) {
    initLogin();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("cadastro.html")) {
    initCadastro();
  }
});

