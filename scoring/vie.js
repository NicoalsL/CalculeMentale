let vie = 3;

export function getVie() {
    return vie;
}

export function perdreVie() {
    vie--;
}

export function reinitialiserVies() {
    vie = 3;
}

export function ajoutVie(){
    vie++;
}

export function afficherVie(div){
    const afiVie = document.createElement('h1')
    div[1].appendChild(afiVie)
    afiVie.classList = "classVie"
    afiVie.innerHTML = `Vie : ${getVie()}`
}

export function supprimerVie(div){
    const afiVie = document.querySelector(".classVie")
    div[1].removeChild(afiVie)
}