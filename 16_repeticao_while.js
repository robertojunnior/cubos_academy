// quantos numeros entre 1 e 1000 são divisíveis por 17

let resposta = 0; // 0 pois vamos buscar este valor e será substituído depois
let numero = 1; // sempre começa do 01, apenas divisiveis.

while ( numero <= 1000) {
    if (numero % 17 === 0) { // numero for % divisivel ppor 17 e o resto for 0
        resposta += 1; // adicione 1 na contagem
    }
    numero += 1; // sempre adicione mais um para a contagem continuar
}

console.log(`Temos ${resposta} números divisíveis por 17 entre 01 e 1000.`);