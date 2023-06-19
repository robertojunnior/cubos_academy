//pnesamento racional lógico - pseudo codigo

//(if) se verificar se a operação é uma soma -> numero1 + numero2
//(else if) se não, verificar se a operação é uma subtracao -> numero1 - numero2
//(else if) se não, verificar se a operação é uma multiplicacao -> numero1 * numero2
//(else)verificar se a operação é uma divisao -> numero1 / numero2

let numero1 = 10
let numero2 = 5

const soma = numero1 + numero2
const subtracao = numero1 - numero2
const multiplicacao = numero1 * numero2
const divisao = numero1 / numero2

const operacao = "divisao"

if (operacao === "soma") {
    console.log(soma)
} else if ( operacao === "subtracao"){
    console.log(subtracao)
} else if (operacao === "multiplicacao"){
    console.log(multiplicacao)
} else if (operacao === "divisao"){
    console.log(divisao)
}

//agora como ficaria a solução para o exercício na plataforma

if (operacao === "soma") {
    return numero1 + numero2
} else if ( operacao === "subtracao"){
    return numero1 - numero2
} else if (operacao === "multiplicacao"){
    return numero1 * numero2
} else if (operacao === "divisao"){
    return numero1 / numero2
}

