//Inicializa o número de contas e valor total em 0
var numContas = 0;
var valTotal = 0;

//Inicializa a resposta como vazia
var resposta = "";

function registrarConta() {
  var descConta = document.getElementById("descConta").value;
  var numConta = document.getElementById("numConta").value;
  var outListaContas = document.getElementById("outListaContas");
  var outTotal = document.getElementById("outTotal");

  var valor = Number(numConta);

  if (descConta == "" || valor == 0 || isNaN(valor)) {
    alert("Informe os dados corretamente.");
    descConta.focus();
    return;
  }

  numContas++;
  valTotal = valTotal + valor;

  //O "$`{resposta}" é responsável por atribuir uma nova resposta sem modificar a anterior
  resposta = `${resposta} ${descConta} - R$${valor.toFixed(2)} \n`;

  outListaContas.textContent = `${resposta} ----------------------------------------------------------------------`;

  outTotal.textContent = `${numContas} Conta(s) - Total R$:${valTotal.toFixed(
    2
  )}`;
}

var exibir = document.getElementById("exibir");
exibir.addEventListener("click", registrarConta);
