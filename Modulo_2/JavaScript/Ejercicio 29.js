function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1))
}

let mynum = aleatorio(1, 10);
let contador = 1;

while (mynum > 0) {
    mynum = aleatorio(1, 10)
    if (mynum % 2 == 0) {
        contador *= mynum
        console.log(`Número: ${mynum}, El factorial es: ${contador}`);
    }
}