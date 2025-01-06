// Ativar links do Menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add('ativo');
  }
}
links.forEach(ativarLink);

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

//perguntas frequentes.
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);

  resposta.classList.toggle('ativa');
  if (resposta.classList.contains('ativa')) {
    pergunta.setAttribute('aria-expanded', 'true');
  } else {
    pergunta.setAttribute('aria-expanded', 'false');
  }
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta);
}
perguntas.forEach(eventoPerguntas);

// Galeria de Bicicletas

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 1000px)').matches;

  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}

// Galery regencia
document.addEventListener('DOMContentLoaded', () => {
  const destaque = document.querySelector('.regency-galery-distac');
  const carrosselImages = document.querySelectorAll('.regency-carousel img');

  // Define a primeira imagem do carrossel como destaque padrão
  if (carrosselImages.length > 0) {
    destaque.innerHTML = `<img src="${carrosselImages[0].src}" alt="${carrosselImages[0].alt}">`;
  }

  // Troca a imagem em destaque ao clicar em qualquer imagem do carrossel
  carrosselImages.forEach((img) => {
    img.addEventListener('click', () => {
      destaque.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    });
  });
});
