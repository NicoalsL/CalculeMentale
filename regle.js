import { pageScore } from "./etats/score"
import { getVie, perdreVie, supprimerVie, afficherVie } from "./scoring/vie"
import { ajoutScore } from "./scoring/score"
import { defaite } from "./etats/defaite"
import { rejouer } from "./etats/rejouer"
import { addTours, bonusTours } from "./scoring/tour"
import { addErreurs } from "./scoring/erreur"
import { supprimerCalcule } from "./scoring/calcule"
import { getChronos, daffichagerBarreTime } from "./scoring/chronos"
import { getReponse } from "./scoring/reponse"

export function regle(div, resulat, typeOperation){
    

    const classInput = document.querySelector(".classInput")
    const classVie = document.querySelector(".classVie")

    bonusTours()

    if(getReponse() ==  true){
        console.log("REPONSE : ", getReponse())
    }

        if( resulat === parseInt(classInput.value)){
            addTours()
            
            ajoutScore(typeOperation)

            // switch (typeOperation) {
            // case "+" :
            // console.log('+');
            // ajoutScore(100)
            // break
            // case "-" :
            // console.log('-');
            // ajoutScore(200)
            // break
            // case "x" :
            // console.log('x');
            // ajoutScore(500)
            // break
            // }

        supprimerVie(div)
        supprimerCalcule(div)
        daffichagerBarreTime(div)
        pageScore(div)

        }else{
            console.log("Mauvaise reponse", "chrono", getChronos())
            if( getVie() === 0 ){
                addTours()
                addErreurs()
                console.log("fini")
                // score = 0
                // defaite++
                defaite(div)
                rejouer(div, resulat)
            } else {
                addTours()
                addErreurs()
                perdreVie()
                console.log("aaaaaa")

                classInput.value = []
                supprimerVie(div)
                supprimerCalcule(div)
                daffichagerBarreTime(div)
                pageScore(div)
            }
        }
}