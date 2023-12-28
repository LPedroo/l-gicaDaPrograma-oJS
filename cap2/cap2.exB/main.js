function calculate() {
  var carro = document.getElementById("carro").value;
  var preco = document.getElementById("preco").value;
  var resposta = document.getElementById("resposta");

  var calcularEntrada = preco - preco * 0.5;
  var calcularParcelas = calcularEntrada / 12;
  resposta.textContent = `
  Promoção: ${carro}\n
  \nEntrada de: ${calcularEntrada.toFixed(2)}\n
  \nParcela em 12X: ${calcularParcelas.toFixed(2)}`;
}
var exibir = document.getElementById("exibir");
exibir.addEventListener("click", calculate);
