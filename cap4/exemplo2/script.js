function descrescer() {
  var inNumero = document.getElementById("number").value;
  var inResposta = document.getElementById("resposta");

  var numero = Number(inNumero);

  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número");
    numero.focus();
    return;
  }

  var resposta = `Entre ${numero} e 1: ${numero} `;

  for (var i = numero - 1; i > 0; i--) {
    resposta = `${resposta} , ${i}`;
  }

  //Põe ponto final no último número
  resposta = `${resposta}.`;
  inResposta.textContent = resposta;
}

var exibir = document.getElementById("exibir");
exibir.addEventListener("click", descrescer);
