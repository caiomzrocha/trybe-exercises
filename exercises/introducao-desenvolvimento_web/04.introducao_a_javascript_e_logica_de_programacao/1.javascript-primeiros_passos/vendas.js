let valorCusto = 15.00;
let valorVenda = 20.00;
let impostoSobreOCusto = 0.2;

let valorCustoTotal;
let lucroPorProduto;
let lucroTotal;

if (valorCusto < 0 || valorVenda < 0)
  return console.log('[-] erro: valor negativo');

valorCustoTotal = valorCusto + valorCusto * impostoSobreOCusto;
lucroPorProduto = valorVenda - valorCustoTotal;
lucroTotal = 1000 * lucroPorProduto;

console.log(lucroTotal);
