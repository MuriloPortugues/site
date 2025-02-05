// Função para carregar a paleta salva no localStorage
window.onload = function() {
    // Carrega e aplica a paleta salva no localStorage
    var paleta = localStorage.getItem('paleta');
    if (paleta) {
        // Aplica a paleta salva
        document.body.className = paleta;
    } else {
        // Caso não haja paleta salva, aplica a paleta padrão
        document.body.className = 'paleta1';
    }

    // Carrega o menu e rodapé dinamicamente
    carregarMenu();
    carregarRodape();
}

// Função para mudar a paleta e salvar a escolha no localStorage
function mudarPaleta(paleta) {
    document.body.className = paleta;
    localStorage.setItem('paleta', paleta); // Salva a escolha no localStorage
}

// Função para carregar o menu dinamicamente
function carregarMenu() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => document.getElementById('menu').innerHTML = data)
        .catch(error => console.error('Erro ao carregar o menu:', error));
}

// Função para carregar o rodapé dinamicamente
function carregarRodape() {
    fetch('rodape.html')
        .then(response => response.text())
        .then(data => document.getElementById('rodape').innerHTML = data)
        .catch(error => console.error('Erro ao carregar o rodapé:', error));
}
