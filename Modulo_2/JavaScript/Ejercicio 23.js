function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let numero = 0;
    contador = 0;
while (numero > -1) {
    contador += numero; 
    numero = aleatorio(-3,10)
    console.log(numero);
}
console.log(contador);
