import { setAffichageJeu } from "./jeu";
import { reinitialiserScore } from "../scoring/score"; 
import { reinitialiserVies } from "../scoring/vie";
import { getScore } from "../scoring/score";
import { addDefaite } from "../scoring/defaite";
import { jeuFin, jeuPasFini } from "../scoring/jeuFini";
import { reiniTours } from "../scoring/tour";
import { getTableauCalcule, reiniTableauCalcule } from "../scoring/tableauCalcule";
import { restatDifficulter } from "../scoring/arithmétique";
export function rejouer(div, resulat){
    jeuFin()
    const rejouer = document.createElement('button');
    rejouer.innerText = "Rejouer"
    rejouer.classList = "btn-rejouer"
    div[2].appendChild(rejouer)
    const h2 = document.createElement('p')
    h2.innerHTML = `Score : ${getScore()} `
    div[1].appendChild(h2)

    const resultat = document.createElement('button');
    resultat.innerText = "Resultat"
    resultat.classList = "btn-resultat"
    div[2].appendChild(resultat)

        resultat.addEventListener('click', () => {
            // Vérifiez si l'élément ul existe déjà dans la div[3].
            const affichageul = div[3].querySelector('ul');
            
            // Si l'élément ul n'existe pas, créez-le et ajoutez-le.
            if (!affichageul) {
                const affichageul = document.createElement('ul');
                div[3].appendChild(affichageul);
              
                getTableauCalcule().map(ligne => {
                  const affichage = document.createElement('li');
                  affichageul.appendChild(affichage);
              
                  if (ligne.reussi === true) {
                    affichage.classList.add("correcte"); // Ajoutez une classe CSS pour "correcte"
                  } else {
                    affichage.classList.add("false"); // Ajoutez une classe CSS pour "false"
                  }
              
                  const affTours = document.createElement('div');
                  affTours.classList.add("affTours"); // Ajoutez une classe CSS pour "correcte"

                  affichage.appendChild(affTours); // Ajoutez affTours en tant qu'enfant de affichage
                  const texTours = document.createElement('p');
                  affTours.appendChild(texTours); // Ajoutez affTours en tant qu'enfant de affichage
                  texTours.innerText = `${ligne.tours}`;

                  const affDetails = document.createElement('div');
                  if( ligne.isDefaiteChrono == false){

                    affDetails.innerText = `${ligne.nombre1} ${ligne.operateur} ${ligne.nombre2} = ${ligne.resultat} ${ligne.resultatJoueur}`;
                  }else{
                    affDetails.innerText = `${ligne.nombre1} ${ligne.operateur} ${ligne.nombre2} = ${ligne.resultat} `;

                  }
                  affichage.appendChild(affDetails); // Ajoutez affDetails en tant qu'enfant de affichage
                });
              } else {

                div[3].removeChild(affichageul);

              }
              
          });
          

    rejouer.addEventListener('click', () =>  {
        reiniTours()
        jeuPasFini()
        addDefaite()
        div[1].removeChild(h2)
        div[2].removeChild(rejouer)
        const resulat = document.querySelector('.btn-resultat');

        div[2].removeChild(resulat)
        reiniTableauCalcule()
        reinitialiserScore()
        reinitialiserVies()
        restatDifficulter()
        setAffichageJeu(div, resulat)   

        const affichageul = div[3].querySelector('ul');
        if (affichageul) {
          div[3].removeChild(affichageul); // Supprimez l'élément ul s'il existe.
        } 
    })
}