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


// const chronos = new Promise((resolve, reject) => {
//   const interval = setInterval(()=> {
//     console.log("ok")
//     resolve(1)
//   }, 1000)
// })

// console.log(chronos)

// chronos.then((n) => {
//   console.log(n)
// })


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