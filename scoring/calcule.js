
export function afficherCalcule(div){
    console.log("creation calcule !!!!!!!!!", div)
    const calcul = document.createElement('h1')
    calcul.classList = "classCalcul"
    div[2].appendChild(calcul)

    const input = document.createElement('input')
    div[2].appendChild(input).focus()
    input.classList = "classInput"
}

export function supprimerCalcule(div){
    const calcul = document.querySelector('.classCalcul')
    const input = document.querySelector('.classInput')


    div[2].removeChild(calcul)
    div[2].removeChild(input)
}