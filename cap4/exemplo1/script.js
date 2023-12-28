function mostrarTabuada() {
  var inNumero = document.getElementById("number").value;
  var inResposta = document.getElementById("resposta");

  var numero = Number(inNumero);

  if (isNaN(numero)) {
    alert("Informe um número");
    numero.focus();
    return;
  }

  var resposta = "";

  for (var i = 1; i <= 10; i++) {
    resposta = `${resposta} ${numero} X ${i} = ${numero * i} \n`;
  }
  inResposta.textContent = resposta;
}

var exibir = document.getElementById("exibir");
exibir.addEventListener("click", mostrarTabuada);
