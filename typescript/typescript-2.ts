
function person(nombre: String, edad: number) {
    console.log(`Hola ${nombre} tu edad es de ${edad} y eres gay`)
  }
  

interface Persona {
    nombre: string;
    edad: number;
  }
  
const persona:Persona = {
    nombre:'Rudy Chorizo',
    edad:23
}

person(persona.nombre, persona.edad)