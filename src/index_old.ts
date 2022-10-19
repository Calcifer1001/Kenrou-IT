import { EXAMPLE, reverse, reverse2 } from "./string-utils";
import { Dog, legs } from './dog'
import { getPrice } from "./coingecko";
import { Animal } from "./animal";
import { Cat } from "./cat";

// let map = {clave: "valor", clave2: 1, clave3: true, clave4: ["Hola"]}
// let key: string = "clave"


// let mapAsString: string = JSON.stringify(map)
// // console.log(mapAsString)
// // let remap = JSON.parse(mapAsString)
// // console.log(remap.clave2)

// interface Cabeza {
//     colorPelo: string
//     tipoPelo: string
//     colorOjos: string
//     tamanoNariz: string
//     hablar: Function
// }

// // interface Jugador {
// //     cabeza: Cabeza
// // }

// let cabeza: Cabeza = {
//     colorPelo: "rubio",
//     tipoPelo: "lacio",
//     colorOjos: "marron",
//     tamanoNariz: "grande",
//     hablar: function(thingToSay: string): void {
//         console.log(thingToSay)
//     }
// }

// console.log(cabeza)
// cabeza.hablar("Quiero saludar a todos mis fans")

// let dog: Dog = new Dog(4, "golden")
// console.log(dog.countLegs([dog]))

// let dog = new Dog(4, "brown")
// let cat = new Cat(4, "black")

// function printSkinColor(animal: Animal) {
//     console.log(animal.skinColor)
// }

// printSkinColor(dog)
// printSkinColor(cat)

// function a(resolve: Function) {
//     return setTimeout(resolve, 1000)
// }

// function delay(ms: number): Promise<string> {
//     return new Promise( (resolve: Function, reject: Function) => setTimeout(reject("Testing how a promise is rejected"), ms) );
// }

// async function run() {
//     let startTime = Date.now()
//     console.log("Start")
//     delay(1000).then( (res: string) => console.log(res)).catch(err => console.log(err))
//     console.log("Finish", Date.now() - startTime)
// }

// run()
// console.log("Sigo ejecutando una cosa")

// API = Application Programming Interface.
// GET - POST - PUT - DELETE

// getPrice("solana")

// var expresion = /(\w+)\s(\w+)/;
// var cadena = "John Smith";
// var nuevaCadena = cadena.replace(expresion, "$2, $1");
// console.log(nuevaCadena);


interface Tecla {
    estaEncendido: boolean
    prender(huella?: any): void
    apagar(): void
}

class Tecla implements Tecla {

    color: string

    constructor(color: string) {
        this.estaEncendido = false
        this.color = color
    }

    prender(huella: any): void {
        if(!this.estaEncendido) {
            this.estaEncendido = true
        } else {
            console.error("No se puede prender porque está prendida")
        }    
    }

    apagar(): void {
        if(this.estaEncendido) {
            this.estaEncendido = false
        } else {
            console.error(`La tecla color ${this.color == "blanco" ? this.color : "rojo"} no se puede prender porque está apagada`)
        }
    }

    
}

var t2: Tecla = investOnBitcoinAndThenBuyAWhiteTecla()
var t3: Tecla = new Tecla("negro")

function investOnBitcoinAndThenBuyAWhiteTecla(): Tecla {
    return new Tecla("blanco")
}

t2.apagar()
t3.apagar()

interface DaniStrategy {
    min: number
    max: number
    buyPercentile: number
    sellPercentile: number

    shouldBuy(currentValue: number): boolean
    shouldSell(currentValue: number): boolean
    setMinAndMax(values: number[]): void
}

class Strategy1 implements DaniStrategy {

    min: number = -1
    max: number = -1
    buyPercentile: number = 10;
    sellPercentile: number = 10

    constructor(values: number[], b: number, s: number) {
        this.setMinAndMax(values)
        this.buyPercentile = b
        this.sellPercentile = s
    }

    setMinAndMax(values: number[]): void {
        values.sort()
        this.min = values[0]
        this.max = values[values.length - 1]
    }

    shouldBuy(currentValue: number): boolean {
        const diff = this.max - this.min
        const buyMargin = diff * this.buyPercentile / 100
        return currentValue < this.min + buyMargin
    }

    shouldSell(currentValue: number): boolean {
        const diff = this.max - this.min
        const sellMargin = diff * this.sellPercentile / 100
        return currentValue > this.max - sellMargin
    }
}




