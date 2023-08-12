import { setAffichageJeu } from './jeu.js'

export function setDebut(element, div, resulat, score) {

    const boutonCommencer = document.createElement('button');
    div[2].appendChild(boutonCommencer)
    boutonCommencer.innerHTML = "Jouer"
    boutonCommencer.addEventListener('click', function(){

        div[2].removeChild(boutonCommencer)
        setAffichageJeu(element, div, resulat, score)


    })
    }
