import { regle } from '../regle.js'
import { afficherVie, supprimerVie } from '../scoring/vie.js'
import { getArithmétique } from '../scoring/arithmétique.js'
import { calculeTrue } from '../scoring/valider.js'
import { afficherCalcule, supprimerCalcule } from '../scoring/calcule.js'
import { getReponse, reponseFalse, reponseTrue } from '../scoring/reponse.js'
import { chronos, getChronos, barreTime, daffichagerBarreTime, goChronos,refreshChronos } from '../scoring/chronos.js'
import { pageScore } from './score.js'
import { perdreVie } from '../scoring/vie.js'
export function setAffichageJeu( div, resulat ) {

    // const div = document.querySelectorAll('#div div')
    afficherCalcule(div)

    refreshChronos()
    console.log("div jeu", div)

    getArithmétique(resulat)
    resulat = getArithmétique(resulat)
    console.log("resultat", resulat)
    afficherVie(div)
    
    barreTime(div, resulat)
    reponseFalse()
    
    if( getChronos() === 0 ){
        console.log("FIIINIII   JEUUX")
        // supprimerVie(div)
        // supprimerCalcule(div)
        // daffichagerBarreTime(div)
        // pageScore(div)
        // perdreVie() 
    } 



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

