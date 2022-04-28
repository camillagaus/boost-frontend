<script setup>

const { cart } = useCart()






</script>

<template>
    <div class="flex flex-col items-center">
        <div>
            <h1 class="text-2xl flex justify-center">Cart</h1>
        </div>

        <div v-for="(product, index) in cart" :key="index" class="flex mb-8 justify-start w-700">
            <div>
                <img :src="product.image" class="h-36 mr-7" />
            </div>
            <div class="flex flex-col justify-between"> 
                <div class="flex flex-col justify-center">
                    <h3 class="text-xl">{{ product.name }}</h3>
                    <p>{{ product.description }}</p>  
                    <p>Vegetarian? {{ product.vegetarian }}</p>
                    <ul class="flex">
                        <li v-for="allergy in product.allergies" class="mr-2"> {{ allergy }} </li>
                    </ul>
                </div>
                <div class="flex justify-between w-20">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                    <span>
                       {{ product.quantity }} 
                    </span> 
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                </div>
            </div>
           
            
        </div>
        <div v-if="!cart.length">
            <h2>Din kundvagn är tom</h2>
        </div>
    </div>
</template>