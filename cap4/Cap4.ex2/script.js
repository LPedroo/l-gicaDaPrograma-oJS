var chinchilasTotal = 0;

var resposta = "";

function calcularChinchilas() {
  var inNumero = document.getElementById("inNumero").value;
  var inAnos = document.getElementById("inAnos").value;
  var outListaContas = document.getElementById("outListaContas");

  var numeroChinchilas = Number(inNumero);
  var preverAnos = parseInt(inAnos);

  if (
    numeroChinchilas == 0 ||
    preverAnos == 0 ||
    isNaN(numeroChinchilas, preverAnos)
  ) {
    alert("Insira os números válidos em cada campo.");
  }

  for (var i = 1; i <= preverAnos; i++) {
    resposta += ` ${i}°ano - ${numeroChinchilas} Chinchilas \n`;
    numeroChinchilas = numeroChinchilas * 3;
  }

  outListaContas.textContent = resposta;
}

var exibir = document.getElementById("exibir");
exibir.addEventListener("click", calcularChinchilas);
