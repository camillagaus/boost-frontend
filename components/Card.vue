<script setup>

// klicka på elementet eller komponenten. Om man har klick eventet på
// componenten behöver man inte emitta event till något. 
// Om man skulle klicka på elementet skulle vi behöva emitta till Card. 

// vår prop product har ett id som vi använder i urlen. När man har en variabel i en url 
// måste man använda v-bind som förkortas : 
const props = defineProps({
    product: Object
})

const emit = defineEmits(["deleted"])

//Man måste hämta ut det från useCart return metod som man vill använda i respektive
// fil, så addToCart hämtar man ut "importerar"
const { addToCart } = useCart()

const addToList = () => {
    
    addToCart(props.product)
}

const removeFromList =  () => {
    console.log('removeFromList', props.product.id)
    useFetch(`/api/products`, { method: "delete", body: props.product.id }) 
    emit("deleted")


}

</script>

<template>
    <div class="border rounded-lg shadow-md m-2 p-4 lg:w-1/4 flex flex-col">
        <button @click="removeFromList" class="mt-4 flex justify-end mr-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button>
        <NuxtLink :to="`/product/${product.id}`" class="flex flex-col">
            <img class="md:h-60 object-cover flex self-center" width="200" height="200" :src="product.image" alt="xxx" loading="lazy"/>
            <h2 class="my-4 text-lx font-semibold text-2xl flex justify-between"> <span> {{ product.name }} </span> <span> {{ product.price }} SEK </span></h2>
            <p>{{ product.description }}</p>
            <p>innehåller: </p>
            <ul class="flex flex-row">
                <li v-for="allergy in product.allergies" class="pr-3 text-zinc-500">{{ allergy }} </li>
            </ul>
            <p> {{ product.vegetarian ? 'vegetarisk' : '' }}</p>
        </NuxtLink>    
        <Button @click="addToList" class="w-full mt-4" >Lägg till</Button>
        
        
    </div>
</template>

