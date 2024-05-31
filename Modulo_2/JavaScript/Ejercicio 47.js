let letras = ['a','f','g','g','f','r','t','n','d','g','f','t','e','w','b']
let contador = 0;
let caracter ='g'

letras.forEach((valor,posicion) => {
    if(valor == caracter){
        contador++
    }
        
})
 console.log(`La letra que ingresaste es ${caracter} y en tu array hay ${contador}, "${caracter}" en tu array `);