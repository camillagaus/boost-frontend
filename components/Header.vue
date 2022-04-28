<script setup> 
    const { cart } = useCart()

    const cartCount = computed(() => {
        // iom att vi är inne i computed behöver vi inte göra ref. Varje gång cart ändras kommer
        // detta köras om. Computed gör att det blir reaktivt. 

        let count = 0
        cart.value.forEach(cartProduct => (count += cartProduct.quantity))
        return count

        // med reduce - returnerar ett värde av något, ex en siffra 
        // först argumentet är totalen, andra argument är nuvarande. 0 är startvärde för total. 
        // const cartCount = cart.value.reduce((total, cartProduct) => total += cartProduct.quantity, 0 )

    })


</script>

<template> 
    <header class="flex justify-between h-32 p-8 text-yellow-50 bg-slate-500">
        <NuxtLink to="/">
           <span class="text-6xl"> 😻 </span>
        </NuxtLink>
        <NuxtLink to="/cart">
           <span class="flex text-6xl">
               <span>🛒</span>
                  {{cartCount }}
            </span> 
        </NuxtLink>
        
    </header>
</template>