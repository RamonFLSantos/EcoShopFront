export function initCadastro() {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const nome = document.querySelector("#nome-cadastro").value;
      const email = document.querySelector("#email-cadastro").value;
      const senha = document.querySelector("#senha-cadastro").value;

      const payload = {
        username: nome,
        email: email,
        password: senha
      };

      try {
        const response = await fetch("http://localhost:8080/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("token", data.token);
          alert("Cadastro realizado com sucesso!");
          window.location.href = "login.html";
        } else {
          const errorText = await response.text();
          alert(`Erro: ${errorText}`);
        }
      } catch (error) {
        console.error("Erro ao cadastrar:", error);
        alert("Erro na conexão com o servidor");
      }
    });
  }
}
