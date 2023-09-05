import { regle } from '../regle.js'
import { afficherVie } from '../scoring/vie.js'
import { getArithmétique } from '../scoring/arithmétique.js'
import { calculeTrue } from '../scoring/valider.js'
import { afficherCalcule } from '../scoring/calcule.js'
import { reponseFalse, reponseTrue } from '../scoring/reponse.js'
import { barreTime,refreshChronos } from '../scoring/chronos.js'
import { getTours } from '../scoring/tour.js'
import { addTableauCalcule } from '../scoring/tableauCalcule.js'

export function setAffichageJeu( div, resulat ) {

    console.log(getTours())
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
                calculeTrue()
                // daffichagerChronos(div)
                addTableauCalcule(getTours(), resulat.nombreUn, resulat.nombreDeux, resulat.typeOperation, resulat.resulat, parseInt(input.value))
                regle( div, resulat.resulat, resulat.typeOperation)
            }}
            )
        }
}

