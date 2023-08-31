import { calculeFalse, getCalcule } from "./valider";
import { getReponse, reponseFalse } from "./reponse";

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
    div[1].removeChild(ligneChronos);

}


export function barreTime(div){

  
    const timerContainer = document.createElement("div")
    const timerBar = document.createElement("div")
    
    timerContainer.classList ="timer-container"
    timerBar.classList ="timer-bar"
    
    div[1].appendChild(timerContainer)
    timerContainer.appendChild(timerBar)
  
    const intervalId = setInterval(() => {
      console.log(getChronos());
      goChronos();
      const progress = ((10 - getChronos()) / 10) * 100;
      console.log(progress);
      
      timerBar.style.width = progress + "%";
      
      if (getChronos() === 0) {
          clearInterval(intervalId); // Arrêter l'intervalle lorsque chronos atteint 0
      }
    }, 1000);
    
    
  }// export function barreTime(div, chronos){
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