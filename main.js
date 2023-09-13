const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Arrays com partes da história
const personagens = ["João", "Maria", "Um astronauta", "Um detetive", "Um mago"];
const acoes = ["encontrou um mapa do tesouro", "viajou para o espaço", "resolveu um mistério", "lançou um feitiço"];
const lugares = ["em uma floresta", "na cidade grande", "em uma ilha deserta", "em um castelo antigo"];

// Função para gerar uma história aleatória
function gerarHistoria() {
    const personagemAleatorio = personagens[Math.floor(Math.random() * personagens.length)];
    const acaoAleatoria = acoes[Math.floor(Math.random() * acoes.length)];
    const lugarAleatorio = lugares[Math.floor(Math.random() * lugares.length)];

    const historiaGerada = `${customName.value} ${acaoAleatoria} ${lugarAleatorio}.`;

    story.textContent = historiaGerada;
    story.style.visibility = 'visible';
}
randomize.addEventListener('click', gerarHistoria);