import { setAffichageJeu } from './jeu.js'

export function setDebut(div, resulat) {

    const boutonCommencer = document.createElement('button');
    div[2].appendChild(boutonCommencer)
    boutonCommencer.innerHTML = "Jouer"
    boutonCommencer.classList = "jouer"

    boutonCommencer.addEventListener('click', function(){

        div[2].removeChild(boutonCommencer)

        setAffichageJeu(resulat)

    })
    }
