import { pageScore } from "./etats/score"
import { getVie, perdreVie, supprimerVie } from "./scoring/vie"
import { ajoutScore } from "./scoring/score"
import { defaite } from "./etats/defaite"
import { rejouer } from "./etats/rejouer"
import { addTours, bonusTours } from "./scoring/tour"
import { addErreurs } from "./scoring/erreur"
import { supprimerCalcule } from "./scoring/calcule"
import { getChronos, daffichagerBarreTime } from "./scoring/chronos"
import { getReponse, reponseFalse, reponseTrue } from "./scoring/reponse"
import { barreTime } from "./scoring/chronos"
export function regle(div, resulat, typeOperation){
    
    console.log("resultat regle", resulat)
    const classInput = document.querySelector(".classInput")
    const classVie = document.querySelector(".classVie")
    console.log("Valeur actuelle de chronos :", getChronos());

    bonusTours()

    if(getReponse() ==  true){
        
        console.log("REPONSE : ", getReponse())

    }

        if( resulat === parseInt(classInput.value)){
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
                   console.log("supprimer vie regle.js")

                   supprimerVie(div)
                   supprimerCalcule(div)
                   daffichagerBarreTime(div)
                   pageScore(div)
                        
                    }else{
                        console.log("Mauvaise reponse", "chrono", getChronos())
                        
                        if( getVie() <= 1 ){
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
                            console.log("mauvaise reponse")
                            perdreVie()
                            classVie.innerHTML = `Vie : ${getVie()}`
                            classInput.value = []
                            console.log("supprimer vie regle.js")

                            supprimerVie(div)
                            supprimerCalcule(div)
                            daffichagerBarreTime(div)
                            pageScore(div)
                        }
                    }
            }