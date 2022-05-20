"use strict";

/*
* Función recursiva que recibe un parámetro n y repite n veces el string "bauuuba"
*/

function recursiva(numRepeat){
    let string= "Bauuuba"

    if (numRepeat==0){
        return;
    }else {
        document.write(string+" ");
        recursiva(numRepeat-1);
    }
}

let numRepeat = prompt("Escribe el número de veces que quieres repetir 'Bauuuba': ")

// Comprobamos que el dato puesto por el usuario es un número entero y mayor que 0
if(isNaN(numRepeat) || parseInt(numRepeat)!=numRepeat || numRepeat <1 ) {
    alert("Has puesto un dato incorrecto.")
}else{
    recursiva(numRepeat);
}