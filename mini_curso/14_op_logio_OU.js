// condicionais - if - else

// menores de 18 -> Menor de idade (meia)
// Entre 18 e 60 -> Adultos (meia apenas com carteirinha)
// Maiores de 60 anos -> Idosos (meia)

// INTEIRA - Quando a pessoa paga inteira? Adulta e não tem carteirinha
// MEIA - menor de idade ou idosa ou adulta com carteirinha

const idade = 20;
const temCarteirinha = true;
const menor = idade <18;
const adulta = idade >= 18 && idade <= 60;
const idosa = idade >= 60;

if (menor || idosa || adulta && temCarteirinha){
    console.log('Paga meia.');
} else {
    console.log('Paga inteira.');
}










// // o ! significa não e está substituindo o === false de dentro do if.
// if (adulta && !temCarteirinha) {
//     console.log('Paga inteira.');
// } else {
//     console.log('Paga meia.');
// }