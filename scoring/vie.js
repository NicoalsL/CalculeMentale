let vie = 3;

export function getVie() {
    return vie;
}

export function perdreVie() {
    vie--;
}

export function reinitialiserVies() {
    vie = 3;
}

export function ajoutVie(){
    vie++;
}

// export function afficherVie(div){
//     const afiVie = document.createElement('h1')
//     div[0].appendChild(afiVie)
//     afiVie.classList = "classVie"
//     afiVie.innerHTML = `Vie : ${getVie()}`
// }
// Créez une fonction pour générer la chaîne HTML des cœurs
function genererCoeurs(nombreDeVies) {
    let coeursHTML = '';
    for (let i = 0; i < nombreDeVies; i++) {
      coeursHTML += '<img src="/assets/coeur.png" height="50px">';
    }
    return coeursHTML;
  }
  
  // Modifiez la fonction afficherVie pour afficher les cœurs
  export function afficherVie(div) {
    const afiVie = document.createElement('div'); // Utilisez une balise div pour contenir les cœurs
    div[0].appendChild(afiVie);
    afiVie.classList = "classVie";
    const nombreDeVies = getVie();
    const coeursHTML = genererCoeurs(nombreDeVies);
    afiVie.innerHTML = `${coeursHTML}`;
  }
  

export function supprimerVie(div){
    const afiVie = document.querySelector(".classVie")
    div[0].removeChild(afiVie)
}

