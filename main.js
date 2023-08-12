import './style.css'
import { setDebut } from './debut.js'
import { setRandom } from './Random.js'

let nombreUn = 0;
let nombreDeux = 0;
let resulat = nombreUn + nombreDeux

console.log(nombreUn)
console.log(nombreDeux)

let score = 0


document.querySelector('#app').innerHTML = `
  <div id="div" class="start">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  </div>
`
const div = document.querySelectorAll('#div div'); 
console.log(div)
console.log(div.target)
setDebut(document.querySelector('#div') , div, resulat, score)

{/* <a href="https://vitejs.dev" target="_blank">
<img src="${viteLogo}" class="logo" alt="Vite logo" />
</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
<img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
</a>
<h1>Hello Vite!</h1>
<div class="card">
<button id="counter" type="button"></button>
</div> */}