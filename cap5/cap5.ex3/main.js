var candidatos = [];

function adiconarCandidato() {
  var inNome = document.getElementById("inNome");
  var inNumero = document.getElementById("inNumero");

  var nome = inNome.value;
  var acertos = Number(inNumero.value);

  if (nome == "" || acertos == "" || isNaN(acertos)) {
    alert("Preencha os campos corretamente!");
    inNome.focus();
    return;
  }

  candidatos.push({ nome: nome, acertos: acertos });

  inNome.value = "";
  inNumero.value = "";
  inNome.focus();

  listarCandidatos();
}

var btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", adiconarCandidato);

function listarCandidatos() {
  if (candidatos.length == 0) {
    alert("Não há candidatos na lista");
    return;
  }

  var lista = "";

  for (var i = 0; i < candidatos.length; i++) {
    lista += `${candidatos[i].nome} - ${candidatos[i].acertos}\n`;
  }
  document.getElementById("resposta").textContent = lista;
}

var inLista = document.getElementById("inLista");
inLista.addEventListener("click", listarCandidatos);

function aprovacaoCandidatos() {
  var minimo = Number(prompt("Qual o número de Acertos para Aprovação?"));

  if (minimo == 0 || isNaN(minimo)) {
    alert("Por favor, nos informe um número válido.");
    return;
  }

  var lista = "";

  for (var i = 0; i < candidatos.length; i++) {
    if (candidatos[i].acertos >= minimo) {
      lista += `${candidatos[i].nome} - ${candidatos[i].acertos}\n`;
    }
  }
  document.getElementById("resposta").textContent = lista;

  if (lista == "") {
    document.getElementById("resposta").textContent =
      "Não há candidatos na lista";
  }
}

var inAprovados = document.getElementById("inAprovados");
inAprovados.addEventListener("click", aprovacaoCandidatos);
