import { regle } from '../regle.js'
import { afficherVie, supprimerVie } from '../scoring/vie.js'
import { getArithmétique } from '../scoring/arithmétique.js'
import { calculeTrue } from '../scoring/valider.js'
import { afficherCalcule, supprimerCalcule } from '../scoring/calcule.js'
import { getReponse, reponseFalse, reponseTrue } from '../scoring/reponse.js'
import { chronos, getChronos, barreTime, daffichagerBarreTime, goChronos,refreshChronos } from '../scoring/chronos.js'

export function setAffichageJeu( div, resulat ) {

    afficherCalcule(div)
    refreshChronos()

    getArithmétique(resulat)
    resulat = getArithmétique(resulat)
    afficherVie(div)
    barreTime(div, resulat)
    reponseFalse()
    

    const input = document.querySelector('.classInput')
    if( input !== null){

        input.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                reponseTrue()
                console.log("reponse : ", getReponse())
                console.log("CHRONO : ", chronos)
                console.log(input.value)
                calculeTrue()
                // daffichagerChronos(div)
                regle(div, resulat.resulat, resulat.typeOperation)
            }}
            )
        }
}

