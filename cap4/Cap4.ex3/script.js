function verificarPerfeito() {
  var inNumero = document.getElementById("inNumero").value;
  var outNumero = document.getElementById("outNumeros");
  var outResposta = document.getElementById("resposta");

  var numero = Number(inNumero);

  if (numero == 0 || isNaN(numero)) {
    alert("Não é possível dividir esse número");
  }

  //Calcula os divisores
  var somadivisores = 0;
  for (var i = 1; i < numero; i++) {
    if (numero % i == 0) {
      somadivisores += i;
    }
  }

  //Verifica se a soma dos divisores é igual ao número informado
  if (somadivisores === numero) {
    outResposta.textContent = `O número ${numero} é perfeito.`;
  } else {
    outResposta.textContent = `O número ${numero} não é perfeito.`;
  }

  var resposta = `Divisores do ${numero}: `;

  //Exibe os divisores
  for (var i = 1; i < numero; i++) {
    if (numero % i == 0) {
      var divisores = i;
      resposta = `${resposta} ${divisores}; `;
    }
  }
  outNumero.textContent = `${resposta}  (Soma: ${somadivisores})`;
}

var exibir = document.getElementById("exibir");
exibir.addEventListener("click", verificarPerfeito);
