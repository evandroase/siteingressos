let imagemElemento = document.querySelector(".imagem");
const tempo = new Date();

const imagens = [
  "../imagens/morumbi.jpg",
  "../imagens/vilabelmiro.jpeg",
  "../imagens/arenacorinthians.jpeg",
  "../imagens/allianzparque.jpeg",
];
let index = 0;

if (imagemElemento == null) {
  console.log("imagem vazia!");
}

function trocar() {
  imagemElemento.src = imagens[index];
  index > 2 ? (index = 0) : index++;
}

window.onload = function () {
  setInterval(trocar, 5000);
};
