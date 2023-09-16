const indexPage = () => {
  const content = document.getElementById('content');
  content.innerHTML = `
    <nav>
      <ul>
        <li>
          <a href="/" onclick="navigateTo('/'); return false;">Accueil</a>
        </li>
        <li>
          <a href="/classement" onclick="navigateTo('/classement'); return false;">Classement</a>
        </li>
      </ul>
    </nav>
    <h1>jeux</h1>
    
    <button class="neubrutalism"><a class="buttonA" href="/jeu" onclick="navigateTo('/jeu'); return false;">Jouez Maintenant</a></button>
    `;
};


export default indexPage;
