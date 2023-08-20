
  
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

const indexPage = () => {
  const content = document.getElementById('content');
  content.innerHTML = `
    <h1>jeux</h1>
    <a class="jouer" href="/jeu" onclick="navigateTo('/jeu'); return false;">Jouez !</a>
    `;
};


export default indexPage;
