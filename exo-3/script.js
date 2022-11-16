'use strict'

let startButton = document.querySelector(".start");
let board = document.querySelector(".board");
let inputContainer =document.querySelector(".input-container")
let pass =document.querySelector(".pass")
let nombrebatons =document.querySelector(".nombre-batons")
let message = document.querySelector(".message")
let Joueur1Turn=true

let Players=[]

    startButton.addEventListener("click",()=>{
        if(document.querySelector(".inputJoueur1").value!=""&& document.querySelector(".inputJoueur2").value!=""){
            createBoard();
            
        }else{
            console.log(document.querySelector(".inputJoueur2").value)
        }
    });



class Player
{
    constructor(name,batons,canPlay){
        this.name=name
     
        this.batons=batons
        this.canPlay=canPlay
    }   
        countBaton(adversaire){
            console.log(this.batons,adversaire.batons)
            if(this.batons>=2){
                
                this.batons--
                nombrebatons.innerHTML=this.batons
                message.innerHTML="c'est au tour de " + this.name

            }
            else{
               
                this.batons--
                this.canPlay=false
                this.batons=3
                adversaire.batons=3
                message.innerHTML="c'est au tour de " + adversaire.name
                nombrebatons.innerHTML=adversaire.batons
            }
        }

        pass(adversaire){
            console.log(this.batons)
            if(this.batons<3){
               
                this.canPlay=false
                this.batons=3
                adversaire.batons=3
                message.innerHTML="c'est au tour de " + adversaire.name
                nombrebatons.innerHTML=adversaire.batons
            }
           
        }

        whosTurn(other){
            if(other===false){
                this.canPlay=true
            }
        }
    

}

function createBoard(){
    Joueur1Turn=true
/*Create the player*/
    let Joueur1= new Player(document.querySelector(".inputJoueur1").value,3,true)
    let Joueur2= new Player(document.querySelector(".inputJoueur2").value,4,false)
    Players.push(Joueur1,Joueur2)
    inputContainer.style.display="none"
    pass.style.display="block"
    console.log(Joueur1,Joueur2)
    startButton.style.display="none";
    let numberBatons= Math.floor(Math.random() * (25 - 5 + 1) + 5)

    for(let i = numberBatons; i>0;i--){
        board.innerHTML+='<div class="batton batton-'+i+'"></div>'
    }
    let batons=document.querySelectorAll(".batton")
   
    batons.forEach(e=>{
        if(batons.length>0){
        e.addEventListener("click",()=>{
                if(Joueur1.canPlay){
                    
                    Joueur1.countBaton(Joueur2);
                    Joueur2.whosTurn(Joueur1.canPlay)
                    
                    let numberbatons=document.querySelectorAll(".batton")
                    if(numberbatons.length===1){
                        message.innerHTML=Joueur1.name + " a perdu "
                        message.innerHTML+=Joueur2.name + " a gagner "
                        pass.style.display="none"
                        
                    }
                    e.remove();
                    nombrebatons.innerHTML=Joueur1.batons
                    
                    console.log(Joueur1.name,Joueur1.batons)
                    pass.addEventListener("click",()=>{ 
                        Joueur1.pass(Joueur2);
                        Joueur2.whosTurn(Joueur1.canPlay)
                        
                          
                    })
                    
               
                }
               
             
                else if(Joueur2.canPlay){
                    /*nombrebatons.innerHTML=Joueur2.batons*/
                    Joueur2.countBaton(Joueur1);
                   
                    Joueur1.whosTurn(Joueur2.canPlay)
              
                    let numberbatons=document.querySelectorAll(".batton")
                    if(numberbatons.length===1){
                        message.innerHTML=Joueur2.name + " a perdu "
                        message.innerHTML+=Joueur1.name + " a gagner "
                        pass.style.display="none"
                       
                    }
                    e.remove();
                    nombrebatons.innerHTML=Joueur2.batons
                    console.log(Joueur2.name,Joueur2.batons)
                    pass.addEventListener("click",()=>{ 
                        console.log("ouais")
                        Joueur2.pass(Joueur1);  
                        Joueur1.whosTurn(Joueur2.canPlay)
                        
                })
                
                if(batons.length==1){
                    console.log(Joueur2.name + " a perdu ")
                    console.log(Joueur1.name + " a gagner ")
                }
                }
                console.log("super")
        })
        }
   
    })
  

  console.log(batons.length)
  
  
}




    
  


     





