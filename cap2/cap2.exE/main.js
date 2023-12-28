function calcular() {
  var valor = document.getElementById("valor").value;
  var minutos = document.getElementById("minutagem").value;
  var resposta = document.getElementById("resposta");

  var calculate = Number((valor * minutos) / 15);
  var arredondamento = Math.floor(calculate);

  resposta.textContent = `O Valor a ser pago é R$ ${arredondamento.toFixed(2)}`;
}

var exibir = document.getElementById("exibir");
exibir.addEventListener("click", calcular);
