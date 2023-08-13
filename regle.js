import { pageScore } from "./pages/score"
import { getVie, perdreVie, supprimerVie } from "./scoring/vie"
import { ajoutScore } from "./scoring/score"
import { defaite } from "./pages/defaite"
export function regle(element, div, resulat, calcul, input){
    
    console.log("affiche calcule", calcul)

    const classInput = document.querySelector(".classInput")
    const classVie = document.querySelector(".classVie")


    if( resulat === parseInt(classInput.value)  ){
        console.log("bonne reponse")
        ajoutScore()
        supprimerVie(div)
        div[2].removeChild(calcul)
        div[2].removeChild(input)
        pageScore(element, div )
        // setAffichageJeu(element, div, resulat)
        // setAffichageJeu(element, div)
    }else{
        if( getVie() === 1 ){
            console.log("fini")
            // score = 0
            // defaite++
            defaite()
        }
        else {
            console.log("mauvaise reponse")
            perdreVie()
            classVie.innerHTML = `Vie : ${getVie()}`
            classInput.value = []
            supprimerVie(div)
            div[2].removeChild(calcul)
            div[2].removeChild(input)
            pageScore(element, div)
        }
    }
}