export abstract class Animal {

    legs: number
    skinType: string
    skinColor: string

    constructor(legs: number, skinType: string, skinColor: string) {
        this.legs = legs
        this.skinType = skinType
        this.skinColor = skinColor
    }

    abstract move(): void
}