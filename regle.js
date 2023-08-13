import { setScore } from "./score"
import { setAffichageJeu } from "./jeu"
import { getVie, perdreVie } from "./scoring/vie"
export function regle(element, div, resulat, afiVie, calcul, input){
    
    console.log("affichevie", afiVie)
    console.log("affiche calcule", calcul)

    const classInput = document.querySelector(".classInput")
    const classVie = document.querySelector(".classVie")

    console.log(afiVie)
    console.log("affichevie", afiVie)

    if( resulat == classInput.value ){
        console.log("bonne reponse")
        console.log(afiVie)

        console.log(element)
        console.log(div)
        div[1].removeChild(afiVie)
        div[2].removeChild(calcul)
        div[2].removeChild(input)
        setScore(element, div )
        setAffichageJeu(element, div, resulat)
    }else{
        if( getVie() == 1 ){
            console.log("fini")
            // score = 0
            defaite++
            affichageDefaite()
        }
        else {
            console.log("mauvaise reponse")
            perdreVie()
            classVie.innerHTML = `Vie : ${getVie()}`
            classInput.value = []
            setScore(element, div, score)
        }
    }
}