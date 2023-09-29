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
         score = score + (100 * 1.5);
        break
        case "-" :
        console.log('-');
        score = score + (200 * 1.5);
        break
        case "x" :
        console.log('x');
        score = score + (500 * 1.5);
        break
        }
}

export function scored(){
    score = score + ( 1 + 1 )
}