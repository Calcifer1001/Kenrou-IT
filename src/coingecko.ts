import fetch from "cross-fetch";

const BASE_URL = "https://api.coingecko.com/api/v3/"


export async function getPrice(token: string): Promise<number> {
    let retries = 5
    let price = -1
    while(retries > 0 && price == -1) {
        try {
            const url = BASE_URL + `simple/price?ids=${token}&vs_currencies=usd`
            console.log(url)
            const res = await fetch(url)
            console.log(res)
            // const resString = JSON.stringify(res)
            price = (await res.json())[token].usd
        } catch(err) {
            retries--
            console.error(`Error getting price for token ${token}: ${err}`)
        }
    }
    console.log(price)
    return price
}
