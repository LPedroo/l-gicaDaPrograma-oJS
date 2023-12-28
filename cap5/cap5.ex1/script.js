var clubes = [];

function adicionarClube() {
  var inClube = document.getElementById("inClube");

  var nomeClube = inClube.value;

  if (nomeClube == "") {
    alert("Informe o nome do clube");
    inClube.focus();
    return;
  }

  clubes.push({ nomeClube: nomeClube });

  inClube.value = "";
  inClube.focus();

  listarClubes();
}

var btnAd = document.getElementById("btnAd");
btnAd.addEventListener("click", adicionarClube);

function listarClubes() {
  if (clubes.length == 0) {
    alert("Não há clubes na lista");
    return;
  }

  var lista = "";

  for (var i = 0; i < clubes.length; i++) {
    lista += `${i + 1}. ${clubes[i].nomeClube}\n`;
  }
  document.getElementById("inResposta").textContent = lista;
}

var btnList = document.getElementById("btnList");
btnList.addEventListener("click", listarClubes);

function tabelaDeJogos() {
  if (clubes.length == 0) {
    alert("Não há clubes na lista");
    return;
  }

  //copiando o array
  // var copia = clubes.slice();

  var resumo = "";

  for (var i = 0; i < clubes.length; i++) {
    var mandante = clubes.shift(); //shift remove o primeiro
    var visitante = clubes.pop(); //pop remove o ultimo
    resumo += `${mandante.nomeClube} X ${visitante.nomeClube}\n`;
    console.log(mandante, visitante);
  }
  var mandante = clubes.shift(); //shift remove o primeiro
  var visitante = clubes.pop(); //pop remove o ultimo
  resumo += `${mandante.nomeClube} X ${visitante.nomeClube}\n`;
  document.getElementById("inResposta").textContent = resumo;

  console.log(clubes);
}

var btnExibir = document.getElementById("btnExibir");
btnExibir.addEventListener("click", tabelaDeJogos);
