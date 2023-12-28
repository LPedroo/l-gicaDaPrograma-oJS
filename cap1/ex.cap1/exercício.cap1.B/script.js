var totalValor = Number(prompt("Informe o valor total a ser pago:"));
var totalClientes = Number(
  prompt("Informe o número de clientes que irão pagar:")
);

var total = totalValor / totalClientes;

alert(`Valor total: ${totalValor} 
Números de clientes: ${totalClientes} 
Valor de cada cliente: ${total}
`);
