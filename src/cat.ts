import { Animal } from "./animal";

export class Cat extends Animal {

    constructor(legs: number, hairColor: string) {
        super(legs, "Hair", hairColor)
    }

    move() {
        console.log("Walks")
    }

}