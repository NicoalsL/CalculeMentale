import { setAffichageJeu } from "./jeu";
import { reinitialiserScore } from "../scoring/score"; 
import { reinitialiserVies } from "../scoring/vie";
import { getScore } from "../scoring/score";
import { addDefaite } from "../scoring/defaite";
import { jeuFin, jeuPasFini } from "../scoring/jeuFini";
export function rejouer(div, resulat){
    jeuFin()
    const button = document.createElement('button');
    button.innerText = "Rejouer"
    button.classList = "rejouer"
    div[2].appendChild(button)
    const h2 = document.createElement('h2')
    h2.innerHTML = `Score : ${getScore()} `
    div[1].appendChild(h2)

    button.addEventListener('click', () =>  {
        jeuPasFini()
        addDefaite()
        div[1].removeChild(h2)
        div[2].removeChild(button)
        reinitialiserScore()
        reinitialiserVies()
        setAffichageJeu(div, resulat)    
    })
}