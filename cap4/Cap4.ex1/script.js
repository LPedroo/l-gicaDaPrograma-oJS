function repetirFruta() {
  var nomeFruta = document.getElementById("nome").value;
  var repetirNumero = document.getElementById("numero").value;
  var inResposta = document.getElementById("resposta");

  var numero = Number(repetirNumero);

  if (isNaN(numero)) {
    alert("Digite um número");
  }
  var resposta = `Vezes que ${nomeFruta} se repete: `;

  for (var i = 0; i < numero; i++) {
    resposta += ` ${nomeFruta},`;
  }

  resposta = `${resposta}.`;
  inResposta.textContent = resposta;
}

var exibir = document.getElementById("exibir");
exibir.addEventListener("click", repetirFruta);
