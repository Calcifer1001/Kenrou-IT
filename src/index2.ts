import e from "express"
import { getPrice } from "./coingecko"

document.getElementById("get_price_button")!.onclick = async function () {
    const tokenNameElem: HTMLInputElement = document.getElementById("token_name") as HTMLInputElement
    const tokenName: string = tokenNameElem.value
    alert(await getPrice(tokenName))
}

document.querySelector("#coin")?.addEventListener("change", async function (event: Event) {
    // event.preventDefault()

    let elem: HTMLSelectElement = document.getElementById("coin") as HTMLSelectElement
    let value: string = elem.options[elem.selectedIndex].value
    let text: string = elem.options[elem.selectedIndex].text
    console.log(`Value ${value} with text ${text}`)

    let tag: HTMLElement = document.getElementById("tag")!
    tag.innerHTML = text

    let valueElement: HTMLElement = document.getElementById("value")!

    switch (value) {
        case "1":
            let ethPrice = await getPrice("ethereum")
            valueElement.innerHTML = ethPrice.toString()
            break
        case "2":
            // Lógica para traer datos de base de datos
            // let prices = readFileSync("prices.json")
            let prices = [
                { name: "eth", date: "01/11/2022 19:47:12", price: "1620.07" },
                { name: "eth", date: "01/11/2022 19:52:12", price: "1620.17" },
                { name: "eth", date: "01/11/2022 19:57:12", price: "1620.01" }
            ]
            let displayPrices = []
            for (let i = 0; i < prices.length; i++) {
                // delete (prices[i]["name"])
                displayPrices.push({ date: prices[i].date, price: prices[i].price })
            }
            valueElement.innerHTML = JSON.stringify(displayPrices)
            break
        default:
            throw new Error(`There is no option ${value}`)
    }
})

