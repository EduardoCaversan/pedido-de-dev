const buttonHeight = 40;
const buttonWidth = 130;

const maxWidth = innerWidth - buttonWidth;
const maxHeight = innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');
    const happy = document.getElementById('happy');
    const audio = document.querySelector('audio');
    function createBlob(data) {
        return new Blob([data], { type: "text/plain" });
    }

    function saveAs(content, fileName) {
        const a = document.createElement("a");
        const isBlob = content.toString().indexOf("Blob") > -1;
        let url = content;
        if (isBlob) {
            url = window.URL.createObjectURL(content);
        }
        a.href = url;
        a.download = fileName;
        a.click();
        if (isBlob) {
            window.URL.revokeObjectURL(url);
        }
    }
    function downloadFile() {
        const file = createBlob("Escolheu a melhor opção kkk, mas brincadeiras à parte...\nEu sempre estive te observando e pensando em quão maravilhosa você é.\nFiz essa declaração pensando em você a cada linha de código que eu escrevia\nGostaria que soubesse que tem liberdade para recusar meu pedido\nE caso assim o faça, a amizade continua a mesma!\nNo entanto gostaria do fundo do meu coração de te pedir uma chance...\nSei que não sou perfeito, e estou longe de ser!\nPorém ao seu lado eu quero tentar te fazer feliz e ser uma pessoa melhor\nTe trazendo felicidade a cada manhã, a cada sorriso\nTe acompanhar nos momentos mais difíceis e nos momentos mais felizes da sua vida, pois como diz Charlie Brown Jr\nDias de luta e dias de glória!\nCaso aceite, gostaria de te ver pessoalmente pra poder te abraçar e dizer tudo o que sinto...\nIndependentemente da sua resposta, gostaria de deixar claro uma coisa.\nEU TE AMO <3 !");
        saveAs(file, "Declaração para meu amor.txt");
    }

    button.addEventListener('mouseover', () => {
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button.style.position = "absolute";
    });
    button.addEventListener('click', () => {
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
    });
    happy.addEventListener('click', () => {
        downloadFile();
        audio.play();
        const fireDiv = document.querySelector('.fireworks');
        const fireworks = new Fireworks(fireDiv, {
            delay: { min: 30, max: 65 },
            trace: 6,
            speed: 1,
            particles: 300,
        })
        fireworks.start();
        setTimeout(function () {
            fireworks.stop();
        }, 50000)
        happy.addEventListener('click', () => {
            audio.pause();
        });
    });
});
