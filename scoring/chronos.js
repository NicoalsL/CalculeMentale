import { getReponse, reponseFalse } from "./reponse";
import { supprimerVie } from "./vie";
import { supprimerCalcule } from "./calcule";
import { perdreVie } from "./vie";
import { pageScore } from "../etats/score";
import { getVie } from "./vie";
import { addTours } from "./tour";
import { rejouer } from "../etats/rejouer";
import { jeuPasFini, getJeuFini, jeuFin } from "./jeuFini";
export let chronos = 10;

export function getChronos(){
    return chronos
}


export function refreshChronos(){
    chronos = 10;

}

export function goChronos(){
    chronos--
}

export function daffichagerBarreTime(div){
    const ligneChronos = document.querySelector('.timer-container')
    div[0].removeChild(ligneChronos);

}


export function barreTime(div, resulat){

        const timerContainer = document.createElement("div")
        const timerBar = document.createElement("div")
        timerContainer.classList ="timer-container"
        timerBar.classList ="timer-bar"
        div[0].appendChild(timerContainer)
        timerContainer.appendChild(timerBar)
        if( getVie() === 0){
            supprimerVie(div)
            supprimerCalcule(div)
            daffichagerBarreTime(div)
            rejouer(div, resulat)    
        }
    const intervalId = setInterval(() => {
        if (getJeuFini() === true){
            clearInterval(intervalId); 
        }

      goChronos();
      const progress = ((10 - getChronos()) / 10) * 100;
      timerBar.style.width = progress + "%";
      if( getChronos() === 0 &&  getVie() !== 0){
        supprimerVie(div)
        supprimerCalcule(div)
        daffichagerBarreTime(div)
        perdreVie() 
        addTours()
        pageScore(div, resulat)
    } 

      if (getChronos() === 0 || getReponse()== true) {
        refreshChronos()
        clearInterval(intervalId);
    }
    }, 1000);
  }