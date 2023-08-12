import { setScore } from "./score"

export function regle(element, div,resulat, score, vies, afiVie){

    const classInput = document.querySelector(".classInput")
    const classVie = document.querySelector(".classVie")


    if( resulat == classInput.value ){
        score ++

        console.log(element)
        console.log(div)
        div[1].removeChild(afiVie)
        setScore(element, div, vies , score)
    }else{
        if( vies == 1 ){
            vies = 3
            score = 0
            defaite++
            affichageDefaite()
    }
        else {
            console.log("vie--")
            vies--
            classVie.innerHTML = `Vie : ${vies}`
            classInput.value = []
            setScore(element, div, vies , score)
        }
    }
}