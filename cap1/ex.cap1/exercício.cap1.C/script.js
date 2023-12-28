var product = prompt("Informe o nome do produto que deseja comprar:");
var valueProduct = Number(
  prompt("Informe o valor do produto que deseja comprar:")
);

var amountPaidOnView = valueProduct - valueProduct * 0.1;
var amountPaidIn3x = valueProduct / 3;

alert(
  `O produto ${product} pode ser pago das seguintes formas:
   A vista:  R$: ${amountPaidOnView.toFixed(2)}.
   Parcelado em 3X: R$: ${amountPaidIn3x.toFixed(2)}.
`
);
