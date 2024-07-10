const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector('#start-pause');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/JavaScript: manipulando elementos no DOM/sons/luna-rise-part-one.mp3');
const audioPlay = new Audio('/JavaScript: manipulando elementos no DOM/sons/play.wav');
const audioPausa = new Audio('/JavaScript: manipulando elementos no DOM/sons/pause.mp3');
const audioTempoFinalizado = new Audio('/JavaScript: manipulando elementos no DOM/sons/beep.mp3');
const tempoDisplay = document.querySelector('#tempo-display');

let tempoDecorridoEmSegundos = 5;
let intervaloId = null;

musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

focoBt.addEventListener('click', () => {
    alterarContexto('foco');
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
});

function alterarContexto(contextoSelecionado) {
    botoes.forEach(function (botao){
        botao.classList.remove('active');
    });
    html.setAttribute('data-contexto', contextoSelecionado);
    banner.setAttribute('src', `/JavaScript: manipulando elementos no DOM/imagens/${contextoSelecionado}.png`);
    switch (contextoSelecionado) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `;
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `;
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
            `;
            break;
        default:
            break;
    }
}

function contagemRegressiva() {
    if(tempoDecorridoEmSegundos <= 0){
        audioTempoFinalizado.play();
        alert('Tempo finalizado!');
        zerar();
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    tempoDisplay.textContent = tempoDecorridoEmSegundos; 
    console.log('Temporizador: ' + tempoDecorridoEmSegundos);
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if(intervaloId){
        audioPausa.play();
        zerar();
        return;
    }
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerar() {
    clearInterval(intervaloId); 
    intervaloId = null;
}
