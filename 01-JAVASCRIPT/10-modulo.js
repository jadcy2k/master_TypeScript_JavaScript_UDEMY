// ESTE MÓDULO EXPORTARÁ LAS FUNCIONES PARA SER USADAS FUERA:

// Exportar una función por defecto:
export function imprimirArray(datos) {
  datos.forEach(element => {
    console.log(element);    
  });
  return datos;  
}

export function hoy(){
  let today = new Date();
  console.log("Hoy es:", today);
}


// Exportación de funcion normal:
export function getNombre(nombre) {
  console.log("Hola!",nombre);  
}

// Arrow-function (primero se declara y luego se exporta):
const principal = () => {
  console.log("Esta es la funcion principal del módulo. Se exporta como DEFAULT.");
}
export default principal;