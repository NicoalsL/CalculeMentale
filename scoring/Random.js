export function setRandom(max) {
        let randomNumber;
        
        do {
            randomNumber = Math.floor(Math.random() * max);
        } while (randomNumber === 0);
        
        return randomNumber;
    }
    