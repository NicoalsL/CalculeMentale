let tableauCalcule = []


export function getTableauCalcule(){
    return tableauCalcule
}

export function addTableauCalcule( tours, nombre1, nombre2, operateur, resultat, resultatJoueur){

    const reussi = resultat === resultatJoueur;

    const calculEtResultat = {
        tours,
        nombre1,
        nombre2,
        operateur,
        resultat,
        resultatJoueur,
        reussi,
      };
    tableauCalcule.push(calculEtResultat)
    console.log(getTableauCalcule())
}

export function reiniTableauCalcule(){
    tableauCalcule = []
}