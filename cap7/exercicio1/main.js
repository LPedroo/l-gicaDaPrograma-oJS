function retornarTraco(nome) {
  nome = document.getElementById("inNome").value;
  var resposta1 = document.getElementById("preNome");
  var resposta2 = document.getElementById("preTraco");
  var resposta3 = document.getElementById("preCateg");

  console.log(nome.length);

  var lista = "-";

  var tamanho = nome.length;

  for (var i = 1; i < tamanho; i++) {
    if (nome[i] === " ") {
      lista += " ";
    } else {
      lista += "-";
    }
  }
  console.log(lista);
  var mostrarCategoria = categorizarAluno(inIdade.value);

  resposta1.textContent = nome;
  resposta2.textContent = lista;
  resposta3.textContent = mostrarCategoria;
}

var inCateg = document.getElementById("inCateg");
inCateg.addEventListener("click", retornarTraco);

function categorizarAluno(inIdade) {
  inIdade = document.getElementById("inIdade");

  var idade = Number(inIdade.value);

  if (idade == "" || isNaN(idade)) {
    alert("Informe a idade corretamente");
    return;
  }

  var categoria = idade <= 12 ? "Infantil" : idade <= 18 ? "Juvenil" : "Adulto";
  return categoria;
  // document.getElementById("preCateg").textContent = `${categoria}`;
}
