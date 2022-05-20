'use strict';

// Función para crear un objeto persona
function Persona(name,age,genere){
    this.name = name;
    this.age = age ;
    this.genere = genere;
    
    //Método obtDetalles para mostrar por pantalla el nombre, la edad y el género de la persona
    this.obtDetalles=function(){
        return document.write("Nombre: " +this.name+"\n Edad: "+this.age+"\n Género: "+this.genere);
    }
}


// Objeto Estudiante que hereda las propiedades name, age y genere de persona
let Estudiante = function(name,age,genere,course,group){
    
    //Llama al padre Persona
    Persona.call(name,age,genere);
    this.course = course;
    this.group = group;

    //Método registrar
    this.registrar=function(){
        return document.write("El alumno "+this.name+ " de "+this.course+" "+this.group+" ha sido registrado.");
    }
}


// Objeto Profesor que hereda las propiedades name, age y genere de persona
let Profesor = function(name,age,genere,module,level){
    
    //Llama al padre Persona
    Persona.call(name,age,genere);
    this.module = module;
    this.level = level;

    //Método asignar
    this.asignar=function(){
        return document.write("El profesor "+this.name+" ha sido asignado en el módulo de "+this.module);
    }
}


let persona1 = new Persona("Pepe", 50 ,"hombre");
persona1.obtDetalles();

let persona2 = new Estudiante("David",34,"hombre","2º","B");
persona2.obtDetalles();