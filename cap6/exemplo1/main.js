var anuncio = prompt("Anúncio: ");
var tamanho = anuncio.length; //Obtém o tamanho do que for digitado
var numPalavras = 0; // Contador

for (var i = 0; i < tamanho; i++) {
  if (anuncio.charAt(i) == " ") {
    numPalavras++;
  }
}

alert(`Anúncio: ${anuncio}\n N° Palavras: ${numPalavras + 1}`);

//Eu sou pedro
