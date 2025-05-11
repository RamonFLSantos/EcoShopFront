import { initLogin } from './login.js';

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.endsWith("login.html")) {
    initLogin();
  }
});
