function adicionarServicos() {
  var inService = document.getElementById("inService");
  var inServPend = document.getElementById("inServPend");

  var servico = inService.value;

  if (servico == "") {
    alert("Informe um Serviço a ser feito");
    inService.focus();
    return;
  }
  if (localStorage.getItem("Serviço")) {
    var newService = `${localStorage.getItem("Serviço")} ; ${servico}`;
    localStorage.setItem("Serviço", newService);
  } else {
    localStorage.setItem("Serviço", servico);
  }

  inService.value = "";
  inService.focus();

  var tamanho = localStorage.getItem("Serviço").split(";");
  if (tamanho.length > 0) {
    inServPend.textContent = `Serviços Pendentes: ${tamanho.length}`;
  }
}

var btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", adicionarServicos);

function executarServicos() {
  if (!localStorage.getItem("Serviço")) {
    alert("Não há serviços a serem executados. Por favor, adicione um serviço");
    return;
  }

  var inExecuteServ = document.getElementById("inExecuteServ");
  var inResposta = document.getElementById("inResposta");
  var inServPend = document.getElementById("inServPend");

  var tamanho = localStorage.getItem("Serviço").split(";");

  if (tamanho.length > 0) {
    inResposta.textContent = tamanho.shift();
    inServPend.textContent = `Serviços Pendentes: ${tamanho.length}`;
    inExecuteServ.textContent = "Serviço em Execução: ";
  }
  localStorage.setItem("Serviço", tamanho.join(";"));
}

var btnExecutar = document.getElementById("btnExecutar");
btnExecutar.addEventListener("click", executarServicos);

function mostrarServicos() {
  var tamanho = localStorage.getItem("Serviço").split(";");

  if (tamanho.length >= 0) {
    inResposta.textContent = tamanho[0];
    inServPend.textContent = `Serviços Pendentes: ${tamanho[0]}`;
    inExecuteServ.textContent = "Serviço em Execução: ";
  }
}

mostrarServicos();
