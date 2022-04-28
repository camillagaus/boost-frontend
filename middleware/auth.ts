export default defineNuxtRouteMiddleware((to, from) => {
    const isAuth = true

    // http://localhost:3000/product/1/?secretKey=123

    const hasSecretAccess = to.query.secretKey === "123"

    if(hasSecretAccess) {
        return
    }

    if (!isAuth) {
        return abortNavigation("NotAllowed")
    }
})