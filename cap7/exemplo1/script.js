function exibirSituacao(nota, media) {
  var situacao = nota >= media ? "Aprovado" : "Reprovado";
  return situacao;
}

var prova1 = Number(prompt("Qual Nota: "));

alert(`Situação: ${exibirSituacao(prova1, 7)}`);
