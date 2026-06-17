function mostrarAlerta() {
  alert("A IA está transformando a forma como consumimos informação!");
}

function alternarInfo() {
  let info = document.getElementById("infoExtra");
  info.classList.toggle("hidden");
}

function destacar() {
  document.getElementById("alerta").style.background = "red";
}

function responder(btn, correto) {
  let resultado = document.getElementById("resultado");

  if (correto) {
    resultado.innerHTML = "✔️ Resposta correta!";
    resultado.style.color = "lightgreen";
  } else {
    resultado.innerHTML = "❌ Resposta incorreta!";
    resultado.style.color = "red";
  }
}
