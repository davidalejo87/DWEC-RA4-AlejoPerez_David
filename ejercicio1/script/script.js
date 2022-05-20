'use strict';

// Función para crear jugadores
function Player(name,surname,job){
  
    this.name=name;
    this.surname=surname;
    this.job=job;
    this.level=1;
    this.points=1;

    //Función que suma 1 punto cuando el player elimina un zombie
    this.playerFight=function(){
        this.points++;
        if(this.points==10){
            this.level++;
            this.points=1;
            alert("Has subido de nivel!")
        }
    }

    //Función para resetear la puntuación cuando llegue a 0
    this.resetPoints=function(){
        this.points=1;
        this.level=1;
        alert("El jugador ha muerto, empezamos de nuevo.")
    }

    //Función que resta 1 punto cuando el zombie ataca
    this.zombieFight=function(){
        this.points-=1;
        if(this.points ==0 && this.level==1){
            this.resetPoints();
        }else if(this.points==0){
            this.level-=1;
            this.points=9;
            alert("Has bajado de nivel!");
        }
    }

    //Función para ver la información del jugador
    this.toString=function(){
        return alert("Nombre: "+this.name+"\n Apellido: "+this.surname+"\n Empleo: "+this.job+"\n Nivel: "+this.level+"\n Puntuación: "+this.points)
    }
}

// Creamos 2 jugadores y lo metemos en un array 
let player1 = new Player("David","Alejo","Programador");
let player2 = new Player("Fran","Pérez","Desarrollador");
let players = [player1,player2];


