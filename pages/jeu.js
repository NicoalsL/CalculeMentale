// pages/classement.js

import { setDebut } from '../etats/debut.js';
import { getChronos, goChronos } from '../scoring/chronos.js';

const jeuPage = () => {
    let nombreUn = 0;
    let nombreDeux = 0;
    let resulat = nombreUn + nombreDeux

    const content = document.getElementById('content');
    content.innerHTML = `
      <div id="div" class="start">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>
    `;
    const div = document.querySelectorAll('#div div'); 
setDebut(div, resulat)
  };
  
  export default jeuPage;




function barreTime(){

  
  const timerContainer = document.createElement("div")
  const timerBar = document.createElement("div")
  
  timerContainer.classList ="timer-container"
  timerBar.classList ="timer-bar"
  
  document.body.appendChild(timerContainer)
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
  
  
}
