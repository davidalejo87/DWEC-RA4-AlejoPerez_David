'use strict';

//Clase Player 
class Player{
    //Constructores de la clase Player
    constructor(name,surname,job){
        this.name=name;
        this.surname=surname;
        this.job=job;
        this.level=1;
        this.points=1;
    }

    //Getters para mostrar los parámetros
    getName(){
        return this.name;
    }

    getSurname(){
        return this.surname;
    }

    getJob(){
        return this.job;
    }

    getLevel(){
        return this.level;
    }

    getPoints(){
        return this.points;
    }

    //Setters para modificar los parámetros
    setJob(){
        this.job=job;
    }

    setLevel(level){
        this.level=level;
    }

    setPoints(points){
        this.points=points;
    }

    //Método que suma 1 punto cuando el player elimina un zombie
    playerFight(){
        this.points++;
        if(this.getPoints()==10){
            this.level++;
            this.points=1;
            alert("Has subido de nivel!")
        }
    }

    //Método para resetear la puntuación cuando llegue a 0
    resetPoints(){
        this.points=1;
        this.level=1;
        alert("El jugador ha muerto, empezamos de nuevo.")
    }

    //Método que resta 1 punto cuando el zombie ataca
    zombieFight(){
        this.points--;
        if(this.getPoints()==0 && this.getLevel()==1){
            this.resetPoints();
        }else if(this.getPoints()==0){
            this.level--;
            this.points=9;
            alert("Has bajado de nivel!");
        }
    }

    //Método para cambiar la profesión del jugador
    changeJob(){
        this.job = prompt("Elija un nuevo empleo: ");
    }

    //Método para ver la información del jugador
    toString(){
        return alert("Nombre: "+this.getName()+"\nApellido: "+this.getSurname()+"\nEmpleo: "+this.getJob()+
        "\nNivel: "+this.getLevel()+"\nPuntuacion: "+this.getPoints());
    }
}


// Creamos 2 jugadores y lo metemos en un array 
let player1 = new Player("David","Alejo","Programador");
let player2 = new Player("Fran","Pérez","Desarrollador");
let players = [player1,player2];

