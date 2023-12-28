function criptografar() {
  var inText = document.getElementById("inText");
  var resposta = document.getElementById("resposta");
  var text = inText.value;

  if (text == "") {
    alert("Informe uma mensagem");
    inText.focus();
    return;
  }

  var partes = text.split(""); // Divide a string em um array de caracteres

  var frase = "";

  for (var i = 0; i < partes.length; i++) {
    if (i % 2 == 0) {
      frase += `${partes[i]}`;
    }
  }

  for (var i = 0; i < partes.length; i++) {
    if (i % 2 == 1) {
      frase += `${partes[i]}`;
    }
  }

  inText.value = frase;
  resposta.textContent = frase;
}

var cripto = document.getElementById("cripto");
cripto.addEventListener("click", criptografar);

function descriptografar() {
  var inText = document.getElementById("inText");
  var resposta = document.getElementById("resposta");

  var text = inText.value;

  if (text == "") {
    alert("Informe uma mensagem");
    inText.focus();
    return;
  }

  console.log(text.length);
  var metade = Math.ceil(text.length / 2);
  var primeiraMetade = text.slice(0, metade);
  var segundaMetade = text.slice(metade);

  // Verifique se as metades têm tamanhos diferentes (caso ímpar)
  if (primeiraMetade.length !== segundaMetade.length) {
    segundaMetade += " "; 
  }

  var mensagemOriginal = "";

  for (var i = 0; i < metade; i++) {
    mensagemOriginal += primeiraMetade[i];
    mensagemOriginal += segundaMetade[i];
  }

  inText.value = mensagemOriginal;
  resposta.textContent = mensagemOriginal;
}

var descripto = document.getElementById("descripto");
descripto.addEventListener("click", descriptografar);
