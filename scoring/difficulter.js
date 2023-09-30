import { getTours } from "./tour";
import { getMultiplicateurUn, getMultiplicateurDeux, setMultiplicateurUn, setMultiplicateurDeux } from "./arithmétique";

export let difficulter = 0;
export let scoreMultiplicateur = 1;

export function getScoreMultiplicateur(){
    return scoreMultiplicateur
}

export function setScoreMultiplicateur(nbr){
    scoreMultiplicateur = nbr
}

export function restatScoreMultiplicateur(){
    scoreMultiplicateur = 1
}


export function getDifficulter(){
    return difficulter;
}

export function setDifficulter(){
    switch (getTours()) {
        case 5:
            setMultiplicateurUn(30)
            setMultiplicateurDeux(10)
            break;
    
        case 10:
            setMultiplicateurUn(30)
            setMultiplicateurDeux(20)
            setScoreMultiplicateur(1.5)
            break;
        default:
            break;
    } 
}