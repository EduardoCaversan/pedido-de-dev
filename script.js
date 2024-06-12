const buttonHeight = 40;
const buttonWidth = 130;

window.addEventListener("DOMContentLoaded", () => {
  let maxWidth = (innerWidth - buttonWidth) - 10;
  let maxHeight = (innerHeight - buttonHeight) - 10;
  const button = document.getElementById("button");
  const happy = document.getElementById("happy");
  const audio = document.querySelector("audio");

  window.addEventListener("resize", () => {
    maxHeight = (innerHeight - buttonHeight) - 10;
    maxWidth = (innerWidth - buttonWidth) - 10;
    button.style.position = "relative";
    button.style.top = 0;
    button.style.left = 0;
  });

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
    const file = createBlob(
      "Escolheu a melhor opção s2 kk, mas brincadeiras à parte...\n\nDesde o dia em que eu te conheci, senti algo diferente em você... Algo que me motivava, me fazia mais feliz e mais forte.\nPor isso, nesse dia dos namorados fiz essa declaração especial para você pensando em construirmos algo novo juntos.\nGostaria do fundo do meu coração de te pedir uma chance de participar da sua vida e tornar seus dias mais felizes :)\n\nSei que não sou perfeito, e estou longe de ser!\nPorém ao seu lado eu quero evoluir constantemente e ser uma pessoa melhor\nTe trazendo felicidade a cada manhã, cada dia, cada ano que passar...\nTe acompanhar nos momentos mais difíceis e nos momentos mais felizes da sua vida, pois como diz Charlie Brown Jr: Dias de luta e dias de glória!\n\nCaso aceite, passo na sua casa sábado às 20:00 para irmos comer um rodízio top na Buonn Fratello!\n\nGostaria de reforçar mais uma vez a pessoa maravilhosa que você é! Sua existência é uma benção.\n\nTE AMO BB <3"
    );
    saveAs(file, "Leia com carinho.txt");
  }

  button.addEventListener("mouseover", () => {
    button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + "px";
    button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + "px";
    button.style.position = "absolute";
  });

  button.addEventListener("click", () => {
    button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + "px";
    button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + "px";
  });

  happy.addEventListener("click", () => {
    downloadFile();

    audio.play();
    const fireDiv = document.querySelector(".fireworks");
    const fireworks = new Fireworks(fireDiv, {
      delay: { min: 30, max: 65 },
      trace: 6,
      speed: 1,
      particles: 300,
    });

    fireworks.start();
    setTimeout(function () {
      fireworks.stop();
    }, 50000);

    happy.addEventListener("click", () => {
      audio.pause();
    });
  });
});
