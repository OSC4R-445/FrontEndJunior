var precioSinIva;
var cantidad;
var subtotal
var porcentajeDescuento;
var descuento;
var Iva;
var MontoPagar;



precioSinIva = Math.floor (Math.random() * 1000) + 10;

cantidad = Math.floor (Math.random() * 10) + 1;

subtotal = precioSinIva * cantidad;

//determinamos el porcentaje de descuento en base al subtotal
if (subtotal > 5000){
    porcentajeDescuento = 5;
} else {
    porcentajeDescuento = 2;
}

//descuento
descuento = subtotal * porcentajeDescuento/100;

// iva
Iva = (subtotal - descuento) * 0.16;

//total
MontoPagar = subtotal - descuento  + Iva;

//Log
console.log("Precio sin Iva: " + precioSinIva + " Bs");
console.log("Cantidad: " + cantidad );
console.log("Subtotal: " + subtotal + " Bs");
console.log("Porcentaje de descuento: " + porcentajeDescuento + "%");
console.log("Descuento: " + descuento + " Bs");
console.log("Iva: " + Iva + " Bs");
console.log("Monto a pagar: " + MontoPagar + " Bs");
