import { readFileSync, writeFileSync } from "fs"

export default defineEventHandler(async(event) => {
    const productId = await useBody(event)

    const rawdata = readFileSync("server/products.json")
    const products = JSON.parse(rawdata.toString())
    
    const newProductList = products.filter(p => p.id !== productId)
    console.log('newProductList', newProductList)
    writeFileSync("server/products.json", JSON.stringify(newProductList))
})