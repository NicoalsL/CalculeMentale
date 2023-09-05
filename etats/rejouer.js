import { setAffichageJeu } from "./jeu";
import { reinitialiserScore } from "../scoring/score"; 
import { reinitialiserVies } from "../scoring/vie";
import { getScore } from "../scoring/score";
import { addDefaite } from "../scoring/defaite";
import { jeuFin, jeuPasFini } from "../scoring/jeuFini";
import { reiniTours } from "../scoring/tour";
import { getTableauCalcule } from "../scoring/tableauCalcule";
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
    resultat.classList = "rejouer"
    div[2].appendChild(resultat)

    resultat.addEventListener('click', () =>  {
        const affichageul = document.createElement('ul');
        div[3].appendChild(affichageul)

        getTableauCalcule().map( ligne => {
            const affichage = document.createElement('li');
            affichageul.appendChild(affichage)

            affichage.innerText = `${ligne.nombre1} ${ligne.operateur} ${ligne.nombre2} ${ligne.resultat} ${ligne.resultatJoueur} ${ligne.reussi}`
        });


         
    })

    rejouer.addEventListener('click', () =>  {
        reiniTours()
        jeuPasFini()
        addDefaite()
        div[1].removeChild(h2)
        div[2].removeChild(rejouer)
        reinitialiserScore()
        reinitialiserVies()
        setAffichageJeu(div, resulat)    
    })
}