import { setDebut } from '../etats/debut.js';

const jeuPage = () => {
    let nombreUn = 0;
    let nombreDeux = 0;
    let resulat = nombreUn + nombreDeux

    const content = document.getElementById('content');
    content.innerHTML = `
    <div class="retour"><a href="/" onclick="navigateTo('/'); return false;">X</a>
    </div>
        <div id="div" class="start">
          <div class="div1 divindividuel"></div>
          <div class="div2 divindividuel"></div>
          <div class="div3 divindividuel"></div>
          <div class="div4 divindividuel"></div>
        </div>
    `;
    const div = document.querySelectorAll('#div div'); 


    setDebut(div, resulat)
  };
  
  export default jeuPage;