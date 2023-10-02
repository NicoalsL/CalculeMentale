let tableauCalcule = []


export function getTableauCalcule(){
    return tableauCalcule
}

export function addTableauCalcule( tours, nombre1, nombre2, operateur, resultat, resultatJoueur, isDefaiteChrono){
    if( isNaN(resultatJoueur)){
        console.log("NAAANN")
        resultatJoueur = 0
    }

    const reussi = resultat === resultatJoueur;

    const calculEtResultat = {
        tours,
        nombre1,
        nombre2,
        operateur,
        resultat,
        resultatJoueur,
        reussi,
        isDefaiteChrono,
    };
    console.log(calculEtResultat)
    tableauCalcule.push(calculEtResultat)
    console.log(getTableauCalcule())
}

export function reiniTableauCalcule(){
    tableauCalcule = []
}