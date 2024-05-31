let pares = [1,9,6,3,7,8];
let contador = 0;


pares.forEach((valor,posicion)=>{
    if(valor%2 ==0){
        contador += valor
    }
})
console.log(contador);
