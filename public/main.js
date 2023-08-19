import './assets/style.css'
import { setDebut } from '../pages/debut.js'

let nombreUn = 0;
let nombreDeux = 0;
let resulat = nombreUn + nombreDeux

document.querySelector('#app').innerHTML = `
  <div id="div" class="start">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  </div>
`
const div = document.querySelectorAll('#div div'); 
setDebut(div, resulat)