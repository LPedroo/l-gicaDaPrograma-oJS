var pacientes = []; //Inicia vazio

function adicionarPaciente() {
  var nome = document.getElementById("inPaciente").value;
  var outLista = document.getElementById("outLista");

  if (nome == "") {
    alert("Informe o nome do paciente");
    return;
  }

  pacientes.push(nome); //Colocando nome do paciente no final do Array

  var lista = ""; //Variável criada para concatenar os pacientes

  //Percorre o tamanho do Array
  for (var i = 0; i < pacientes.length; i++) {
    lista += `${i + 1} - ${pacientes[i]}\n`;
  }
  outLista.textContent = lista;
}

function urgenciaPaciente() {
  var nome = document.getElementById("inPaciente").value;
  var outLista = document.getElementById("outLista");

  if (nome == "") {
    alert("Informe o nome do paciente");
    return;
  }

  pacientes.unshift(nome); //Colocando nome do paciente no inicio do Array

  var lista = ""; //Concatena Pacientes

  //Percorre o tamanho do Array
  for (var i = 0; i < pacientes.length; i++) {
    lista += `${i + 1} - ${pacientes[i]}\n`;
  }
  outLista.textContent = lista;
}

function atenderPaciente() {
  if (pacientes.length == "") {
    alert("Não há pacientes na lista de espera");
    return;
  }

  var outAtendimento = document.getElementById("outAtendimento");
  var outLista = document.getElementById("outLista");

  var atender = pacientes.shift(); //Remove o primeiro item do Array e obtém seu VALOR

  outAtendimento.textContent = atender; //Mostra o item retirado

  var lista = "";

  //Percorre o Array
  for (var i = 0; i < pacientes.length; i++) {
    lista += `${i + 1} = ${pacientes[i]} \n`;
  }

  outLista.textContent = lista;
}

var adicionar = document.getElementById("btAdicionar");
adicionar.addEventListener("click", adicionarPaciente);

var urgencia = document.getElementById("btUrgencia");
urgencia.addEventListener("click", urgenciaPaciente);

var atender = document.getElementById("btAtender");
atender.addEventListener("click", atenderPaciente);
