'use strict'

class personnage
{
    constructor(name,health){
    this.name=name
    this.health=health
    }
}


const playlist =["Wejdene-Anissa","10'-Laylow","Dinos-Triste Anniversaire","Dinos-Quatres Saisons","Dinos-My baby"]


function trajet(playlist,perso,redLight){

    let changement = 0;
    console.log("Debut du trajet")
    for(let i=redLight;i>0;i--){
        if(perso.health>0){
            let playingSong= playlist[Math.floor(Math.random() * playlist.length)]
            console.log("A la radio actuellement :"+ playingSong)
            if(playingSong=="Wejdene-Anissa"){
                console.log("Nul, John change de Taxi")
                perso.health--
                changement++
            }
        }else{
            console.log("Explosion")
            break;
        }
       
    }
    if(perso.health>0){
        console.log("John est rentré chez lui, il a du faire  " + changement +" de changement" )
    }
   

}

let John= new personnage("John",10);

trajet(playlist,John,30);