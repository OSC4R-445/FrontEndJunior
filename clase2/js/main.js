// DECLARANDO RANDOMS
var dia
var genero
var edad
var estudiante
var numTicket
var costoTicket
var descuentoDia
var descuentoEdad
var descuentoWomen
var descuentoMagico
// DECLARANDO ENTRADA
var preEstreno
// END DECLARACION DE VAR


// ASIGNANDO VAR A RANDOMS
numTicket = parseFloat((Math.random() * ( 31 - 1 ) + 1).toFixed(0)) ;
dia = parseFloat((Math.random() * ( 7 - 1 ) + 1).toFixed(0)) ;
genero = Math.random() < 0.5 ;
estudiante = Math.random() < 0.5 ;
costoTicket = 10
descuentoDia = 1
descuentoEdad = 1
descuentoMagico = false

// PRE ESTRENO MIERCOLES
if (dia === 3) {
    if ( prompt("preestreno? s/n") === "s") {
        preEstreno = true
    } else {
        preEstreno = false
    }
} else {
    preEstreno = false
}


// DESCUENTO LOS LUNES POR EL 50%
if (dia === 1) {
    descuentoDia = 0.5
}

// DESCUENTO LOS MARTES POR SER ESTUDIANTE DEL 50%
if (dia === 2 && estudiante) {
    descuentoDia = 0.5
}

// EL PRECIO AUMENTA EN 30% SI ES PRE ESTRENO (LOS MIERCOLES)
if (preEstreno = true && dia === 3) {
    descuentoDia = 1.3
}

// MUJERES 30% DE DESCUENTO LOS JUEVES 

if (genero = false && dia === 4) {
    descuentoWomen = 0.3
}

// DESCUENTO PARA VIERNES-DOMINGO PARA MENORES DE 8 DEL 20%
if (edad <8 && dia > 4){
    descuentoEdad = 0.2
}

// DESCUENTO PARA ADULTOS EXCEPTO LUNES Y JUEVES MAYORES DE 60 40%
if (edad > 60 && dia !=1 && dia != 4) {
    descuentoEdad = 0.4
}

// GRATIS SI NUMTICKET = 21
if (numTicket === 21) {
    descuentoMagico = true
}

// LOGICA








// ADORNANDO LA TABLA DE CONSOLA
if (dia === 1) {
    dia = "lunes"
} else {
    if (dia === 2) {
        dia = "martes"
    } else {
        if (dia === 3) {
            dia = "miercoles"
        } else {
            if (dia === 4) {
                dia = "jueves"
            } else {
                if (dia === 5) {
                    dia = "viernes"
                } else {
                    if (dia === 6) {
                        dia = "sabado"
                    } else {
                        dia = "domingo"
                    }
                }
            }
        }
    }
}

if (genero) {
    genero = "H"
} else {
    genero = "M"
}

if (estudiante) {
    estudiante = "Es estudiante"
} else {
    estudiante = "No es estudiante"
}



// TABLA DE CONSOLA
console.table({
    "numero de ticket": numTicket,
    "dia": dia,
    "genero": genero,
    "estudiante": estudiante,
    "pre estreno": preEstreno,
})



