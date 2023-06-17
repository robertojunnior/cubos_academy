//Pergunda: Quantos meses para atingir 100.000,00 na conta?
// com
// rendimento anual de 10%
// deposito mensal de 500,00

let conta = 0; // contagen inicial sempre no 0
let deposito = 500; // valor que vai ser depositado por mes
let rendimento = 0.1; // para porcentagem o 1.0 ou apenas 1 significa 100% entao 0.1 = 10%
let objetivo = 100000;
let meses = 0; // contagem inicia no 0

while ( conta < objetivo) {
    conta += deposito; //adiciona o valor do deposito
    conta +=  conta * rendimento / 12; // adiciona o valor do rendimento anual div por 12 
    meses += 1; // adiciona 1 ao contador de meses até atingir os 100000 para chegar no resultado
}

console.log(`São necessários ${meses} meses para atingir os R$100.000,00 na conta.`)
console.log(`São necessários ${(meses/12).toFixed(2)} anos para atingir os R$100.000,00 na conta.`)