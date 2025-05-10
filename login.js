document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault()

  const email = document.getElementById("email").value
  const password = document.getElementById("senha").value

  const response = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })

  if (response.status === 200) {
    window.location.href = "index.html"
  } else {
    alert("Email ou senha inválidos.")
  }
})
