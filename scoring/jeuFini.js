let jeuFini = false

export function getJeuFini(){
    return jeuFini
}

export function jeuFin(){
    jeuFini = true
}

export function jeuPasFini(){
    jeuFini = false
}