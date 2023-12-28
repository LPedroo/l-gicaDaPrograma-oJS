function adicionarClube() {
  var inClube = document.getElementById("inClube");

  var clube = inClube.value;

  if (clube == "") {
    alert("Informe um Clube de Futebol");
    inClube.focus();
    return;
  }

  var divLista = document.getElementById("divLista");
  var h5 = document.createElement("h5");
  var texto = document.createTextNode(clube);
  h5.appendChild(texto);
  divLista.appendChild(h5);

  inClube.value = "";
  inClube.focus();

  salvarClubes(clube);
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarClube);

function salvarClubes(clube) {
  if (localStorage.getItem("Clubes")) {
    //Obtém os dados e acrescenta ; e o titulo e genero informado
    var clubeNome = `${localStorage.getItem("Clubes")}; ${clube}`;

    localStorage.setItem("Clubes", clubeNome); // grava dados
  } else {
    localStorage.setItem("Clubes", clube);
  }
}

function inserirLinhas() {
  var tbClubes = document.getElementById("tbClubes");
  var h5 = document.getElementsByTagName("h5"); // obtém tags h5 da página;

  var numH5 = h5.length; // obtém número de tags h5
  if (numH5 == 0) {
    // se zero...
    alert("Não há clubes"); // exibe alerta
    return; // retorna
  }

  for (var i = 0; i < numH5; i += 2) {
    var linha = tbClubes.insertRow(-1);
    var col1 = linha.insertCell(0); // Cria Coluna
    var col2 = linha.insertCell(1); // Cria Coluna
    var col3 = linha.insertCell(2); // Cria Coluna
    // percorre a lista de elementos h5 inseridos na página
    col1.textContent = h5[i].textContent;
    col2.textContent = "X";
    col3.textContent = h5[i + 1].textContent;
  }
}

var btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", inserirLinhas);
