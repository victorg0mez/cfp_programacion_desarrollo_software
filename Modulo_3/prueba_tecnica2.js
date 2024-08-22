

const array = [1,8,6,3,9,5,7,4,1,63,100,23,5,69,36,7,101]

//ordenar el array
const orden = array.sort((a, b) => a - b);

// acceder a la penultima posicion de un array
const penult_position = orden[orden.length - 2]


console.log(`El array seria ${orden}`);
console.log(`El segundo numero mas grande en el array es: ${penult_position}`);