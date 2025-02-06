// Função para alterar a paleta de cores
function alterarPaleta() {
    var paletaSelecionada = document.getElementById('paletaSelect').value;

    // Verifica a paleta escolhida
    if (paletaSelecionada === "paleta1") {
        document.body.className = 'paleta1';
        localStorage.setItem('paleta', 'paleta1');
    } else if (paletaSelecionada === "paleta2") {
        document.body.className = 'paleta2';
        localStorage.setItem('paleta', 'paleta2');
    } else if (paletaSelecionada === "paleta3") {
        document.body.className = 'paleta3';
        localStorage.setItem('paleta', 'paleta3');
    } else if (paletaSelecionada === "paleta4") {
        document.body.className = 'paleta4';
        localStorage.setItem('paleta', 'paleta4');
    } else if (paletaSelecionada === "paleta5") {
        document.body.className = 'paleta5';
        localStorage.setItem('paleta', 'paleta5');
    } else if (paletaSelecionada === "paleta6") {
        document.body.className = 'paleta6';
        localStorage.setItem('paleta', 'paleta6');
    } else if (paletaSelecionada === "paleta7") {
        document.body.className = 'paleta7';
        localStorage.setItem('paleta', 'paleta7');
    } else if (paletaSelecionada === "paleta8") {
        document.body.className = 'paleta8';
        localStorage.setItem('paleta', 'paleta8');
    } else if (paletaSelecionada === "paleta9") {
        document.body.className = 'paleta9';
        localStorage.setItem('paleta', 'paleta9');
    } else if (paletaSelecionada === "paleta10") {
        document.body.className = 'paleta10';
        localStorage.setItem('paleta', 'paleta10');
    } else if (paletaSelecionada === "paleta11") {
        document.body.className = 'paleta11';
        localStorage.setItem('paleta', 'paleta11');
    } else if (paletaSelecionada === "paleta12") {
        document.body.className = 'paleta12';
        localStorage.setItem('paleta', 'paleta12');
    } else if (paletaSelecionada === "paleta13") {
        document.body.className = 'paleta13';
        localStorage.setItem('paleta', 'paleta13');
    } else if (paletaSelecionada === "paleta14") {
        document.body.className = 'paleta14';
        localStorage.setItem('paleta', 'paleta14');
    } else if (paletaSelecionada === "temaClaro") {
        document.body.className = 'temaClaro';
        localStorage.setItem('paleta', 'temaClaro');
    } else if (paletaSelecionada === "temaEscuro") {
        document.body.className = 'temaEscuro';
        localStorage.setItem('paleta', 'temaEscuro');
    } else if (paletaSelecionada === "personalizada") {
        var corFundo = document.getElementById('corFundo').value;
        var corTexto = document.getElementById('corTexto').value;
        document.body.style.backgroundColor = corFundo;
        document.body.style.color = corTexto;
        localStorage.setItem('paleta', 'personalizada');
        localStorage.setItem('corFundo', corFundo);
        localStorage.setItem('corTexto', corTexto);
    }
}

// Função para ajustar o tamanho do texto global
function ajustarTamanhoTexto(acao) {
    var tamanhoAtual = parseInt(window.getComputedStyle(document.body).fontSize);
    var novoTamanho = (acao === 'aumentar') ? tamanhoAtual + 2 : tamanhoAtual - 2;
    document.body.style.fontSize = novoTamanho + 'px';
    localStorage.setItem('tamanhoTextoGlobal', novoTamanho);
}

// Função para carregar as preferências de paleta e tamanho de texto
window.onload = function() {
    // Carregar a paleta salva
    var paleta = localStorage.getItem('paleta');
    if (paleta) {
        document.body.className = paleta;
    }

    // Carregar o tamanho de texto salvo
    var tamanhoTextoGlobal = localStorage.getItem('tamanhoTextoGlobal');
    if (tamanhoTextoGlobal) {
        document.body.style.fontSize = tamanhoTextoGlobal + 'px';
    }

    // Carregar o menu e rodapé dinamicamente
    carregarMenu();
    carregarRodape();
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
