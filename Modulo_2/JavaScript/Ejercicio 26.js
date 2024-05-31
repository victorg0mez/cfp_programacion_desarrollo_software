function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let numero_P = 0
    suma = 0;

while(numero_P > -1) {
    suma += numero_P
    numero_P = aleatorio(-3,10)
    console.log(numero_P);
}
console.log(suma);
