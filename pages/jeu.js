import { setRandom } from '../scoring/Random.js'
import { regle } from '../regle.js'
import { afficherVie } from '../scoring/vie.js'
import { getArithmétique } from '../scoring/arithmétique.js'
export function setAffichageJeu( resulat ) {

    const div = document.querySelectorAll('#div div')
    console.log("div", div)
    const calcul = document.createElement('h1')
    calcul.classList = "classCalcul"
    div[2].appendChild(calcul)
    // const { typeOperation } = getArithmétique(resulat); // Utilisez destructuring pour extraire le résultat et le type d'opération

    // let nombreUn = setRandom(10)
    // let nombreDeux = setRandom(10)
    // resulat = nombreUn + nombreDeux
    getArithmétique(resulat)
    console.log("aritme", getArithmétique(resulat))
    resulat = getArithmétique(resulat)
    console.log("resultat", resulat)
    afficherVie(div)

    // calcul.innerHTML = `${nombreUn} + ${nombreDeux} = `
    const input = document.createElement('input')
    div[2].appendChild(input).focus()
    input.classList = "classInput"

    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            console.log(input.value)

            regle(div, resulat.resulat, calcul, input, resulat.typeOperation)
        }}
        )
}
