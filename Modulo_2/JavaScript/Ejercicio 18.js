let precio = 250
    descuento = 0;
if(precio >= 100){
   descuento = precio * 0.10
   console.log(`Tienes 10% de descuento entonces tu precio es ${precio - descuento}`);
}
else if(precio <= 100){
    console.log('Tu precio es normal');
}