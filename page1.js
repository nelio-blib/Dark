
const randomTimeSquare = document.getElementById("randomTime");
const generateInfoBtn = document.getElementById("generateInfoBtn");
const randomInfoDisplay = document.getElementById("randomInfo");
const backBtn = document.getElementById("backBtn");
const iframe = document.querySelector("iframe");

// Atualiza o URL do site dentro do iframe quando a navegação ocorre
iframe.addEventListener("load", () => {
  document.getElementById("siteUrl").textContent = iframe.contentWindow.location.href;
});



backBtn.addEventListener("click", () => {
  window.history.back();
});

// Função para gerar informações aleatórias
function generateRandomInfo() {
  const randomInfoArray = [
    'Rosa...🚀', 'Rosa...🚀', '2X🔁', '7X', '9X⚡', '2X','3X ', '2X', '2X','3X ', '2X','3X ', '4X', '5X⭐️', '4X', '5X⭐️', '4X', '5X⭐️', 'Rosa...🚀',
    '3X ', '2X', '8X', '6X', '4X', '5X⭐️', '2X','3X ', '2X', '2X','3X ', '2X','3X ', '2X','3X ', '2X','3X ', '2X','3X ', 'Rosa...🚀', 'Rosa...🚀',
  ];
  const randomIndex = Math.floor(Math.random() * randomInfoArray.length);
  return randomInfoArray[randomIndex];
}

// Atualiza o horário atual
function updateCurrentTime() {
  const currentTime = new Date().toLocaleTimeString();
  document.getElementById("currentTime").textContent = currentTime;
}
const randomTimeDisplay = document.getElementById("randomTime");
randomTimeDisplay.textContent = randomTime;


// Atualiza informações aleatórias
function updateRandomInfo() {
  const randomInfo = generateRandomInfo();
  document.getElementById("randomInfo").textContent = randomInfo;
}

// Função para gerar um horário aleatório com um intervalo de 2 minutos
function generateRandomTime() {
  const currentTime = new Date();
  const randomSeconds = Math.floor(Math.random() * 60); // Número entre 0 e 29
  currentTime.setSeconds(currentTime.getSeconds() + randomSeconds);
  return `Entrar em: ${currentTime.toLocaleTimeString()}`;
}

// Atualiza o horário aleatório e as informações a cada 2 minutos
function updateRandomTimeAndInfo() {
  const randomTime = generateRandomTime();
  const randomInfo = generateRandomInfo();

  document.getElementById("randomTime").textContent = randomTime;
  document.getElementById("randomInfo").textContent = randomInfo;
}

// Atualiza o tempo a cada segundo
setInterval(updateCurrentTime, 1000);

// Atualiza as informações aleatórias a cada 5 segundos
setInterval(updateRandomInfo, 90000);

// Atualiza o horário aleatório e as informações a cada 2 minutos
setInterval(updateRandomTimeAndInfo, 90000); // 2 minutos em milissegundos



