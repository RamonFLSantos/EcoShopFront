export function initLogin() {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;

      try {
        const response = await fetch(`http://localhost:8080/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(senha)}`, {
          method: "GET"
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("token", data.token);
          window.location.href = "index.html";
        } else {
          alert("Email ou senha incorretos");
        }
      } catch (error) {
        console.error("Erro ao fazer login:", error);
        alert("Erro na conexão com o servidor");
      }
    });
  }
}
