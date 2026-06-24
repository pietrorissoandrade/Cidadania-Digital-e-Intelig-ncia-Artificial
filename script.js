/* ==========================================
   LÓGICA INTERATIVA DO PORTAL DEEPFAKE Y2K
   ========================================== */

// 1. Função para Alternar entre as Abas do Site
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // Esconde todos os blocos de conteúdo das abas
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    // Remove a classe "active" (efeito visual de pressionada) de todos os botões de aba
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    // Torna visível o conteúdo da aba que foi clicada
    document.getElementById(tabName).classList.add("active");
    
    // Adiciona o destaque visual de "Ativo" no botão que o usuário clicou
    evt.currentTarget.classList.add("active");
}

// 2. Função para Verificar a Resposta do Cyber-Quiz
function checkAnswer(isCorrect) {
    var resultDiv = document.getElementById("quiz-result");
    
    if (isCorrect) {
        resultDiv.innerHTML = "🟩 ACESSO CONCEDIDO, CIBER-DETETIVE!<br>Resposta correta. Investigar em fontes oficiais antes de partilhar é a melhor arma contra as armadilhas digitais e manipulações por IA.";
        resultDiv.style.color = "#008000"; // Verde escuro para sucesso
    } else {
        resultDiv.innerHTML = "🟥 ERRO CRÍTICO DE SISTEMA!<br>Opção perigosa detectada. Lembra-te: os deepfakes atuais imitam perfeitamente a realidade. Nunca repasses conteúdo alarmante sem verificar primeiro!";
        resultDiv.style.color = "#ff0000"; // Vermelho para erro
    }
}
