import { supprimerCalcule } from "../scoring/calcule"
import { supprimerVie } from "../scoring/vie"
import { daffichagerBarreTime } from "../scoring/chronos"

export function defaite(div){
    console.log("supprimer vie defaite.js", div)
    supprimerVie()
    supprimerCalcule(div)
    daffichagerBarreTime(div)
}

export function defaiteChyronos(div){
    console.log("defaite chronos defaite.js")
    // console.log("supprimer vie defaite.js")
    // supprimerVie(div)
    // supprimerCalcule(div)
    // daffichagerBarreTime(div)
}