
// Cantidad de N en el array vacio que cambiara 



let n = 10; // Cantidad de datos que tendrá la matriz
let k = 3; // El número de vacas que tendrá y esa cantidad tendra ordenada uniformemente

const matriz = [];


for (let i = 0; i < n; i++) {
    matriz.push(i); 
}


 
// Para colocar K (vacas)
const posicion = [];
const DistanciaMaxima = Math.floor((n-1) / (k-1)); 

let position = 0;
for (let i = 0; i < k; i++) {
    posicion.push(position);
    position += DistanciaMaxima;
}

console.log(posicion);
console.log(`La matriz es: ${matriz} \n la distancia entre cada vaca seria ${k} \n y la distancia maxima quedaria ${posicion}`);