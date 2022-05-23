'use strict';

let result = [];
let sum;

//Función para contar el número de veces que se repite un número dentro del array
function numRepet(result, num){

    return result.filter(element => element === num).length;
}

/* 
* Función que simula la tirada de 2 dados, el resultado lo introduce en un array e imprime por pantalla 
* el numero de veces que se repite
*/
function throwDice(numThrow){
    for (let i =0; i < numThrow; i++){
        let dice1 = Math.floor(Math.random()*(5+1)+1);
        let dice2 = Math.floor(Math.random()*(5+1)+1);
        //Suma de los dos dados
        sum= dice1+dice2;
        //Introducimos el valor en el array
        result.push(sum);
    }
    
    document.write("El 2 ha salido " + numRepet(result,2)+ " veces. <br>");
    document.write("El 3 ha salido " + numRepet(result,3)+ " veces. <br>");
    document.write("El 4 ha salido " + numRepet(result,4)+ " veces. <br>");
    document.write("El 5 ha salido " + numRepet(result,5)+ " veces. <br>");
    document.write("El 6 ha salido " + numRepet(result,6)+ " veces. <br>");
    document.write("El 7 ha salido " + numRepet(result,7)+ " veces. <br>");
    document.write("El 8 ha salido " + numRepet(result,8)+ " veces. <br>");
    document.write("El 9 ha salido " + numRepet(result,9)+ " veces. <br>");
    document.write("El 10 ha salido " + numRepet(result,10)+ " veces. <br>");
    document.write("El 11 ha salido " + numRepet(result,11)+ " veces. <br>");
    document.write("El 12 ha salido " + numRepet(result,12)+ " veces. <br>");
}

throwDice(36000);