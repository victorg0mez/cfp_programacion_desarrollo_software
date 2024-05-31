function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


let numero_P = 0;
let suma = 0;
let mis_num = 0
let limite = 0

while(limite <= 10) {
    limite += 1;
    mis_num = aleatorio(1,10)
    if(mis_num % 2 == 0){
        suma += mis_num
    }
    console.log(mis_num);
}

console.log(suma);
