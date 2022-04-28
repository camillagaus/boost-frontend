import { readFileSync } from "fs"

export default defineEventHandler(() => {
    const rawdata = readFileSync("server/products.json")
    const data = JSON.parse(rawdata.toString())
    return data
    
})