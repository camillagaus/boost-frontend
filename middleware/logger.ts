export default defineNuxtRouteMiddleware((to, from) => {
    console.log('console from named middleware')
    console.log('to', to)
    console.log('from', from)
})

