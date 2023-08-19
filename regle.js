import { pageScore } from "./etats/score"
import { getVie, perdreVie, supprimerVie } from "./scoring/vie"
import { ajoutScore } from "./scoring/score"
import { defaite } from "./etats/defaite"
import { rejouer } from "./etats/rejouer"
import { addTours, bonusTours } from "./scoring/tour"
import { addErreurs } from "./scoring/erreur"
import { supprimerCalcule } from "./scoring/calcule"

export function regle(div, resulat, typeOperation){
    
    console.log("resultat regle", resulat)
    const classInput = document.querySelector(".classInput")
    const classVie = document.querySelector(".classVie")

    bonusTours()

    if( resulat === parseInt(classInput.value)  ){
        addTours()
        switch (typeOperation) {
            case "+" :
                console.log('+');
                ajoutScore(100)
                break
            case "-" :
                console.log('-');
                ajoutScore(200)

                break
            case "x" :
                console.log('x');
                ajoutScore(500)

                break
        }

        console.log("bonne reponse")
        supprimerVie(div)
        supprimerCalcule(div)
        pageScore(div)

    }else{
        if( getVie() === 1 ){
            addTours()
            addErreurs()
            console.log("fini")
            // score = 0
            // defaite++
            defaite(div, calcul, input)
            rejouer(div, resulat)
        }
        else {
            addTours()
            addErreurs()
            console.log("mauvaise reponse")
            perdreVie()
            classVie.innerHTML = `Vie : ${getVie()}`
            classInput.value = []
            supprimerVie(div)
            supprimerCalcule(div)

            pageScore(div)
        }
    }
}