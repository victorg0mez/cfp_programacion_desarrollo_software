const promises = require(`node:fs/promises`);

// promises.readFile('texto.txt','utf-8')
//     .then((data) => {
//         console.log(data);
// }).catch((err) => {
//     console.error(`Error reading file syntax: ${err}`);
// });


// Promise.all([
//      promises.readFile('texto.txt' , 'utf8'),
//      promises.readFile('texto.txt' , 'utf8'),
//      promises.readFile('muchoTexto.txt' , 'utf8')
// ]).then(([f1,f2,f3]) =>{
//     console.log(f1);
//     console.log(f2);
//     console.log(f3);
// }).catch((err) =>{
//     console.log(`Error reading files:${err}`);
// });


async function promesas(){
    let data3 = await promises.readFile('muchoTexto.txt','utf8');
    console.log(data3);
    console.log('---------');
    let data2 = promises.readFile('texto.txt','utf8');
    console.log(data2);
    console.log('-------9090');
    let data = await promises.readFile('text.txt','utf8');
    console.log(data);
    console.log('-----1010');
}

promesas()