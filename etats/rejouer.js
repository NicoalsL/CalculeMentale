import { setAffichageJeu } from "./jeu";
import { reinitialiserScore } from "../scoring/score"; 
import { reinitialiserVies } from "../scoring/vie";
import { getScore } from "../scoring/score";
import { addDefaite } from "../scoring/defaite";
import { jeuFin, jeuPasFini } from "../scoring/jeuFini";
import { reiniTours } from "../scoring/tour";
import { getTableauCalcule, reiniTableauCalcule } from "../scoring/tableauCalcule";
export function rejouer(div, resulat){
    jeuFin()
    const rejouer = document.createElement('button');
    rejouer.innerText = "Rejouer"
    rejouer.classList = "rejouer"
    div[2].appendChild(rejouer)
    const h2 = document.createElement('h2')
    h2.innerHTML = `Score : ${getScore()} `
    div[1].appendChild(h2)

    const resultat = document.createElement('button');
    resultat.innerText = "Resultat"
    resultat.classList = "resultat"
    div[2].appendChild(resultat)

    resultat.addEventListener('click', () =>  {
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
          
                affichage.innerText = `${ligne.nombre1} ${ligne.operateur} ${ligne.nombre2} ${ligne.resultat} ${ligne.resultatJoueur} ${ligne.reussi}`;
              });
            }
          });
          

         
    })

    rejouer.addEventListener('click', () =>  {
        reiniTours()
        jeuPasFini()
        addDefaite()
        div[1].removeChild(h2)
        div[2].removeChild(rejouer)
        const resulat = document.querySelector('.resultat');

        div[2].removeChild(resulat)
        reiniTableauCalcule()
        reinitialiserScore()
        reinitialiserVies()
        setAffichageJeu(div, resulat)   

        const affichageul = div[3].querySelector('ul');
        if (affichageul) {
          div[3].removeChild(affichageul); // Supprimez l'élément ul s'il existe.
        } 
    })
}