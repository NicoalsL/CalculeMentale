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

    <div class="hero">
    <div class="heroTexte">
    <h1>CalculeSky</h1>
    <p>c'est un jeu nnono decovurez ! </p>
    </div>
    <button class="neubrutalism"><a class="buttonA" href="/jeu" onclick="navigateTo('/jeu'); return false;">Jouez Maintenant</a></button>
    </div>


    
    `;
};


export default indexPage;
