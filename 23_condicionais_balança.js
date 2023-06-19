//pesolado A1 = 10
//pesoLado A2 = 5
//pesoLado B1 = 20
//pesoLado B2 = 10

//(if)se a soma do peso lado A > que a soma do peso Lado B -> retorne inclinado lado A
//(else if)se não, a soma do peso lado B > que a soma do peso lado A -> retorne inclinado lado B
// Caso contrário -> retorne 'equilibrio

//lado A
let pesoLadoA1 = 10
let pesoLadoA2 = 5
//Lado B
let pesoLadoB1 = 20
let pesoLadoB2 = 10

const somaLadoA = pesoLadoA1 + pesoLadoA2
const somaLadoB = pesoLadoB1 + pesoLadoB2


if (somaLadoA > somaLadoB) {
    console.log("LADO A")
} else if (somaLadoB > somaLadoA) {
    console.log("LADO B")
} else {
    console.log("EQUILIBRIO")
}

// na plataforma de exercícios temos de apagar os valores das variaveis, pois já são delacaradas peloo programa.
// devemos apenas demonstrar o raciocínio lógico da solução do problema.

// substituir o console.log() por apenas 'return "resposta"' sem () apenas com "" aspas
// Como no exemplo abaixo, esta seria a resposta pra colar na plataforma.

const somaLadoA = pesoLadoA1 + pesoLadoA2
const somaLadoB = pesoLadoB1 + pesoLadoB2


if (somaLadoA > somaLadoB) {
    return "LADO A"
} else if (somaLadoB > somaLadoA) {
    return "LADO B"
} else {
    return "EQUILIBRIO"
}