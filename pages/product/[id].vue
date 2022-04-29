<script setup>

// useRoute används för att få ut information om var man är 

const route = useRoute(); 

const { data: product } = await useFetch(`https://boost-backend-camilla.herokuapp.com/food-items/${route.params.id}`)

definePageMeta({
    middleware: ["logger", "auth"]
})


</script>

<template>
<div class="flex justify-center">
    <Head>
        <Title>{{ product.name }}</Title>
        <Meta name="description" :content="product.description" />
    </Head>
    <div class="flex flex-col m-10 border rounded-lg shadow-md p-10 h-2/4 w-2/3 justify-center items-center">
        <h1 class="text-2xl font-bold">
            {{ product.name }}
        </h1> 
        <p class="">{{ product.description }}</p>
        <p>{{ product.vegetarian ? 'Vegetariskt' : '' }}</p>
        <ul class="flex flex-row">
            <li v-for="allergy in product.allergies" class="pr-3 text-zinc-500">{{ allergy }}</li>
        </ul>
        <img :src="product.image" :alt="product.name" class="w-1/3 flex self-center mt-10"/>
    </div>
    
</div>
   
</template>