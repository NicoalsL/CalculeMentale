import { getScoreMultiplicateur } from "./difficulter";
let score = 0;

export function getScore() {
    return score;
}

export function perdreScore() {
    score--;
}

export function reinitialiserScore() {
    score = 0;
}

export function ajoutScore(typeOperation){
    // score = score + nbr;
    switch (typeOperation) {
        case "+" :
        console.log('+');
        score = score + (100 * getScoreMultiplicateur());
        break
        case "-" :
        console.log('-');
        score = score + (200 * getScoreMultiplicateur());
        break
        case "x" :
        console.log('x');
        score = score + (500 * getScoreMultiplicateur());
        break
        }
}

// export function scored(){
//     score = score + ( 1 + 1 )
// }