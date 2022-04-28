export default defineNuxtPlugin(() => {
    return {
        provide: {
            listify: (input) => {
               return input.split(",").map(a => a.trim())
            }
        }
    }
})