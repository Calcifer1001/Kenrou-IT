// import { appendFile, appendFileSync, exists, existsSync, mkdirSync, readFile, readFileSync, renameSync, rmSync, unlink, unlinkSync, writeFile, writeFileSync } from "fs";

// const fileDir = "src/test.txt"
// const newDir = "src1/test/test2/test3"
// const newDirBase = "src1/test"
// const newDirBaseRename = "src1/test1"

// writeFileSync(fileDir, "Hello world\n")
// appendFileSync(fileDir, "Goodbye")

// console.log("File exists?", existsSync(fileDir))
// readFile(fileDir, 'utf8', function(err, data) {
//     if(err) {
//         console.error(err)
//         return
//     }

//     const splittedArray = data.split("\n")
//     splittedArray.splice(1, 0, "Good afternoon")
//     const newFileContent = splittedArray.join("\n")
//     writeFileSync(fileDir, newFileContent)

//     unlinkSync(fileDir)

//     console.log("File exists?", existsSync(fileDir))
// })

// if(!existsSync(newDir)) {
//     mkdirSync(newDir, { recursive: true })
// }

// renameSync(newDir, newDirBaseRename)

// rmSync(newDirBaseRename, { recursive: true, force: true })
// AltaBajaModificaion - CreateReadUpdateDelete
let elem = 10000000
let array: number[] = []
for(let i = 0; i < elem; i++) {
    array.push(Math.random())
}


let start = Date.now()
for1(array)
let end = Date.now()
console.log((end - start) + "ms")

start = Date.now()
for2en1(array)
end = Date.now()
console.log((end - start) + "ms")

/**
 * 
 * @param array 
 * @returns Suma todos los elementos del array dado
 */
function for1(array: number[]): number { // O(n**1)
    let result: number = 0
    for(let i = 0; i < array.length; i++) {
        result += array[i]
    }
    return result
}

/**
 * 
 * @param array 
 * @returns 
 */
function for2(array: number[]): number { // O(n**2)
    let result: number = 0

    for(let i = 0; i < array.length; i++) {
        let start = Date.now()
        for(let j = i+1; j < array.length; j++) {
            result += array[j]
        }
        let end = Date.now()
        console.log(`Partial ${i}: ${end - start}`)
    }
    return result
}

function for2en1(array: number[]): number {
    let result: number = 0
    for(let i = 0; i < array.length; i++) {
        result += array[i] * (array.length - i)
    }
    return result

}

// array.length=n
function test(array: number[]): number[] {
    for(let i = 0; i < array.length; i++) { // O((n**2-n) / 2)
        for(let j = i + 1; j < array.length; j++) { // O((n - i - 1))
            // i=0 array.length=6 1 2 3 4 5
            // i=1 array.length=6 2 3 4 5 
            array[i] += array[j] // O(1)
        }
        for(let j = i + 1; j < array.length; j++) { // O((n - i - 1))
            // i=0 array.length=6 1 2 3 4 5
            // i=1 array.length=6 2 3 4 5 
            array[i] += array[j] // O(1)
        }
    } 
    array[0] *= 2 
    return array 
}


// O(1)
// 0 + 1 + 2 +3 + 4 +5 + ... + 10000000000 = [(0 + 10000000000) * 10000000001] / 2
// O(n**p)
// O(2**n)
// O(ln(n))
// O(n * ln(n))


// O(n**2)
// O(2n + 2)

// f(x) = 2x
// g(x) = 2