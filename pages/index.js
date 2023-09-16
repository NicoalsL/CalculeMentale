const indexPage = () => {
  const content = document.getElementById('content');
  content.innerHTML = `
    <h1>jeux</h1>
    
    <button class="neubrutalism"><a class="buttonA" href="/jeu" onclick="navigateTo('/jeu'); return false;">Jouez Maintenant</a></button>
    `;
};


export default indexPage;
