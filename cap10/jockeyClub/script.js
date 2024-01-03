//Constante com nomes dos cavalos
const cavalos = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

//Armazenador de apostas
var apostas = [];

function adicionarAposta() {
  //inCavalo é referenciado em variável global na sequencia do programa

  var inValor = document.getElementById("inValor");
  var outApostas = document.getElementById("outApostas");

  //Obtem o N° do cavalo e o valor da aposta

  var cavalo = Number(inCavalo.value);
  var valor = Number(inValor.value);

  if (isNaN(cavalo) || isNaN(valor) || valor == 0 || !validarCavalo(cavalo)) {
    alert("Aposta Inválida!");
    inCavalo.focus();
    return;
  }
  // adiciona ao vetor de objetos (atributos cavalo e valor)
  apostas.push({ cavalo: cavalo, valor: valor });
  //variável para exibir lista das apostas
  var lista =
    "Apostas Realizadas\n---------------------------------------------\n";

  for (var i = 0; i < apostas.length; i++) {
    lista += `N°${apostas[i].cavalo} ${obterCavalo(apostas[i].cavalo)}`;
    lista += ` - R$ ${apostas[i].valor.toFixed(2)}\n`;
  }
  outApostas.textContent = lista;

  inCavalo.value = "";
  inValor.value = "";
  inCavalo.focus();
}

var btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", adicionarAposta);

function validarCavalo(num) {
  var tamanho = cavalos.length;

  if (num >= 1 && num <= tamanho) {
    return true;
  } else {
    return false;
  }
}

function mostrarCavalo() {
  var outCavalo = document.getElementById("outCavalo");

  if (inCavalo.value == "") {
    outCavalo.textContent = "";
    return;
  }

  var cavalo = Number(inCavalo.value);

  if (isNaN(cavalo) || !validarCavalo(cavalo)) {
    outCavalo.textContent = "Número do Cavalo Inválido";
    return;
  }
  var nomeCavalo = obterCavalo(cavalo);
  var numApostas = contarApostas(cavalo);
  var total = totalizarApostas(cavalo);

  outCavalo.textContent = `${nomeCavalo} (Apostas: ${numApostas}`;
  outCavalo.textContent = ` - R$: ${total.toFixed(2)})`;
}

var inCavalo = document.getElementById("inCavalo");
inCavalo.addEventListener("blur", mostrarCavalo);

function obterCavalo(num) {
  var posicao = num - 1; //posição no vetor (vai começar em -1 porque o indice inicia em 0)

  return cavalos[posicao];
}

function contarApostas(numCavalo) {
  var contador = 0;

  //percorre o contador
  for (var i = 0; i < apostas.length; i++) {
    if (apostas[i].cavalo == numCavalo) {
      contador++;
    }
  }
  return contador;
}

function totalizarApostas(numCavalo) {
  var total = 0;

  for (var i = 0; i < apostas.length; i++) {
    if (apostas[i].cavalo == numCavalo) {
      total = total + apostas[i].valor; // soma o valor das apostas
    }
  }
  return total;
}

// quando o campo recebe o foco, limpa o conteúdo e dados do cavalo
inCavalo.addEventListener("focus", function () {
  inCavalo.value = "";
  document.getElementById("outCavalo").textContent = "";
});

function ganhadorPareo() {
  var ganhador = Number(prompt("N° Cavalo Ganhador: "));

  if (isNaN(ganhador) || !validarCavalo(ganhador)) {
    alert("Cavalo inválido");
    return;
  }
  var outApostas = document.getElementById("outApostas");

  var resumo = "Resultado Final de Páreo\n";
  resumo += "-----------------------------------------\n";
  resumo += `N° Total de Apostas: ${apostas.length}\n`;
  resumo += `Total Geral R$ ${totalizarGeral().toFixed(2)}\n`;
  resumo += `Ganhador N° ${ganhador} - ${obterCavalo(ganhador)}\n`;
  resumo += "-----------------------------------------\n";
  resumo += `N° de Apostas: ${contarApostas(ganhador)}\n`;
  resumo += `Total Apostado R$: ${totalizarApostas(ganhador).toFixed(2)}`;

  outApostas.textContent = resumo;

  btApostar.disable = true;
  btGanhador.disable = true;
  btNovo.focus();
}

var btGanhador = document.getElementById("btGanhador");
btGanhador.addEventListener("click", ganhadorPareo);

function totalizarGeral() {
  var total = 0;
  // percorre o vetor para somar o total das apostas
  for (var i = 0; i < apostas.length; i++) {
    total = total + apostas[i].valor;
  }
  return total; // retorna o total das apostas
}

// cria referência ao btNovo e cria função anônima associada ao evento click

var btNovo = document.getElementById("btNovo");
btNovo.addEventListener("click", function () {
  location.reload(); // recarrega a página
});
