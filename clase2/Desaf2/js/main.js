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
var descuentoMagico2
// DECLARANDO ENTRADA
var preEstreno
var preEstrenoIn
// END DECLARACION DE VAR


// ASIGNANDO VAR A RANDOMS
edad = parseFloat((Math.random() * ( 100 - 4 ) + 4).toFixed(0))
numTicket = parseFloat((Math.random() * ( 31 - 1 ) + 1).toFixed(0)) ;
dia = parseFloat((Math.random() * ( 7 - 1 ) + 1).toFixed(0)) ;
genero = Math.random() < 0.5 ;
estudiante = Math.random() < 0.5 ;
costoTicket = 10
descuentoDia = 1
descuentoEdad = 1
descuentoMagico = false
descuentoMagico2 = 1
descuentoWomen = 1

// PRE ESTRENO MIERCOLES
if (dia === 3) {
    preEstrenoIn = prompt("preestreno? s/n") 
    if (preEstrenoIn === "s") {
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
    descuentoWomen = 0.7
}

// DESCUENTO PARA VIERNES-DOMINGO PARA MENORES DE 8 DEL 20%
if (edad <8 && dia > 4){
    descuentoEdad = 0.8
}

// DESCUENTO PARA ADULTOS EXCEPTO LUNES Y JUEVES MAYORES DE 60 40%
if (edad > 60 && dia !=1 && dia != 4) {
    descuentoEdad = 0.6
}

// GRATIS SI NUMTICKET = 21
if (numTicket === 21) {
    descuentoMagico = true
    descuentoMagico2 = 0
}

// LOGICA
costoTicket *= descuentoDia * descuentoEdad * descuentoWomen *descuentoMagico2









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

costoTicket = parseFloat(costoTicket.toFixed(0))


// TABLA DE CONSOLA
console.table({
    "numero de ticket": numTicket,
    "dia de la funcion": dia,
    "edad": edad,
    "genero": genero,
    "estudiante": estudiante,
    "peli pre estreno": preEstreno,
    "costo de entrada": costoTicket,
})

alert("el costo de la entrada")
alert(costoTicket)
if (preEstreno){
    alert("miercoles de preestreno")
    alert(preEstrenoIn)
}

