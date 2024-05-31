let numeros = [5,63,2,9,3,10,30,47]
let mayor = 0; 
let menor = 0; 

for(let i = 0; i < 8;i++ ){
    if(numeros[i]> mayor){
        mayor = numeros[i]
    }
}
console.log(`El numero mayor es ${mayor}`);

for(let j = 0; j < 8;j++ ){
    if(numeros[j]< mayor){
        mayor = numeros[j]
    }
}
console.log(`El numero menor es ${mayor}`);