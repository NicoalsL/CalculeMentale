import { calculeFalse, getCalcule } from "./valider";
import { getReponse, reponseFalse } from "./reponse";
import { supprimerVie } from "./vie";
import { supprimerCalcule } from "./calcule";
import { perdreVie } from "./vie";
import { pageScore } from "../etats/score";
import { getVie } from "./vie";
import { addTours } from "./tour";
import { addErreurs } from "./erreur";
import { defaite, defaiteChyronos } from "../etats/defaite";
import { rejouer } from "../etats/rejouer";
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
  
    const intervalId = setInterval(() => {
        console.log("debut interval", intervalId);
      console.log("chronos", getChronos());
      goChronos();
      const progress = ((10 - getChronos()) / 10) * 100;
      
      timerBar.style.width = progress + "%";
      if( getChronos() === 0 ){
        console.log("FIIINIII")
        console.log("supprimer vie chronos.js")
        console.log("supprimer calcule chronos.js")
        console.log("supprimer BarreTime chronos.js")

        supprimerVie(div)
        supprimerCalcule(div)
        daffichagerBarreTime(div)
        perdreVie() 
        console.log("afficher page score regle.js")
        pageScore(div)
    } 


      if (getChronos() === 0 || getReponse()== true) {

          console.log("clear interval", intervalId);
        refreshChronos()
        clearInterval(intervalId); // Arrêter l'intervalle lorsque chronos atteint 0
        if( getVie() <= 1 ){

            console.log("fini vie inferieur a 1")
            // score = 0
            // defaite++
            addTours()
            addErreurs()
            defaiteChyronos(div)
            defaite(div)
            // rejouer(div, resulat)
        }   
    }
    }, 1000);
  }
  
  // export function barreTime(div, chronos){
//     console.log(getReponse())
//     const timerContainer = document.createElement('div')
//     const timerBar = document.createElement('div')
//     if(getReponse() == false){

//         timerContainer.classList ="timer-container"
//         timerBar.classList ="timer-bar"
        
//         div[1].appendChild(timerContainer)
//         timerContainer.appendChild(timerBar)
//     }

//     function updateTimer(chronos) {

//     if (chronos >= 0) {
//         const progress = ((10 - chronos) / 10) * 100;
//         // console.log("progess", progress);
//         console.log("chronos", chronos);
//         timerBar.style.width = progress + "%";
//         chronos--;
//         console.log("AAAAAA", getReponse())
//         if(getReponse() == true){
//             reponseFalse()
//             console.log("CHRONOO ", chronos)
//             return chronos
//         }
//         setTimeout(() => updateTimer(chronos), 1000);
//       } else {
//         // console.log("Fin complete")
//     }
//     //   console.log("fin")
//     }
//     updateTimer(chronos);

// }