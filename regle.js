import { setScore } from "./score"
import { setAffichageJeu } from "./jeu"
export function regle(element, div, resulat, score, newVies, afiVie, calcul, input){
    console.log("regle", newVies)
    const classInput = document.querySelector(".classInput")
    const classVie = document.querySelector(".classVie")


    if( resulat == classInput.value ){
        score ++
        console.log("bonne reponse")

        console.log(element)
        console.log(div)
        div[1].removeChild(afiVie)
        div[2].removeChild(calcul)
        div[2].removeChild(input)
        setScore(element, div, newVies , score)
        setAffichageJeu(element, div, resulat, score, newVies)
    }else{
        if( newVies == 1 ){
            console.log("fini")
            // newVies = 3
            score = 0
            defaite++
            affichageDefaite()
        }
        else {
            console.log("mauvaise reponse")
            newVies --
            console.log("vie--", newVies)
            classVie.innerHTML = `Vie : ${newVies}`
            classInput.value = []
            setScore(element, div, newVies, score)
        }
    }
}