export function setScore(element){
    const jeux = document.querySelector(".contenaire")
    jeux.classList.remove("bonneReponse")
    const div = document.querySelectorAll(".contenaire div")
    const ligneScore = document.createElement('h1')
    element.appendChild(ligneScore)
    ligneScore.classList = "classLigneScore"
    ligneScore.innerHTML =`Score: ${score}`

    tempsScore()

    setTimeout(() =>{
        element.removeChild(ligneScore)
    },1000)
}