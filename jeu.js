import { setRandom } from './Random.js'
import { regle } from './regle.js'

export function setAffichageJeu(element, div, resulat, score, vies) {
    const calcul = document.createElement('h1')
    div[2].appendChild(calcul)
    calcul.classList = "classCalcul"

    let nombreUn = setRandom(10)
    let nombreDeux = setRandom(10)
    resulat = nombreUn + nombreDeux
    console.log(nombreUn)
    console.log(nombreDeux)
    console.log(resulat)

    const afiVie = document.createElement('h1')
    div[1].appendChild(afiVie)
    afiVie.classList = "classVie"
    afiVie.innerHTML = `Vie : ${vies}`

    calcul.innerHTML = `${nombreUn} + ${nombreDeux} = `
    const input = document.createElement('input')
    div[2].appendChild(input).focus()
    input.classList = "classInput"

    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            console.log(input)
            console.log(input.value)
            console.log(resulat)
            regle(element, div, resulat, score, vies, afiVie)
        }}
        )

    // const calcul = document.createElement('h1')
    // element.appendChild(calcul)
    // calcul.classList = "classCalcul"
}
