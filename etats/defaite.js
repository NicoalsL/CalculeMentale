import { supprimerVie } from "../scoring/vie"
export function defaite(div, calcul, input){
    supprimerVie(div)
    div[2].removeChild(calcul)
    div[2].removeChild(input)
    // suppCalcule()
    // reCommence()

}