function exibirTempo() {
  var valor = document.getElementById("valor").value;
  var respostaTempo = document.getElementById("respostaTempo");
  var respostaTroco = document.getElementById("respostaTroco");

  var valorNumber = Number(valor);

  if (isNaN(valorNumber)) {
    alert("Valor incorreto...");
    return;
  }

  var tempoUm = 1;
  var tempoDois = 1.75;
  var tempoTres = 3.0;

  var trocoUm = valorNumber - tempoUm;
  var trocoDois = valorNumber - tempoDois;
  var trocoTres = valorNumber - tempoTres;

  if (valorNumber < tempoUm) {
    respostaTempo.textContent = "Valor insuficiente...";
    return;
  }

  if (valorNumber >= tempoUm) {
    respostaTempo.textContent = "Tempo: 30 Minutos.";
    respostaTroco.textContent = `Troco: R$${trocoUm.toFixed(2)}`;
  }

  if (valorNumber >= tempoDois) {
    respostaTempo.textContent = "Tempo: 60 Minutos.";
    respostaTroco.textContent = `Troco: R$${trocoDois.toFixed(2)}`;
  }

  if (valorNumber >= tempoTres) {
    respostaTempo.textContent = "Tempo: 120 Minutos";
    respostaTroco.textContent = `Troco: R$${trocoTres.toFixed(2)}`;
  }
}

var exibir = document.getElementById("exibir");
exibir.addEventListener("click", exibirTempo);
