let imagemElemento = document.querySelector(".imagem");
const tempo = new Date();

const imagens = ["../imagens/morumbi.jpg", "../imagens/vilabelmiro.jpeg", "../imagens/arenacorinthians.jpeg", "../imagens/allianzparque.jpeg"]
let index = 0;


if(imagemElemento == null) {
  console.log("imagem vazia!")
}

function trocar() {
  imagemElemento.src = imagens[index];
  index > 1 ? index = 0 : index++;
}

window.onload = function () {
  setInterval(trocar, 1000);
};

// function trocaImagem() {
//   let seg = tempo.getSeconds();

//   if (seg < 5) {
//     imagem.setAttribute("src", "../imagens/allianzparque.jpeg");
//   } else if (seg < 15) {
//     imagem.setAttribute("src", "../imagens/morumbi.jpg");
//   } else if (seg < 20) {
//     imagem.setAttribute("src", "../imagens/vilabelmiro.jpeg");
//   } else {
//     imagem.setAttribute("src", "../imagens/arenacorinthians.jpeg");
//   }

// }



