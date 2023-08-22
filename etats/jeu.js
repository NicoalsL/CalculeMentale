import { regle } from '../regle.js'
import { afficherVie } from '../scoring/vie.js'
import { getArithmétique } from '../scoring/arithmétique.js'
import { calculeTrue } from '../scoring/valider.js'
import { afficherCalcule } from '../scoring/calcule.js'
import { temps, affichageChronos, getChronos, daffichagerChronos, barreTime, daffichagerBarreTime } from '../scoring/chronos.js'
export function setAffichageJeu( resulat ) {

    const div = document.querySelectorAll('#div div')
    afficherCalcule(div)
    // temps()
    // .then(()=> {
    //     // daffichagerChronos(div)
    // }).catch((err)=>{console.error(err)})

    // affichageChronos(div, getChronos())
    barreTime(div, getChronos())
    getArithmétique(resulat)
    resulat = getArithmétique(resulat)
    console.log("resultat", resulat)
    afficherVie(div)


    const input = document.querySelector('.classInput')
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            console.log(input.value)
            calculeTrue()
            // daffichagerChronos(div)
            daffichagerBarreTime(div)
            regle(div, resulat.resulat, resulat.typeOperation)
        }}
        )
}
