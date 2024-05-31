function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let contraseña = 52;
let miContra = aleatorio(1,100) 
    contador = 0;

while(contraseña != miContra){
    miContra = aleatorio(1,100);
    contador += 1
}
    
console.log(`La contraseña era ${miContra} en el intento ${contador}`);