import { getScore } from "../scoring/score"
import { setAffichageJeu } from "./jeu"

export function pageScore(div, regle){
    const ligneScore = document.createElement('p')
    
    div[1].appendChild(ligneScore)
    
    ligneScore.classList = "ligne-score"
    ligneScore.innerHTML =`Score: ${getScore()}`

    tempsScore(div, regle)

    const supInterval = setTimeout(() =>{

        div[1].removeChild(ligneScore)
    },1000)
}

function tempsScore(div, regle){
    const scoreSec = setInterval(() => { 

        setAffichageJeu(div, regle)
        clearInterval(scoreSec)
    }, 1100);
}


