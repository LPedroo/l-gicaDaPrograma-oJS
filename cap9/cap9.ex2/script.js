function verificarNome() {
  var inNome = document.getElementById("inNome");

  var nome = inNome.value;

  if (nome == "" || nome.indexOf(" ") == -1) {
    alert("Por favor, informe o nome completo.");
    inNome.focus();
    return;
  }

  inNome.value = "";
  var meuArray = nome.split(" ");

  var divLista = document.getElementById("divLista");
  divLista.innerHTML = "";

  meuArray.forEach(function (elemento, indice) {
    var corClasse = "";

    if (indice % 3 == 0) {
      corClasse = "red";
    } else if (indice % 3 == 1) {
      corClasse = "green";
    } else {
      corClasse = "blue";
    }

    var h5 = document.createElement("h5");
    h5.className = corClasse;
    h5.textContent = elemento;
    divLista.appendChild(h5);
  });
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", verificarNome);
