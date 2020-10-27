let salarioBruto = 1800.00;
let salarioBase;
let salarioLiquido;
let inss;
let impostoDeRenda;
let parcelaImpostoDeRenda;

if (salarioBruto < 0 || !Number(salarioBruto))
  return console.log('[-] erro: salário inválido.')

if (salarioBruto <= 1556.94)
  inss = 0.08 * salarioBruto;
else if (salarioBruto <= 2594.92)
  inss = 0.09 * salarioBruto;
else if (salarioBruto <= 5189.82)
  inss = 0.11 * salarioBruto;
else
  inss = 570.88;

salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98)
  impostoDeRenda = 0;
else if (salarioBase <= 2826.65)
  impostoDeRenda = 0.075 * salarioBase - 142.80;
else if (salarioBase <= 3751.05)
  impostoDeRenda = 0.15 * salarioBase - 354.80;
else if (salarioBase <= 4664.68)
  impostoDeRenda = 0.225 * salarioBase - 636.13;
else
  impostoDeRenda = 0.275 * salarioBase - 869.36;

salarioLiquido = salarioBase - impostoDeRenda;
console.log(salarioLiquido);
