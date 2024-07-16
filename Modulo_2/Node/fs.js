const promises = require('node:fs/promises');

/* const stats = fs.statSync('texto.txt')

console.log(stats.isDirectory());
console.log(stats.isFile());
console.log(stats.size);
 */
// let data3 = fs.readFile('muchoTexto.txt', 'utf-8',
//     () => {
//         console.log('Archivo leido');
//     });

// let data2 = fs.readFile('texto.txt', 'utf-8',
//     (err, data) => {
//         if (err) {
//             console.error(`Este es un error 1177771:${err}`);
//             return;
//         }
//         console.log(data);

//     });


// let data = fs.readFile('text.txt', 'utf-8',
//     (err, data) => {
//         if (err) {
//             console.error(`Este es un error 1111:${err}`);
//             return;
//         }
//         console.log(data);
//     });


// Ejemplo sincrono
//  const data2 = fs.readFileSync('texto.txt','utf-8');
//  console.log(data2);
//  const data3 = fs.readFileSync('muchoTexto.txt','utf-8');
//  console.log(data3);
//  const data = fs.readFileSync('texto.txt','utf-8');
//  console.log(data);

promises.readdir('C:/Users/victorgomez/Desktop') 
    .then((files) => {
        files.forEach((file) => {
            console.log(file);
        });
    }).catch((err) => {
        if (err) {
            console.error(`Error reading directory ${err}`)
            return
        }
    });