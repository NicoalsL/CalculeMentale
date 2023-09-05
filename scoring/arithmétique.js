import { setRandom } from "./Random";
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

            nombreUn = setRandom(10)
            nombreDeux = setRandom(10)
            
            calcul.innerHTML = `${nombreUn} + ${nombreDeux} = `
            resulat = nombreUn + nombreDeux
            return { nombreUn, nombreDeux, resulat, typeOperation }
    
        case 1 :
            console.log('-');
            typeOperation = "-";

            nombreUn = setRandom(10)
            nombreDeux = setRandom(10)
            resulat = nombreUn - nombreDeux
            
            calcul.innerHTML = `${nombreUn} - ${nombreDeux} = `
            return { nombreUn, nombreDeux, resulat, typeOperation }

        case 2:
            console.log('x');
            typeOperation = "x";

            nombreUn = setRandom(10)
            nombreDeux = setRandom(10)
            resulat = nombreUn * nombreDeux
            
            calcul.innerHTML = `${nombreUn} x ${nombreDeux} = `
            return { nombreUn, nombreDeux, resulat, typeOperation }

           default:
                console.log(`Sorry, we are out of ${random}.`);
              }
        }