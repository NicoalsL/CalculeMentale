import { regle } from '../regle.js'
import { afficherVie } from '../scoring/vie.js'
import { getArithmétique } from '../scoring/arithmétique.js'
import { calculeTrue } from '../scoring/valider.js'
import { afficherCalcule } from '../scoring/calcule.js'
import { getReponse, reponseFalse, reponseTrue } from '../scoring/reponse.js'
import { chronos, getChronos, barreTime, daffichagerBarreTime, goChronos,refreshChronos } from '../scoring/chronos.js'
export function setAffichageJeu( resulat ) {

    const div = document.querySelectorAll('#div div')
    afficherCalcule(div)
    // temps()
    // .then(()=> {
    //     // daffichagerChronos(div)
    // }).catch((err)=>{console.error(err)})

    // affichageChronos(div, getChronos())
    refreshChronos()
    barreTime(div, getChronos())
    getArithmétique(resulat)
    resulat = getArithmétique(resulat)
    console.log("resultat", resulat)
    afficherVie(div)

    reponseFalse()

    const input = document.querySelector('.classInput')
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            reponseTrue()
            console.log("reponse : ", getReponse())
            console.log("CHRONO : ", chronos)
            console.log(input.value)
            calculeTrue()
            // daffichagerChronos(div)
            daffichagerBarreTime(div)
            regle(div, resulat.resulat, resulat.typeOperation)
        }}
        )
}

