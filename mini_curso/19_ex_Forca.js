let quantidade = 0;

for (const letra of palavra) {
    if(letra === palpite) {
        quantidade += 1;
    }
}

console.log (quantidade);