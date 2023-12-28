const TAXA_MULTA = 2 / 100; //Multa por atraso: 2%

const TAXA_JUROS = 0.33 / 100; // Juros por dia de atraso 0.0033%

function calcularMultaJuros() {
  var inDataVenc = document.getElementById("inDataVenc");
  var inValor = document.getElementById("inValor");
  var outMulta = document.getElementById("outMulta");
  var outJuros = document.getElementById("outJuros");
  var outTotal = document.getElementById("outTotal");

  var dataVenc = inDataVenc.value;
  var valor = Number(inValor.value);

  if (dataVenc == "" || valor == 0 || isNaN(valor)) {
    alert("Informe corretamente os dados da conta");
    inDataVenc.focus();
    return;
  }

  var hoje = new Date();
  var vencto = new Date();

  // a data vem no formato aaaa-mm-dd
  var partes = dataVenc.split("-");
  vencto.setDate(Number(partes[2]));
  vencto.setMonth(Number(partes[1]) - 1);
  vencto.setFullYear(Number(partes[0]));

  // calcula a diferença de dias entre as datas (em milissegundos)
  var atraso = hoje - vencto;

  // Inicializa multa e juros em 0
  var multa = 0;
  var juros = 0;

  console.log(atraso);
  console.log(atraso / 86400000);
  // se conta estiver em atraso ...
  if (atraso > 0) {
    // converte os milissegundos da diferença em dias
    // (1 dia = 24hor x 60min x 60seg x 1000mseg: 86400000)
    // round(): necessário para períodos envolvendo horário de verão
    var dias = Math.round(atraso / 86400000);
    multa = valor * TAXA_MULTA; // calcula multa e juros
    juros = valor * TAXA_JUROS * dias;
  }
  var total = valor + multa + juros; // calcula o total
  outMulta.value = multa.toFixed(2); // exibe os valores com 2 decimais;
  outJuros.value = juros.toFixed(2);
  outTotal.value = total.toFixed(2);
}

// cria referência ao botão e após associa function ao evento click
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularMultaJuros);

function limparCampos() {
  location.reload();
}
var btNovaConta = document.getElementById("btNovaConta");
btNovaConta.addEventListener("click", limparCampos);
