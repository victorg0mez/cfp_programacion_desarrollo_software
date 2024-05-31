function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


let numero = 0;
let miNum = aleatorio(1,100) 
    contador = 0;
    
while(miNum != numero){
    numero = aleatorio(1,100);
    contador += 1
}

console.log(`Has ganado el numero era ${miNum} en el intento ${contador}`);