import { pageScore } from "./pages/score"
import { getVie, perdreVie, supprimerVie } from "./scoring/vie"
import { ajoutScore } from "./scoring/score"
import { defaite } from "./pages/defaite"
import { rejouer } from "./pages/rejouer"
import { addTours, bonusTours } from "./scoring/tour"
import { addErreurs } from "./scoring/erreur"
export function regle(div, resulat, calcul, input, typeOperation){
    
    console.log("affiche calcule", calcul)
    console.log("resultat regle", resulat)
    const classInput = document.querySelector(".classInput")
    const classVie = document.querySelector(".classVie")

    bonusTours()
    
    if( resulat === parseInt(classInput.value)  ){
        addTours()
        switch (typeOperation) {
            case "+" :
                console.log('+');
                ajoutScore(100)
                break
            case "-" :
                console.log('-');
                ajoutScore(200)

                break
            case "x" :
                console.log('x');
                ajoutScore(500)

                break
            
        }

        console.log("bonne reponse")
        supprimerVie(div)
        div[2].removeChild(calcul)
        div[2].removeChild(input)
        pageScore(div)

    }else{
        if( getVie() === 1 ){
            addTours()
            addErreurs()
            console.log("fini")
            // score = 0
            // defaite++
            defaite(div, calcul, input)
            rejouer(div, resulat)
        }
        else {
            addTours()
            addErreurs()
            console.log("mauvaise reponse")
            perdreVie()
            classVie.innerHTML = `Vie : ${getVie()}`
            classInput.value = []
            supprimerVie(div)
            div[2].removeChild(calcul)
            div[2].removeChild(input)
            pageScore(div)
        }
    }
}