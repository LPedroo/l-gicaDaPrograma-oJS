var palavra = prompt("Palavra: ");
var tam = palavra.length;

//essa variável inicia com a última letra da palavra em caixa alta
var inverso = palavra.charAt(tam - 1).toUpperCase();

//o loop FOR decrescente percorre as demais letras
for (var i = tam - 2; i >= 0; i--) {
  inverso += palavra.charAt(i).toLowerCase(); //Converte em caixa baixa
}

alert(`Palavra: ${palavra}\nInvertida: ${inverso}`);
