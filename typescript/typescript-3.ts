interface Animal{
    nombre:string;
    sonido:()=> void;
}

interface Perro extends Animal{

}

const miPerro:Perro = {
    nombre:"Max",
    sonido: ()=>"Wauw",
}

console.log(`El perro ${miPerro.nombre} hace ${miPerro.sonido()}`)