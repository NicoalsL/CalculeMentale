import { getScore } from "../scoring/score"
import { setAffichageJeu } from "./jeu"

export function pageScore(div){
    console.log("affichage page score")
    const ligneScore = document.createElement('h1')
    div[1].appendChild(ligneScore)

    ligneScore.classList = "classLigneScore"
    ligneScore.innerHTML =`Score: ${getScore()}`

    tempsScore()

    const supInterval = setTimeout(() =>{
        console.log("supression page score", supInterval)

        div[1].removeChild(ligneScore)
    },1000)
}

function tempsScore(div){
    const scoreSec = setInterval(() => {   
        setAffichageJeu(div)
        clearInterval(scoreSec)
    }, 1100);
}


