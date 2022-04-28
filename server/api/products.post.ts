import { readFileSync, writeFileSync } from "fs"

export default defineEventHandler(async(event) => {
    const product = await useBody(event)
   

    const rawdata = readFileSync("server/products.json")
    const products = JSON.parse(rawdata.toString())

    products.push(product)

    writeFileSync("server/products.json", JSON.stringify(products))
})