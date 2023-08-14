import { setRandom } from '../scoring/Random.js'
import { regle } from '../regle.js'
import { afficherVie } from '../scoring/vie.js'
export function setAffichageJeu(resulat) {

    const div = document.querySelectorAll('#div div')
    console.log("div", div)
    const calcul = document.createElement('h1')
    div[2].appendChild(calcul)
    calcul.classList = "classCalcul"

    let nombreUn = setRandom(10)
    let nombreDeux = setRandom(10)
    resulat = nombreUn + nombreDeux

    console.log(resulat)
    afficherVie(div)

    calcul.innerHTML = `${nombreUn} + ${nombreDeux} = `
    const input = document.createElement('input')
    div[2].appendChild(input).focus()
    input.classList = "classInput"

    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            console.log(input.value)

            regle(div, resulat, calcul, input)
        }}
        )
}
