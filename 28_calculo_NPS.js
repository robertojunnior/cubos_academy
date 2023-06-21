//contar a quantidade de promotores
    // contar quantas notas foram acima de 9

//contar a quantidade de detratores
    //quantas notas foram de 0 a 6

// contar a quantidade de pesquisas
    //quantas respostas tiveram

// Fazer o cálculo

let respostas = [5,10,0,6,10,10,9,8,10,5]

let promotores = 0
let detratores = 0

for (let item of respostas){
    if(item >= 9){
        promotores = promotores + 1
    } else if (item >= 0 && item <= 6){
        detratores = detratores + 1
    } 
}

let totalPesquisas = respostas.length
let nps = (promotores - detratores) / totalPesquisas * 100

console.log("Promotores: ", promotores)
console.log("Detratores: ", detratores)
console.log("Nota da pesquisa: ", nps.toFixed(2))


// para a plataforma

// let promotores = 0
// let detratores = 0

// for (let item of respostas){
//     if(item >= 9){
//         promotores = promotores + 1
//     } else if (item >= 0 && item <= 6){
//         detratores = detratores + 1
//     } 
// }


// let totalPesquisas = respostas.length

// let nps = (promotores - detratores) / totalPesquisas * 100
//     return nps