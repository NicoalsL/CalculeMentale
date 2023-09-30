import { getReponse, reponseFalse } from "./reponse";
import { supprimerVie } from "./vie";
import { supprimerCalcule } from "./calcule";
import { perdreVie } from "./vie";
import { pageScore } from "../etats/score";
import { getVie } from "./vie";
import { addTours } from "./tour";
import { rejouer } from "../etats/rejouer";
import { jeuPasFini, getJeuFini, jeuFin } from "./jeuFini";
import { addTableauCalcule } from "./tableauCalcule";
export let chronos = 0;

export function getChronos(){
    return chronos
}


export function refreshChronos(){
    chronos = 0;

}

export function goChronos(){
    chronos++
    console.log(chronos)
}

export function daffichagerBarreTime(div){
    const ligneChronos = document.querySelector('.timer-container')
    div[0].removeChild(ligneChronos);

}


export function barreTime(div, resulat, tours, nombre1, nombre2, operateur, resultat, resultatJoueur){

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
        if ( getChronos() >= 7){
        timerBar.classList.add('timer-bar-rouge')
        }

        goChronos();
       const progress =  (getChronos() / 10) * 100;
    timerBar.style.width = progress + "%";
    console.log(progress)
    if( getChronos() === 10 &&  getVie() !== 0){
        console.log("CHRONOS SUPPRIERM VIE", div)
        supprimerCalcule(div)
        supprimerVie(div)
        daffichagerBarreTime(div)
        perdreVie() 
        addTours()
        pageScore(div, resulat)
        addTableauCalcule(tours, nombre1, nombre2, operateur, resultat, resultatJoueur, true)
    } 

    if (getChronos() === 10 || getReponse()== true) {
        refreshChronos()
        clearInterval(intervalId);
    }
    }, 1000);
  }