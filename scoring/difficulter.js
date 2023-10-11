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
        case 15:
            setMultiplicateurUn(40)
            setMultiplicateurDeux(30)
            setScoreMultiplicateur(2)
            break;

        case 20:
            setMultiplicateurUn(40)
            setMultiplicateurDeux(40)
            setScoreMultiplicateur(2.5)
            break;
        case 25:
            setMultiplicateurUn(50)
            setMultiplicateurDeux(40)
            setScoreMultiplicateur(3)
            break;
        case 30:
            setMultiplicateurUn(50)
            setMultiplicateurDeux(50)
            setScoreMultiplicateur(3.5)
            break;
        case 35:
            setMultiplicateurUn(60)
            setMultiplicateurDeux(50)
            setScoreMultiplicateur(4)
            break;
                default:
            break;
    } 
}