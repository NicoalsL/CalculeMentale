import { getErreurs } from "./erreur"
import { ajoutVie } from "./vie"
let tours = 1

export function getTours(){
    return tours
}

export function addTours(){
    tours++
     console.log("tours", tours)
}
export function reiniTours(){
    tours = 1
}

export function bonusTours(){
    if(getErreurs() === 0 && tours === 10){
        ajoutVie()
    }
}