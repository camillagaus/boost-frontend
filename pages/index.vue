<script setup>
import Toggle from '@vueform/toggle'

// useFetch returnerar en variabel data, som vi döper om till products direkt i fetchen 
// i Form: när eventet added emittas från child component plockar parent (index.js) upp det och kör en metod (refresh)
const { data: products, refresh } = await useFetch("/api/products")

// nuxt 2 har två metoder i Options API för datahämtning, fetch och asyncData, dessa kan a användas på 
// components i pages. asyncData kommer mergas in i ens data() i script. 

// För nuxt 3 composition API finns useFetch och useAsyncData och useLazyFetch och useLazyAsyncData

const filter = ref({})

const filteredProducts = computed(() => {
    // vi vill hämta en ny lista baserat på våra filters 
    return products.value.filter((p) => p.vegetarian === filter.value.vegetarian)
})

const allAllergies = products.value
    .map((p) => p.allergies)
    .filter((p) => p)
    .flat()

// set kan bara innehålla unika värden - ett fulhack. Man får tillbaka en lista med bara unika värden. 
// brackets: vi skapar en ny lista baserat på ett spreadat set, som vi fyller med allAllergies. 
const allergies = [...new Set(allAllergies)]

useHead({
    title: "Boost"
})

definePageMeta({
    middleware: "logger"
})

</script>

<template>
    <main>
        <div class="h-20 bg-slate-400 flex justify-center items-center">
            <div class="mx-4" v-for="allergy in allergies">
                <span class="mr-2"> {{ allergy }} </span>
                <Toggle />
            </div>
            <span>Vegetariskt: </span>
             <Toggle v-model="filter.vegetarian" />
        </div>
       
        <div class="flex flex-col flex-wrap space-x-4 justify-evenly md:flex-row">
            <Card v-for="(product, index) in filteredProducts" :product="product" :key="index" @deleted="refresh" />
        </div>
        <Form @added="refresh" />
    </main> 
</template>

<style src="@vueform/toggle/themes/default.css"></style>