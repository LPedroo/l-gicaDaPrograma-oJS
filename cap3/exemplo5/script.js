function calcularSaque() {
  var valorSaque = document.getElementById("value");
  var respostaSaque100 = document.getElementById("nota100");
  var respostaSaque50 = document.getElementById("nota50");
  var respostaSaque10 = document.getElementById("nota10");

  var saque = Number(valorSaque.value);

  if (saque == "" || isNaN(saque)) {
    alert("Por favor, informe o valor corretamente.");
  }

  if (saque % 10 != 0) {
    alert("Valor inválido! Escolha um valor múltiplo de 10 para sacar.");
  }

  //Calcula nota de 100
  var nota100 = Math.floor(saque / 100);
  var resto = saque % 100;

  //Calcula nota de 50
  var nota50 = Math.floor(resto / 50);
  resto = resto % 50;

  //Calcula nota de 10
  var nota10 = Math.floor(resto / 10);

  if (nota100 < 100) {
    respostaSaque100.textContent = `Notas de R$100: ${nota100}`;
  } else {
    respostaSaque100.textContent = `Notas de R$100: 0`;
  }
  if (nota50 > 0) {
    respostaSaque50.textContent = `Notas de R$50: ${nota50}`;
  }
  if (nota10 > 0) {
    respostaSaque10.textContent = `Notas de R$10: ${nota10}`;
  }
}
var exibir = document.getElementById("exibir");
exibir.addEventListener("click", calcularSaque);
