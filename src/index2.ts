import { getPrice } from "./coingecko"

document.getElementById("get_price_button")!.onclick = async function() {
    const tokenNameElem: HTMLInputElement = document.getElementById("token_name") as HTMLInputElement
    const tokenName: string = tokenNameElem.value
    alert(await getPrice(tokenName))

}

