function calcularRaiz() {
  var verificarNumero = document.getElementById("number");
  var resultado = document.getElementById("resultado");

  var numero = Number(verificarNumero.value);

  if (numero == "" || isNaN(numero)) {
    alert("Informe número corretamente.");
  }
  var raiz = Math.sqrt(numero);

  if (raiz == Math.floor(raiz)) {
    resultado.textContent = `A raiz do número:${numero} é igual a: ${raiz}.`;
  } else {
    resultado.textContent = `O número ${numero} não tem raiz exata.`;
  }
}
var exibir = document.getElementById("exibir");
exibir.addEventListener("click", calcularRaiz);
