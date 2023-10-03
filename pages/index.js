const indexPage = () => {
  const content = document.getElementById('content');
  content.innerHTML = `
    <nav>
      <ul class="contenaireTitre">
        <li class="marque">
          <p>Astronomaths</p>
        </li>
      </ul>
      <ul class="navUl">
        <li class="navLi">
          <a href="/" onclick="navigateTo('/'); return false;">Accueil</a>
        </li>
        <li class="navLi">
          <a href="/classement" onclick="navigateTo('/classement'); return false;">Classement</a>
        </li>
      </ul>
    </nav>

    <div class="hero">
    <div class="herocontenaire">
        <div class="shadow"></div>

      <div class="heroTexte">
        <h1>Astronomaths</h1>
        <p>Préparez-vous à un défi mathématique interstellaire avec Astronomaths, le jeu de calcul mental ultime.</p>
      </div>
      <button class="neubrutalism"><a class="buttonA" href="/jeu" onclick="navigateTo('/jeu'); return false;">Jouez Maintenant</a></button>
    </div>
    
    </div>
    <button class="btn-resultat">Resultat</button>
    <button class="btn-rejouer">Resultat</button>



    
    `;
};


export default indexPage;
