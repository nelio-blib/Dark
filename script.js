
const accounts = [
  { username: "Alberto", password: "1234" },
  { username: "Antonio", password: "senha2" },
  { username: "magul", password: "senha3" },
  { username: "Nhambas", password: "3268" },
  { username: "Zito", password: "2211" },
  { username: "Bush", password: "1234" },
  { username: "Mrbot", password: "3268" },
  { username: "Momade", password: "2211" },
  { username: "Manex", password: "1234" },
  // Adicione mais contas conforme necessário
];

// ... (mantenha o código anterior)

const userContent = document.getElementById("userContent");
const loggedInUsername = document.getElementById("loggedInUsername");
const logoutBtn = document.getElementById("logoutBtn");

loginBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const account = accounts.find(acc => acc.username === username && acc.password === password);

  if (account) {
    loggedInUsername.textContent = username;
    showUserScreen();
  } else {
    Swal.fire("Credenciais inválidas. Tente novamente.", "", "error");
  }
});
notificationBtn.addEventListener("click", () => {
  Swal.fire({
    title: "Suporte:857497196.O Bot foi actualizado para uma nova versao, entre em contanto com o suporte.",
    icon: "info",
    confirmButtonText: "Fechar"
  });
});

logoutBtn.addEventListener("click", () => {
  showLoginScreen();
});

function showUserScreen() {
  userContent.style.display = "block";
  document.querySelector(".login-container").style.display = "none";
}

function showLoginScreen() {
  userContent.style.display = "none";
  document.querySelector(".login-container").style.display = "block";
}


// ... (mantenha o código anterior)

const androidBtn = document.getElementById("androidBtn");

document.querySelectorAll(".square").forEach((square, index) => {
  square.addEventListener("click", () => {
    redirectToNewPage(index + 1);
  });
});

androidBtn.addEventListener("click", () => {
  window.open("https://chat.openai.com/", "_blank");
});

function redirectToNewPage(pageNumber) {
  switch (pageNumber) {
    case 1:
      // Redirecionar para a página 1
      window.location.href = "page.html";
      break;
    case 2:
      // Redirecionar para a página 2
      window.location.href = "page.html";
      break;
    case 3:
      // Redirecionar para a página 3
      window.location.href = "page.html";
      break;
    case 4:
      // Redirecionar para a página 4
      window.location.href = "page.html";
      break;
    default:
      break;
  }
}


