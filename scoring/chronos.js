import { calculeFalse, getCalcule } from "./valider";
let chronos = 10;

export function getChronos(){
    return chronos
}

export function refreshChronos(){
    chronos = 10;
    const timerBar = document.querySelector('.timer-bar')

    timerBar.style.width = "0"; // Réinitialise la barre
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
                daffichagerChronos(div); 
                resolve(); 
            }
            
            
        },1000)
        
        
    })
}

function start(){
    return new Promise((resolve, reject) => {

    })
}

export function barreTime(div, chronos){
    const timerContainer = document.createElement('div')
    const timerBar = document.createElement('div')
    timerContainer.classList ="timer-container"
    timerBar.classList ="timer-bar"

    div[1].appendChild(timerContainer)
    timerContainer.appendChild(timerBar)

    function updateTimer() {
    if (chronos >= 0) {
        const progress = ((10 - chronos) / 10) * 100;
        console.log(progress)
        timerBar.style.width = progress + "%";
        chronos--;
        console.log("aaaaa", chronos)
        setTimeout(updateTimer, 1000);
      }
      
    }
    updateTimer();

}

export function daffichagerBarreTime(div){
    const ligneChronos = document.querySelector('.timer-container')
    div[1].removeChild(ligneChronos);

}