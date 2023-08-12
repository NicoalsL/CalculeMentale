import { setScore } from "./score"

export function regle(resulat, score){

    const classInput = document.querySelector(".classInput")
    const classVie = document.querySelector(".classVie")


    if( resulat == classInput.value ){
        score ++
        setScore()
    }else{
        if( vies == 1 ){
            vies = 3
            score = 0
            defaite++
            affichageDefaite()
    }
        else {
            vies--
            classVie.innerHTML = `Vie : ${vies}`
            classInput.value =[]
            setScore()
        }
    }
}