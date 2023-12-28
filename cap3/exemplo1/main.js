function situacion() {
  var nome = document.getElementById("nome").value;
  var nota1 = Number(document.getElementById("nota1").value);
  var nota2 = Number(document.getElementById("nota2").value);
  var resultadoNota = document.getElementById("resultadoNota");
  var resultadoSituacao = document.getElementById("resultadoSituacao");

  var media = (nota1 + nota2) / 2;
  resultadoNota.textContent = `Valor da média: ${media.toFixed(1)}`;

  if (media >= 7) {
    resultadoSituacao.textContent = `Parabéns, ${nome}! Você foi Aprovado. :)`;
    resultadoSituacao.style.color = "green";
  } else {
    resultadoSituacao.textContent = `Poxa, ${nome}. Você foi Reprovado. :(`;
    resultadoSituacao.style.color = "red";
  }
}

var exibir = document.getElementById("exibir");
exibir.addEventListener("click", situacion);
