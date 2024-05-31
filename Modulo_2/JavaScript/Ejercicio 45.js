let letras = ['d', 'r', 'u', 'f', 'n', 't', 'p', 'i'];
let caracter = 'a';
let encontrado = false;


existe = letras.forEach((valor) => {
    if (valor === caracter) {
        encontrado = true;
    }
})

console.log(encontrado == true ? 'Se encontro su letra' : 'No se encontro su letra');
