function calcularMedia() {
  if (arguments.length == 0) {
    // se não foram passados argumentos
    alert("Informe, no mínimo, uma nota");
    return;
  }
  var soma = 0; //Acumulador
  var numNotas = arguments.length; //Obtém a quantidade de argumentos

  for (var i = 0; i < numNotas; i++) {
    //percorre os argumetnos
    soma += arguments[i]; // Soma o valor dos argumentos
  }

  var media = soma / numNotas; //calc media
  alert(`Média das Notas: ${media.toFixed(1)}`);
}

calcularMedia(5, 6, 8);
calcularMedia(2, 10);
calcularMedia(7.5, 10, 8, 9.5);
calcularMedia();
