const tableauCalcule = []


export function getTableauCalcule(){
    return tableauCalcule
}

export function addTableauCalcule(nombre1, nombre2, operateur, resultat, resultatJoueur){

    const reussi = resultat === resultatJoueur;

    const calculEtResultat = {
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