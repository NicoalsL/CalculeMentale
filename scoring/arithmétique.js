import { setRandom } from "./Random";

export let multiplicateurUn = 10
export let multiplicateurDeux = 10

export function getMultiplicateurUn(){
    return multiplicateurUn
}

export function getMultiplicateurDeux(){
    return multiplicateurDeux
}

export function setMultiplicateurUn(nbr){
    multiplicateurUn = nbr
}

export function setMultiplicateurDeux(nbr){
    multiplicateurDeux = nbr
}
export function restatDifficulter(){
    multiplicateurUn = 10
    multiplicateurDeux = 10
}



export function getArtiRandom(){
    const nombre = Math.floor(Math.random() * 3)
    return nombre

}
export function getArithmétique(resulat){

    const random = Math.floor(Math.random() * 3)
    let typeOperation = "";

    const calcul = document.querySelector('.classCalcul')
    
    let nombreUn = 0;
    let nombreDeux = 0;
    switch (random) {
        case 0 :
            console.log('+');
            typeOperation = "+";

            nombreUn = setRandom(getMultiplicateurUn())
            nombreDeux = setRandom(getMultiplicateurDeux())
            resulat = nombreUn + nombreDeux
            
            calcul.innerHTML = `${nombreUn} + ${nombreDeux} = `
            return { nombreUn, nombreDeux, resulat, typeOperation }
    
        case 1 :
            console.log('-');
            typeOperation = "-";

            nombreUn = setRandom(getMultiplicateurUn())
            nombreDeux = setRandom(getMultiplicateurDeux())
            resulat = nombreUn - nombreDeux
            
            calcul.innerHTML = `${nombreUn} - ${nombreDeux} = `
            return { nombreUn, nombreDeux, resulat, typeOperation }

        case 2:
            console.log('x');
            typeOperation = "x";

            nombreUn = setRandom(getMultiplicateurUn())
            nombreDeux = setRandom(getMultiplicateurDeux())
            resulat = nombreUn * nombreDeux
            
            calcul.innerHTML = `${nombreUn} x ${nombreDeux} = `
            return { nombreUn, nombreDeux, resulat, typeOperation }

            default:
                console.log(`Sorry, we are out of ${random}.`);
              }
        }