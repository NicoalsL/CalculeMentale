
export function afficherCalcule(div){
    const calcul = document.createElement('p')
    calcul.classList = "classCalcul"
    div[2].appendChild(calcul)
    const input = document.createElement('input')
    input.setAttribute("type", "number")
    div[2].appendChild(input).focus()
    input.classList = "classInput"
}

export function supprimerCalcule(div){
    const calcul = document.querySelector('.classCalcul')
    const input = document.querySelector('.classInput')
    div[2].removeChild(calcul)
    div[2].removeChild(input)
}