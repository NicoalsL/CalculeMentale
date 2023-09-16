// pages/classement.js

const classementPage = () => {
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
      <h1>Classement</h1>
      <p>Ceci est la page À propos de notre site.</p>
    `;
  };
  
  export default classementPage;
  