import { calculeFalse, getCalcule } from "./valider";
let chronos = 11;

export function getChronos(){
    return chronos
}

export function refreshChronos(){
    chronos = 11;
}

export function goChronos(){
    chronos--
}

export function affichageChronos(div, chronos){
    const ligneChronos = document.createElement('h1')
    ligneChronos.classList = "chronos"

    div[0].appendChild(ligneChronos);
    ligneChronos.innerHTML = `${chronos}s`

}

export function daffichagerChronos(div){
    const ligneChronos = document.querySelector('.chronos')
    div[0].removeChild(ligneChronos);

}



export async function temps(){

    return new Promise((resolve, reject) => {
        const interval = setInterval( async () => {
            if( getCalcule() == true){
                console.log("calcule Valdier");
                clearInterval(interval);
                calculeFalse()
                refreshChronos()
            }
            const ligneChronos = document.querySelector('.chronos')
            goChronos()
            try{

                ligneChronos.innerHTML = `${chronos}s`
            }catch(e){
                console.log(e)
            }

            if(getChronos() === 0){
                console.log("FINI")
                clearInterval(interval);
                await daffichagerChronos(div); 
                resolve(); 
            }
            
            
        },1000)
        
        
    })
}

function start(){
    return new Promise((resolve, reject) => {

    })
}