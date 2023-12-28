function incluirAposta() {
  var inNome = document.getElementById("inNome");
  var inPeso = document.getElementById("inPeso");

  var nome = inNome.value;
  var peso = Number(inPeso.value);

  if (nome == "" || peso == 0 || isNaN(peso)) {
    alert("Informe nome e uma aposta");
    inNome.focus();
    return;
  }

  if (verApostaExiste(peso)) {
    alert("Alguém já apostou este peso, informe outro...");
    inPeso.focus();
    return;
  }
  // Se houver dados salvos no localStorage
  if (localStorage.getItem("melanciaNome")) {
    // Obtém o conteúdo já salvo e acrescenta ";" + dados da aposta
    var melanciaNome = localStorage.getItem("melanciaNome") + "; " + nome;
    var melanciaPeso = localStorage.getItem("melanciaPeso") + "; " + peso;

    // Salva os dados em localStorage
    localStorage.setItem("melanciaNome", melanciaNome);
    localStorage.setItem("melanciaPeso", melanciaPeso);
  } else {
    // senão, é a primeira aposta (não tem ";"")
    localStorage.setItem("melanciaNome", nome);
    localStorage.setItem("melanciaPeso", peso);
  }
  mostrarApostas();

  inNome.value = "";
  inPeso.value = "";
  inNome.focus();
}

var btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", incluirAposta);

function verApostaExiste(peso) {
  var existe = false; //Inicia em False

  //Se existe algum dado no LocalStorage...
  if (localStorage.getItem("melanciaPeso")) {
    // obtém seu conteúdo. A string é dividida em itens de vetor a cada ";"
    var pesos = localStorage.getItem("melanciaPeso").split(";");

    //Verifica se exites algo com o 'indexOf()'
    //O peso deve ser convertido em string, pois o vetor contém strings
    if (pesos.indexOf(peso.toString()) >= 0) {
      existe = true; // Apenas neste caso troca o valor do "flag"
    }
  }
  return existe; //Sendo T ou F
}

function mostrarApostas() {
  var outApostas = document.getElementById("outApostas");

  //Se não há apostas armazenadas no LocalStorage
  if (!localStorage.getItem("melanciaNome")) {
    outApostas.textContent = " ";
    return;
  }
  // obtém o conteúdo das variáveis salvas no localStorage, separando-as
  // em elementos de vetor a cada ocorrência do ";"
  var nomes = localStorage.getItem("melanciaNome").split(";");
  var pesos = localStorage.getItem("melanciaPeso").split(";");

  var linhas = " "; // acumulador

  // repetição para percorrer todos os elementos do vetor
  for (var i = 0; i < nomes.length; i++) {
    linhas += `${nomes[i]} - ${pesos[i]}gr \n`;
  }
  outApostas.textContent = linhas;
}

mostrarApostas();

function verificarVencedor() {
  //Se não há apostas armazenadas no LocalStorage
  if (!localStorage.getItem("melanciaNome")) {
    alert("Não há apostas cadastradas");
    return;
  }
  //Solicita o peso correto da melancia
  var pesoCorreto = Number(prompt("Qual o peso correto da melancia?"));

  //Se não informou, retorna
  if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
    alert("Informe o peso corretamente");
    return;
  }

  //Obtém os dados armazenados, separando-os em elementos de vetor
  var nomes = localStorage.getItem("melanciaNome").split(";");
  var pesos = localStorage.getItem("melanciaPeso").split(";");

  //Valor inicial para vencedor é o da primeira aposta
  var vencedorNome = nomes[0];
  var vencedorPeso = Number(pesos[0]);

  // percorre as apostas
  for (var i = 1; i < nomes.length; i++) {
    // calcula a diferença de peso do "vencedor" e da aposta atual
    difVencedor = Math.abs(vencedorPeso - pesoCorreto);
    difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);

    //Se a diferença da aposta atual (no for) for menor que a do "vencedor"
    if (difAposta < difVencedor) {
      vencedorNome = nomes[i]; // Troca o vencedor
      vencedorPeso = Number(pesos[i]); // para este elemento
    }
  }

  var mensagem = `Resultado - Peso Correto: ${pesoCorreto}gr`;
  mensagem += "\n---------------------------------------------";
  mensagem += `\nVencedor: ${vencedorNome}`;
  mensagem += `\nVencedor: ${vencedorPeso}`;
  alert(mensagem);
}

var btVencedor = document.getElementById("btVencedor");
btVencedor.addEventListener("click", verificarVencedor);

function limparApostas() {
  //Solicita confirmação para excluir as apostas
  if (confirm("Confirmar a exclusão de todas as apostas?")) {
    localStorage.removeItem("melanciaNome");
    localStorage.removeItem("melanciaPeso");
    mostrarApostas();
  }
}

var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparApostas);
