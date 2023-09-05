import { getScore } from "../scoring/score"
import { setAffichageJeu } from "./jeu"

export function pageScore(div, regle){
    console.log("affichage page score")
    const ligneScore = document.createElement('h1')
    div[1].appendChild(ligneScore)

    ligneScore.classList = "classLigneScore"
    ligneScore.innerHTML =`Score: ${getScore()}`

    tempsScore(div, regle)

    const supInterval = setTimeout(() =>{
        console.log("supression page score", supInterval)

        div[1].removeChild(ligneScore)
    },1000)
}

function tempsScore(div, regle){
    const scoreSec = setInterval(() => { 
        console.log(div)  
        console.log("interval score ", scoreSec)
        setAffichageJeu(div, regle)
        clearInterval(scoreSec)
    }, 1100);
}


