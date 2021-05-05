const imagem = window.document.createElement("img");
const tempo = new Date();
const res = document.querySelector("#res");

function trocaImagem() {
  let seg = tempo.getSeconds();

  if (seg < 15) {
    imagem.setAttribute("src", "imagens/allianzparque.jpeg");
  } else if (seg < 30) {
    imagem.setAttribute("src", "imagens/morumbi.jpg");
  } else if (seg < 45) {
    imagem.setAttribute("src", "imagens/vilabelmiro.jpeg");
  } else {
    imagem.setAttribute("src", "imagens/arenacorinthians.jpeg");
  }

  res.appendChild(imagem);
}

setInterval(trocaImagem(), 15000);
