function verificarPalindromo() {
  var inFrase = document.getElementById("inFrase");
  var resposta = document.getElementById("resposta");

  var frase = inFrase.value;

  if (frase == "") {
    alert("Informe uma frase");
    inFrase.focus();
    return;
  }

  var semEspaco = frase.replace(/ /g, "").toUpperCase();
  var tamanho = semEspaco.length;
  console.log(tamanho);
  var palindromo = true; // Inicialize como verdadeiro, assumindo que é um palíndromo.

  for (var i = 0; i < tamanho / 2; i++) {
    // console.log(semEspaco[i]);
    console.log(semEspaco[tamanho - i - 1]);
    if (semEspaco[i] !== semEspaco[tamanho - i - 1]) {
      palindromo = false;
      break;
    }
  }

  if (palindromo) {
    resposta.textContent = `${frase.toUpperCase()} é um palíndromo`;
  } else {
    resposta.textContent = `${frase.toUpperCase()} não é um palíndromo`;
  }
}

var inVerificar = document.getElementById("inVerificar");
inVerificar.addEventListener("click", verificarPalindromo);
