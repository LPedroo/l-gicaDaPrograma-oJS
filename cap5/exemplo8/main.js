var criancas = [];

function adicionarCriancas() {
  var inNome = document.getElementById("inNome");
  var inIdade = document.getElementById("inIdade");

  var nome = inNome.value;
  var idade = Number(inIdade.value);

  if (nome == "" || idade == 0 || isNaN(idade)) {
    alert("Informe os dados corretamente");
    inNome.focus();
    return;
  }

  criancas.push({ nome: nome, idade: idade });

  inNome.value = "";
  inIdade.value = "";
  inNome.focus();

  listarCriancas();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCriancas);

function listarCriancas() {
  if (criancas.length == 0) {
    alert("Não há crianças na lista");
    return;
  }

  var lista = "";

  for (var i = 0; i < criancas.length; i++) {
    lista += `${criancas[i].nome} - ${criancas[i].idade} anos \n`;
  }

  document.getElementById("outLista").textContent = lista;
}

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCriancas);

function resumirLista() {
  if (criancas.length == 0) {
    alert("Não há crianças na lista");
    return;
  }

  //Cria cópia do array de crinças
  var copia = criancas.slice();

  //Ordena o array pela idade
  copia.sort(function (a, b) {
    return a.idade - b.idade;
  });

  var resumo = "";

  var aux = copia[0].idade; //Menor idade do array ordenado
  var nomes = []; // Array para inserir nomes de cada idade

  //percorre o array (CLASSIFICADO POR IDADE)
  for (var i = 0; i < copia.length; i++) {
    // Se é da mesma idade auxiliar, adiciona ao vetor
    if (copia[i].idade == aux) {
      nomes.push(copia[i].nome);
    } else {
      // Senão, adiciona ao resumo, dados e nomes inseridos em nomes[]
      resumo += `${aux} ano(s): ${nomes.length} criança(s) - `;
      resumo += `${((nomes.length / copia.length) * 100).toFixed(2)}%\n`;
      resumo += `(${nomes.join(", ")})\n\n`;

      aux = copia[i].idade; //Obtém a nova idade na ordem
      nomes = []; //Limpa o array de nomes
      nomes.push(copia[i].nome); //Adiciona o primeiro da nova idade
    }
  }

  // adiciona os nomes da última idade ordenada
  resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
  resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
  resumo += "(" + nomes.join(", ") + ")\n\n";
  // altera conteúdo de outLista
  document.getElementById("outLista").textContent = resumo;
}

var btResumir = document.getElementById("btResumir");
btResumir.addEventListener("click", resumirLista);
