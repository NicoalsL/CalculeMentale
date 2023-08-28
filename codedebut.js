const jeux = document.querySelector(".contenaire")
const div = document.querySelectorAll(".contenaire div")
console.log(div[0])
console.log(div[1])
console.log(div[2])
console.log(div[3])

let score = 0
let defaite = 0
let vies = 3
let chronos = 11

let nbr1 = generateurNombre(100)
let nbr2 = generateurNombre(100)

let resulat = nbr1 + nbr2

let calculValider = false



commence()

function commence(){
    const boutonCommencer = document.createElement('button');
    div[2].appendChild(boutonCommencer)
    boutonCommencer.innerHTML = "Jouer"

    boutonCommencer.addEventListener('click', function(){

        affichageCalcule()

        div[2].removeChild(boutonCommencer)
    })
}

function affichageCalcule(){

    const affichageSec = document.createElement('h1')
    div[0].appendChild(affichageSec)
    affichageSec.classList = "classSec"
    console.log("TEMPS")

    const vie = document.createElement('h1')
    div[1].appendChild(vie)
    vie.classList = "classVie"
    vie.innerHTML = `Vie : ${vies}`

    const calcul = document.createElement('h1')
    div[2].appendChild(calcul)
    calcul.classList = "classCalcul"

    let nbr1 = generateurNombre(10)
    let nbr2 = generateurNombre(10)
    calcul.innerHTML = `${nbr1} + ${nbr2} = `
    temps()

    resulat = nbr1 + nbr2
    
    const input = document.createElement('input')
    div[2].appendChild(input).focus()
    input.classList = "classInput"

    input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        calculValider = true
        console.log("LIGNE65")

        regle()
        suppCalcule()

    }}
    )

}

function regle(){

    const classInput = document.querySelector(".classInput")
    const classVie = document.querySelector(".classVie")


    if( resulat == classInput.value ){
        score ++
        
        ////////////////////////////
        // jeux.classList.add("bonneReponse")
        affichageScore()
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
            affichageScore()
        }
    }
}
function affichageDefaite(){
    suppCalcule()
    reCommence()
}

function reCommence(){
    const btnrejouer = document.createElement('button');
    div[1].appendChild(btnrejouer)
    btnrejouer.innerHTML = "Rejouer"

    btnrejouer.addEventListener('click', function(){

        affichageCalcule()

        div[1].removeChild(btnrejouer)
    })
}

function suppCalcule(){
    console.log("supp")
    const div = document.querySelectorAll(".contenaire div")

    const classSec = document.querySelector(".classSec")
    div[0].removeChild(classSec)

    const classVie = document.querySelector(".classVie")
    div[1].removeChild(classVie)

    const classCalcul = document.querySelector(".classCalcul")
    div[2].removeChild(classCalcul)

    const classInput = document.querySelector(".classInput")
    div[2].removeChild(classInput)
}

function affichageScore(){

    const jeux = document.querySelector(".contenaire")
    jeux.classList.remove("bonneReponse")
    const div = document.querySelectorAll(".contenaire div")
    
    const ligneScore = document.createElement('h1')
    div[2].appendChild(ligneScore)
    ligneScore.classList = "classLigneScore"
    ligneScore.innerHTML =`Score: ${score}`

    tempsScore()

    setTimeout(() =>{
        div[2].removeChild(ligneScore)
    },1000)
}

function tempsScore(){
    const scoreSec = setInterval(() => {   

        affichageCalcule()

        clearInterval(scoreSec)
    }, 1100);
}

function generateurNombre(max) {
    return Math.floor(Math.random() * max)
}


function temps(){
    const interval = setInterval(() => {

        if(calculValider == true){
            console.log("Calcul valider")
            chronos = 11
            clearInterval(interval)
            calculValider = false
        }

        const classSec = document.querySelector(".classSec")
        console.log(classSec)
        chronos--
        console.log(`${chronos}s`)
        classSec.innerHTML=`${chronos}s`
        // if(chronos < 5){
        //     const jeux = document.querySelector(".contenaire")
        //     jeux.classList.toggle("bonneReponse")
        // }
        if(chronos === 0){
            console.log("Defaite chrono")
            chronos = 11
            regle()
            clearInterval(interval)
            suppCalcule()
        }
    }, 1000);
}

function gestionDuScore(){
    const nbr = Math.floor(Math.random() * 3)
    const signe = ""
    if(nbr == 1 ){
        signe = '+'
    }
    else if(nbr == 2){
        signe = "-"
    }
    else if(nbr == 3){
        signe = "x"
    }
    else if(nbr == 0){
        signe = "/"
    }
    console.log(nbr)
    console.log(signe)

}