// pages/classement.js

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
setDebut(div, resulat)
  };
  
  export default jeuPage;