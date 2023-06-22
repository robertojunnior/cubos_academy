//pensamento racional lógico - pseudo codigo

//(if) se verificar se a operação é uma soma -> numero1 + numero2
//(else if) se não, verificar se a operação é uma subtracao -> numero1 - numero2
//(else if) se não, verificar se a operação é uma multiplicacao -> numero1 * numero2
//(else)se não, verificar se a operação é uma divisao -> numero1 / numero2

let numero1 = 10
let numero2 = 5
const operacao = "divisao"

if (operacao === "soma") {
    console.log(numero1 + numero2)
} else if ( operacao === "subtracao"){
    console.log(numero1 - numero2)
} else if (operacao === "multiplicacao"){
    console.log(numero1 * numero2)
} else if (operacao === "divisao"){
    console.log(numero1 / numero2)
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


// Lembrando que também podemos criar variáveis para cada operação ex:
// const soma = numero1 + numero2
// E substituir no console.log(soma)
// Porém neste exemplo como as entradas vem de um código já escrito, não alteramos a forma básica
