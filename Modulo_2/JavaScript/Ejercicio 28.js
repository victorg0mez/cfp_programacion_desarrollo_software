function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let mi_num = aleatorio(1,50);
let contador = 0;
let numero = 8;

while (mi_num != numero ) {
    mi_num = aleatorio(1,50)
    contador += 1
}
console.log(`Has ganado el numero era ${mi_num} has ganado en el intento ${contador}`);
