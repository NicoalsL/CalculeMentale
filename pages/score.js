import { getScore } from "../scoring/score"
import { setAffichageJeu } from "./jeu"
export function pageScore(element, div){

    const ligneScore = document.createElement('h1')
    div[1].appendChild(ligneScore)

    ligneScore.classList = "classLigneScore"
    ligneScore.innerHTML =`Score: ${getScore()}`

    tempsScore()

    setTimeout(() =>{
        div[1].removeChild(ligneScore)
    },1000)
    //  setAffichageJeu(element, div)

}
function tempsScore(element, div){
    const scoreSec = setInterval(() => {   
        setAffichageJeu(element, div)
        clearInterval(scoreSec)
    }, 1100);
}