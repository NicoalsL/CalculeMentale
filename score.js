export function setScore(element, div, newVies, score){
    console.log("score", newVies)

    const jeux = document.querySelector(".contenaire")
    // jeux.classList.remove("bonneReponse")
    // div[2].remove
    const ligneScore = document.createElement('h1')
    div[0].appendChild(ligneScore)

    ligneScore.classList = "classLigneScore"
    ligneScore.innerHTML =`Score: ${score}`

    // tempsScore()

    setTimeout(() =>{
        div[0].removeChild(ligneScore)
    },1000)
}