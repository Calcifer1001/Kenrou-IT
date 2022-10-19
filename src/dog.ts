import { Animal } from "./animal"

export let legs = 4

export class Dog extends Animal {

    constructor(legs: number, hairColor: string) {
        super(legs, "Hair", hairColor)
    }

    move() {
        console.log("Walks")
    }

    /**
     * Sum the legs of the dogs from array and the current dog
     * @param dogs array containing dogs we want to count legs from, adding the current dog, so don't add it
     * @return sum of dog legs
     */
    countLegs(dogs: Dog[]): number {
        let counter = this.legs
        for(let i = 0; i < dogs.length; i++) {
            counter += dogs[i].legs
        }
        return counter
    }
}