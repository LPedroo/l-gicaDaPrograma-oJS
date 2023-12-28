function verificarPrimo() {
  var numeroPrimo = document.getElementById("number").value;
  var resposta = document.getElementById("resposta");

  var numero = Number(numeroPrimo);

  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número!");
    return;
  }

  var temDivisor = 0; // Inicia em 0 ou false

  for (i = 2; i <= numero / 2; i++) {
    if (numero % i == 0) {
      temDivisor = 1; //muda a flag para true
      break;
    }
  }

  if (numero > 1 && !temDivisor) {
    resposta.textContent = `O número ${numero} é primo!`;
  } else {
    resposta.textContent = `O número ${numero} não é primo.`;
  }
}

var exibir = document.getElementById("exibir");
exibir.addEventListener("click", verificarPrimo);
