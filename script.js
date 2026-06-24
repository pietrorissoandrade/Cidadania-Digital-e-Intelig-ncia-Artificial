let acertos = 0;
let erros = 0;

function mostrarAlerta() {
  const mensagens = [
    "🤖 A IA está revolucionando a educação!",
    "🚀 A tecnologia muda o mundo todos os dias!",
    "💡 Informação é poder!",
    "🌎 A IA está presente em várias áreas da sociedade!"
  ];

  const sorteio = Math.floor(Math.random() * mensagens.length);
  alert(mensagens[sorteio]);
}

function alternarInfo() {
  const info = document.getElementById("infoExtra");

  if (info.classList.contains("hidden")) {
    info.classList.remove("hidden");
    info.style.opacity = "1";
  } else {
    info.classList.add("hidden");
    info.style.opacity = "0";
  }
}

function destacar() {
  const alerta = document.getElementById("alerta");

  const cores = [
    "#ff4d4d",
    "#4da6ff",
    "#4dff88",
    "#ffd24d",
    "#d24dff"
  ];

  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];

  alerta.style.backgroundColor = corAleatoria;
  alerta.style.transform = "scale(1.05)";

  setTimeout(() => {
    alerta.style.transform = "scale(1)";
  }, 300);
}

function responder(btn, correto) {
  const resultado = document.getElementById("resultado");
  const placar = document.getElementById("placar");

  btn.disabled = true;

  if (correto) {
    acertos++;

    resultado.innerHTML = "✔️ Muito bem! Você acertou!";
    resultado.style.color = "lightgreen";

    document.body.style.backgroundColor = "#1f3d1f";
  } else {
    erros++;

    resultado.innerHTML = "❌ Ops! Tente novamente.";
    resultado.style.color = "#ff4d4d";

    document.body.style.backgroundColor = "#3d1f1f";
  }

  placar.innerHTML =
    `🏆 Acertos: ${acertos} | ❌ Erros: ${erros}`;

  setTimeout(() => {
    document.body.style.backgroundColor = "";
  }, 1000);
}
