import '../assets/style.css'
import { setDebut } from '../etats/debut.js';

const indexPage = () => {
    let nombreUn = 0;
    let nombreDeux = 0;
    let resulat = nombreUn + nombreDeux

    const content = document.getElementById('content');
    content.innerHTML = `
      <h1>Page d'accueil</h1>
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
  
  export default indexPage;
  
// let nombreUn = 0;
// let nombreDeux = 0;
// let resulat = nombreUn + nombreDeux
// document.querySelector('#app').innerHTML = `
//   <div id="div" class="start">
//   <div></div>
//   <div></div>
//   <div></div>
//   <div></div>
//   </div>
// `
// const div = document.querySelectorAll('#div div'); 
// setDebut(div, resulat)