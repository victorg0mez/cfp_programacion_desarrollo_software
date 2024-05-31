function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let contador = 0;
let contraseña = aleatorio(9999995,10000000);

while(contraseña <= 8){
    contador++
    console.log('La contraseña es no es valida');
}
console.log(`contraseña valida adivinaste en el intento ${contador}`); 