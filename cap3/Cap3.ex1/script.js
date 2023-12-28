function exibirNumero() {
  var parImpar = document.getElementById("number").value;
  var resposta = document.getElementById("resposta");

  var numero = Number(parImpar);

  if (numero == 0 || isNaN(numero)) {
    alert("Número inválido!");
    return;
  }

  var calculoPar = numero % 2;

  if (calculoPar == 0) {
    resposta.textContent = `Resposta ${numero} é Par`;
  } else {
    resposta.textContent = `Resposta ${numero} é Impar`;
  }
}

var exibir = document.getElementById("exibir");
exibir.addEventListener("click", exibirNumero);
