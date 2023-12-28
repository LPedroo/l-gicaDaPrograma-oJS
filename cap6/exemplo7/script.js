var app = "App Controle Financeiro";
var app2 = app.replace(" ", ""); // AppControle Financeiro
var app3 = app.replace(/ /g, ""); // AppControleFinanceiro
var app4 = app.replace(/ /g, "").toLowerCase(); //appcontrolefinanceiro;

// Na variável app2, quando uma string é passada como
// primeiro argumento do método replace(), a troca do espaço, ou melhor, a
// retirada do espaço, já que estamos trocando por um “”, ocorre apenas para
// o primeiro espaço na string. Para a variável app3, como passamos como
// argumento uma expressão regular com a opção g, a substituição ocorre
// em toda a string. Já para app4, a troca é seguida por uma conversão dos
// caracteres para letras minúsculas.
