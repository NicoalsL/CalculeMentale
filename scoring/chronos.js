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



export function temps(){

    const p = new Promise(() => {
        const interval = setInterval(()=>{
            if( getCalcule() == true){
                console.log("calcule Valdier");
                clearInterval(interval);
                calculeFalse()
            }
            const ligneChronos = document.querySelector('.chronos')
            goChronos()
            ligneChronos.innerHTML = `${chronos}s`

            if(getChronos() === 0){
                console.log("FINI")

            }
            
            
        },1000)
        
        
    })
}