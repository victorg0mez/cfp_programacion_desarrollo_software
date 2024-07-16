const path = require('node:path');


// //conocer el nombre directorios
// console.log(path.sep);


//unen rutas con join
let newPath = path.join('C:/Users/victorgomez/Desktop','"C:/Users/victorgomez/Desktop/js_eXERCISE"','IMAGENES','imagen.jpg')
console.log(newPath);


//base name sirve para obe¿tenr el nombre del directorio
let fileNAme = path.basename(newPath)
 console.log(fileNAme);

 //extname para obtener la extension del archivo

let extName = path.extname(newPath)
 console.log(extName);

 