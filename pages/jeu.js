import { setRandom } from '../scoring/Random.js'
import { regle } from '../regle.js'
import { afficherVie } from '../scoring/vie.js'
import { getArithmétique } from '../scoring/arithmétique.js'
import { calculeTrue } from '../scoring/valider.js'
import { afficherCalcule } from '../scoring/calcule.js'
import { temps, affichageChronos, getChronos, daffichagerChronos } from '../scoring/chronos.js'
export function setAffichageJeu( resulat ) {

    const div = document.querySelectorAll('#div div')
    console.log("div", div)
    afficherCalcule(div)
    // const { typeOperation } = getArithmétique(resulat); // Utilisez destructuring pour extraire le résultat et le type d'opération
    temps()
    .then(()=> {
        daffichagerChronos(div)
    }).catch((err)=>{console.error(err)})
    affichageChronos(div, getChronos())
    // let nombreUn = setRandom(10)
    // let nombreDeux = setRandom(10)
    // resulat = nombreUn + nombreDeux

    getArithmétique(resulat)
    console.log("aritme", getArithmétique(resulat))
    resulat = getArithmétique(resulat)
    console.log("resultat", resulat)
    afficherVie(div)


    const input = document.querySelector('.classInput')
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            console.log(input.value)
            calculeTrue()
            daffichagerChronos(div)
            regle(div, resulat.resulat, resulat.typeOperation)
        }}
        )
}
