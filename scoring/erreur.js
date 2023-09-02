let erreur = 0

export function getErreurs(){
    return erreur
}

export function addErreurs(){
    erreur++
    console.log("erreur", erreur)
}