function calcularEstrelas() {
  var inNumero = document.getElementById("inNumero").value;
  var outListaEstrelas = document.getElementById("outListaEstrelas");

  var numeroLinhas = Number(inNumero);

  if (numeroLinhas === 0 || isNaN(numeroLinhas)) {
    alert("Informe um número");
    return;
  }

  var resposta = "";

  for (var i = 0; i <= numeroLinhas; i++) {
    var estrela = "*".repeat(i);
    resposta += `${estrela}\n`;
  }
  outListaEstrelas.textContent = resposta;
}

var exibir = document.getElementById("exibir");
exibir.addEventListener("click", calcularEstrelas);
