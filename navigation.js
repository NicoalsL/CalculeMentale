// Fonction appelée lorsqu'on clique sur le bouton
function rediriger() {
    // Utiliser l'API History pour changer l'URL
    history.pushState(null, null, '/jeux');
  
    // Charger la nouvelle page
    chargerPage('jeux.html');
  }
  
  // Fonction pour charger une nouvelle page en utilisant Fetch
  function chargerPage(page) {
    fetch(page)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de chargement de la page');
        }
        return response.text();
      })
      .then(html => {
        document.body.innerHTML = html;
      })
      .catch(error => {
        console.error('Une erreur est survenue :', error);
      });
  }
  
  // Attacher la fonction au clic du bouton
  document.getElementById('monBouton').addEventListener('click', rediriger);
  