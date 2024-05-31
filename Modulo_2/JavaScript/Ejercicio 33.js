function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let numero = aleatorio(1,10)
let contador = 1
console.log(numero);
for(let i = 1; i <= numero; i++){
    contador = contador * i
    console.log(i);
}
console.log(`El factor de ${numero} es ${contador}`);