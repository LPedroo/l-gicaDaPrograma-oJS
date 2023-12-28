function validarNome(nome) {
  nome = document.getElementById("inNome").value;
  var inResposta = document.getElementById("inResposta");

  if (nome.indexOf(" ") == -1) {
    alert("Informe o nome completo");
    return;
  }

  var sobrenome = obterSobrenome();
  var vogais = contarVogais();

  var resposta = `Senha Inicial: ${sobrenome}${vogais}`;

  inResposta.textContent = resposta;
}

var addPassword = document.getElementById("addPassword");
addPassword.addEventListener("click", validarNome);

function obterSobrenome(nome) {
  nome = document.getElementById("inNome").value;

  var getLastName = nome.lastIndexOf(" ");
  var lastNameValue = nome.substr(getLastName);

  var lista = `${lastNameValue.toLowerCase()}`;

  return lista;
}

function contarVogais(nome) {
  nome = document.getElementById("inNome").value;
  nome = nome.toLowerCase();

  var qtdVogais = 0;
  var lista = "";
  for (var i = 0; i < nome.length; i++) {
    var letra = nome[i];
    if (
      letra == "a" ||
      letra == "e" ||
      letra == "i" ||
      letra == "o" ||
      letra == "u"
    ) {
      qtdVogais++;
    }
  }
  lista = `0${qtdVogais}`;
  return lista;
}
