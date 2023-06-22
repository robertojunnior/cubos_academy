// contar se tem 5 itens no array para aplicar o desconto
// se tiver os 5 itens, encontrar o item mais barato para descontar 
// somar os valores

let precos = [100, 500, 100, 200, 50]; // Entrada declarada pelo cliente ou usuário
let soma = 0; // var para apresentar a soma dos elementos do array
let menorAteAgora = precos[0];  // var do 1º elemento para efeito de comparação com o resto do array

for (let item of precos) { // var item para cada elemento do array precos
  soma = soma + item; // var declarando que soma vai receber a soma dos itens do array precos
  if (item < menorAteAgora) { // se item for menor que o menorAteAgora que começa na pos 0 ou seja 100
    menorAteAgora = item; // o menorAteAgora recebe o valor do item menor, no caso desta array o 50
  }
}

let resultado = soma - menorAteAgora; // aqui declaro uma nova var resultado 
//por que se tiver 5 ou mais itens na lista vamos aplicar o desconto do menor valor encontrado na soma de todos os elementos do array precos (50,00)

if (precos.length >= 5) { // se precos tiver 5 itens ou mais
  console.log(`O total da compra foi de R$ ${soma.toFixed(2)} e menor valor de produto a ser descontado foi de R$ ${menorAteAgora.toFixed(2)}.`)
  console.log(`O valor total a pagar é de R$ ${resultado.toFixed(2)}`); // apliquei a var "resultado"
} else {
  console.log(`O valor total da compra foi de ${soma.toFixed(2)}`); // se não, mostre a soma total da compra.
}
