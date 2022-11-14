'use strict'
let names =["Kevin","Dylan","Britney","Georges","Kim"]

let perso =[
    ["nerd",0.7,0.8,0.6],
    ["sportif",0.2,0.9,0.3],
    ["blonde",0.7,0.7,0.7],
    ["randomguy",0.4,0.8,0.8],
    ["randomgirl",0.4,0.5,0.6],
    
]

class killer
{
constructor(name,health){
    this.name=name
    this.health=health
}
}

class survivant
{
    constructor(name,carah){
        this.name=name
        this.carah=carah
    }


}

class carah
{
    constructor(type,Pm,Pd,Pdd){
        this.type=type
        this.Pm=Pm
        this.Pd=Pd
        this.Pdd=Pdd
    }
}


function gamePlay(){
  
    let jason = new killer("Jason",100);
    let team=[]
    for(let i=0 ;i<5;i++){
        
        let indexname=Math.floor(Math.random() * names.length)
        let name= names[indexname]
        names.splice(indexname,1)
       
        let caracteristqiues= perso[Math.floor(Math.random() * perso.length)]

        let newCarah = new carah(caracteristqiues[0],caracteristqiues[1],caracteristqiues[2],caracteristqiues[3]);
        let Survive= new survivant(name,newCarah)
        team.push(Survive)
       
        
    }
    
    console.log("L'equipe est composée de : " )
    team.forEach(e=>{
        console.log(e.name)
    })


let rip=[];

    
    while(jason.health > 0 || team.length > 0){
       

        if(jason.health < 1 || team.length < 1){
            
            break;
            
        }
        let indexCible=Math.floor(Math.random() * team.length)
        let cible = team[indexCible];
        let proba = Math.random()
        /*console.log(cible)
        console.log(team)
        console.log(proba)*/
        if(cible.carah.Pm > proba){
            console.log(cible.name + " a reussi a esquiver")


            if(cible.carah.Pd>proba){
                jason.health-=10;
                console.log(cible.name + " le/la " + cible.carah.type + " a infliger 10 points de degats a jason, jason a "+ jason.health+" de point de vie")
             
                                
            }else{
                console.log(cible.name + " n'a pas réussi a toucher Jason")
            }

        }else{
            if(cible.carah.Pdd>proba){
                jason.health-=15;
                console.log(cible.name + " Vient de se faire tuer, mais il/elle a reussi a infliger 15 points de degats a Jason, jason a "+ jason.health+" de point de vie")
                
                rip.push(cible)
                team.splice(indexCible,1)
                

            }else{
                rip.push(cible)
                team.splice(indexCible,1)
                console.log("Jason a tué " + cible.name)
            }
   
        }
        
    }

    if(jason.health>0){
        console.log("Jason a gagné avec " + jason.health + " de points de vie" )
    }else if(jason.health<1&&team.length<1){
        console.log("Jason est mort mais tout les survivants aussi , dommage :( " )
    }else{
        console.log("les survivants ont gagnés, nous avons perdus au combat :")
        rip.forEach(e => {
            console.log(e.name)
        });
        console.log("Il reste :")
        team.forEach(i => {
            console.log(i.name)
        });
        
    }
}
gamePlay()