//Para obter o próximo dia

// var hoje = new Date();
// var amanha = new Date();

// var dia = amanha.getDate();
// amanha.setDate(dia + 1);

// alert(`Hoje: ${hoje.toLocaleDateString()}\nAmanhã: ${amanha.toTimeString()}`);

//Para obter o ano de nascimento

var anoAtual = new Date().getFullYear();

var idade = prompt(`Quanto anos você comemora em ${anoAtual}?`);

var anoNasc = anoAtual - idade;

alert(`Ah... Então você nasceu em ${anoNasc}`);
