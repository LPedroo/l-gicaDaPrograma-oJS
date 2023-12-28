var numeros = [];

function adicionarNumeros() {
  var numeroInput = document.getElementById("inNumero");

  var inNumero = Number(numeroInput.value);

  if (inNumero == "" || isNaN(inNumero)) {
    alert("Informe um número");
    numeroInput.focus();
    return;
  }

  numeros.push({ inNumero: inNumero });

  numeroInput.value = "";
  numeroInput.focus();

  if (numeros.length == 0) {
    alert("Nenhum número foi adicionado");
    return;
  }

  var lista = "Números: ";

  for (var i = 0; i < numeros.length; i++) {
    lista += `${numeros[i].inNumero}`;
    if (i < numeros.length - 1) {
      lista += ", ";
    } else {
      lista += ". ";
    }
  }

  document.getElementById("respostaNumero").textContent = lista;
}

var btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", adicionarNumeros);

function listarOrdem() {
  var copia = numeros.slice();

  var emOrdem = true;

  //Esse laço FOR começa do segundo elemento do índice e compara com o anterior
  //EXEMPLO: [8, 5] - Ele var pegar o segundo elemento (5), e vai veririficar
  //Se o segundo (5) é menor que o primerio(8), se for verdade: "Não está em Ordem"
  //E vai mudar a variável "Em ordem" para false, e isso vai fazer cair no ELSE.

  for (var i = 1; i < copia.length; i++) {
    if (copia[i].inNumero < copia[i - 1].inNumero) {
      emOrdem = false;
      break;
    }
  }

  if (emOrdem) {
    document.getElementById("respostaOrdem").textContent =
      "A lista está em ordem.";
  } else {
    document.getElementById("respostaOrdem").textContent =
      "A lista não está em ordem.";
  }
}

var btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", listarOrdem);
