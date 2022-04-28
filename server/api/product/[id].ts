import { readFileSync } from "fs"

export default defineEventHandler((event) => {
    const rawdata = readFileSync("server/products.json")
    const data = JSON.parse(rawdata.toString())

    
    const productId = event.context.params.id
    
    const product = data.find((p) => p.id === productId)
    

    return  product;
    
})