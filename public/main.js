// import './assets/style.css'
// import { setDebut } from '../etats/debut.js'

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

import indexPage from './pages/index.js';
import classementPage from './pages/classement.js';

const routes = {
  '/': indexPage,
  '/classement': classementPage,
  // ... autres routes
};

const navigateTo = (path) => {
  window.history.pushState({}, '', path);
  if (routes[path]) {
    routes[path]();
  }
};

// Gérez les changements d'URL
window.addEventListener('popstate', () => {
  const path = window.location.pathname;
  if (routes[path]) {
    routes[path]();
  }
});

// Initialisez pour la première visite
const initialPath = window.location.pathname;
if (routes[initialPath]) {
  routes[initialPath]();
}
