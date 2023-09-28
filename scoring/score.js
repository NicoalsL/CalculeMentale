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

export function ajoutScore(nbr){
    score = score + nbr;
}

export function scored(){
    score = score + ( 1 + 1 )
}