//Placar = [3, 2]
//Se a quantidade de gols do TimeA for maior que a do TimeB, imprima TIME A;
//Se não, se o Time B tiver mais gols, imprima TIME B;
//E se o resultado estiver igual, imprima EMPATE.

let placar = [3, 2]

let golsTimeA = placar[0]
let golsTimeB = placar[1]

if (golsTimeA > golsTimeB){
    console.log("TIME A")
} else if (golsTimeA < golsTimeB){
    console.log("TIME B")
} else {
    console.log("EMPATE")
}

// Para plataforma, remover console.log e entradas

// let golsTimeA = placar[0]
// let golsTimeB = placar[1]

// if (golsTimeA > golsTimeB){
//     return "TIME A"
// } else if (golsTimeA < golsTimeB){
//     return "TIME B"
// } else {
//     return "EMPATE"
// }
