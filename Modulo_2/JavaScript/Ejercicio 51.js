let suma = 0;
let suma2 = 0;
let matriz1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let matriz2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        suma += matriz1[i][j] 
        
    }
    
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        suma2 += matriz2[i][j] 
        
    }
    
}
console.log(suma + suma2);