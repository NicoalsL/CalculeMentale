import { setDebut } from '../etats/debut.js';

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
    div[0].classList = "divindividuel"
    div[1].classList = "divindividuel"
    div[2].classList = "divindividuel"
    div[3].classList = "divindividuel"


    setDebut(div, resulat)
  };
  
  export default jeuPage;