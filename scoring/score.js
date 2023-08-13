let score = 0;

export function getScore() {
    return score;
}

export function perdreScore() {
    score--;
}

export function reinitialiserScore() {
    score = 3;
}

export function ajoutScore(){
    score++;
}