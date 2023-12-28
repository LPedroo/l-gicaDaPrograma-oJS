function gerar() {
  var inNome = document.getElementById("inNome");
  var inResposta = document.getElementById("inResposta");

  var nome = inNome.value;

  if (nome == "" || nome.indexOf(" ") == -1) {
    alert("Informe o nome e o sobrenome");
    inNome.focus();
    return;
  }

  var partes = nome.split(" ");
  var tamanho = partes.length;
  var frase = `Citação Bibliográfica: ${partes[tamanho - 1]},  `;

  for (var i = 0; i < tamanho - 1; i++) {
    frase += `${partes[i].charAt(0)}. `;

    console.log(frase);
  }
  inResposta.textContent = frase.toLocaleUpperCase();
}

var gerador = document.getElementById("gerador");
gerador.addEventListener("click", gerar);
