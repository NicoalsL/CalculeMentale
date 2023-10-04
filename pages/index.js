const indexPage = () => {
  const content = document.getElementById('content');
  content.innerHTML = `

  <nav class="navbar">
    <a class="logo" href="/" onclick="navigateTo('/'); return false;">LOGO</a>
    <div class="nav-links">
      <ul>
        <li><a href="/" onclick="navigateTo('/'); return false;">Accueil</a></li>
        <li><a href="/classement" onclick="navigateTo('/classement'); return false;">Classement</a></li>
      </ul>
    </div>
  </nav>
  <header>
  </header>
  


  <div class="hero">
  
  <div class="herocontenairecontenaire">
  <div class="herocontenaire">
    <div class="heroTexte">
      <h1>Astronomaths</h1>
      <p>Préparez-vous à un défi mathématique interstellaire avec Astronomaths, le jeu de calcul mental ultime.</p>
    </div>
    <button class="neubrutalism"><a class="buttonA" href="/jeu" onclick="navigateTo('/jeu'); return false;">Jouez Maintenant</a></button>
  </div>
  <div class="shadow"></div>

</div>
</div>
    
    </div>
    <button class="btn-resultat">Resultat</button>
    <button class="btn-rejouer">Resultat</button>



    
    `;
};


export default indexPage;
