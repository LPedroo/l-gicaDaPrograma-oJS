var noticias = [];
var numeroNoticias = 0;

function adicionarNoticia() {
  var inNoticia = document.getElementById("inNoticia");

  var noticia = inNoticia.value;

  if (noticia == "") {
    alert("Informe uma notícia");
    inNoticia.focus();
    return;
  }

  noticias.push({ noticia: noticia });

  inNoticia.value = "";
  inNoticia.focus();

  document.getElementById(
    "numeroNoticias"
  ).textContent = `Notícias Cadastradas: ${noticias.length}`;
  var lista = "";

  for (var i = 0; i < noticias.length; i++) {
    lista += `${i + 1}°) ${noticias[i].noticia} \n`;
  }
  document.getElementById("resposta").textContent = lista;
}

var btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", adicionarNoticia);

function listarNoticia() {
  if (noticias.length == 0) {
    document.getElementById("resposta").textContent =
      "Não há notícias no momento";
  }
  var ultimasNoticias = noticias.slice(-3);
  ultimasNoticias.reverse();

  var lista = "";
  for (var i = 0; i < ultimasNoticias.length; i++) {
    lista += `${noticias.length - i}°) ${ultimasNoticias[i].noticia} \n`;
  }
  document.getElementById("resposta").textContent = lista;
  console.log(lista);
}

var btnListar = document.getElementById("btnListar");
btnListar.addEventListener("click", listarNoticia);
