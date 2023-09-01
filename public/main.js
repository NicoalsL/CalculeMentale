import './assets/style.css'

import indexPage from './pages/index.js';
import classementPage from './pages/classement.js';
import jeuPage from './pages/jeu';

const routes = {
  '/': indexPage,
  '/classement': classementPage,
  '/jeu': jeuPage,
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

