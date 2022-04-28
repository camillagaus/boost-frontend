<script setup>
import Toggle from '@vueform/toggle'

const { $listify } = useNuxtApp()

// vi kan emitta att added har skett från coponenten form. 

const emit = defineEmits(["added", "deleted"])

const formData = ref({})

const submitHandler = async () => {
    const { name, price, description, image, vegetarian, allergies } = formData.value

    let allergyList;
    if (allergies) {
        allergyList = $listify(allergies)
    }
        

    const productData = {
        id: `${Math.floor(Math.random() * 10000) + 1000}`,
        name,
        price,
        description,
        image,
        vegetarian: vegetarian ?? false,
        allergies: allergyList ? allergyList : [],
    }

    try {
        await useFetch("/api/products", { method: "post", body: productData }) 
        // här emittar vi själva eventet, så får parent plocka upp det 
        emit("added")
        formData.value = {}
    } catch(error) {
        console.log(error)
    }
   
}



// v-model: 2 vägs data binding. Vi binder det som är i inputfältet till formData.description  
</script>

<template>
    <div class="w-1/3 ml-10">
        <form @submit.prevent="submitHandler">
            <div class="mb-4">
                <label class="block mb-2" for="name">Namn</label>
                <input 
                    v-model="formData.name"
                    class="h-12 shadow appearance-none border rounded w-full py-2 px-3"
                    id="name" 
                    type="text"
                    placeholder="Ex. Coca Cola"
                    required
                />
            </div>
            <div class="mb-4">
                <label class="block mb-2" for="description">Beskrivning</label>
                <input 
                    v-model="formData.description"
                    class="h-12 shadow appearance-none border rounded w-full py-2 px-3"
                    id="description" 
                    type="text"
                    placeholder="Ex. 50 cl PET-flaska"
                    required
                />
            </div>
             <div class="mb-4">
                <label class="block mb-2" for="image">Bild</label>
                <input 
                    v-model="formData.image"
                    class="h-12 shadow appearance-none border rounded w-full py-2 px-3"
                    id="image" 
                    type="text"
                    placeholder="Extern URL"
                    required
                />
            </div>
            <div>
                <label class="block mb-2" for="allergies">Allergier: </label>
                <input 
                    v-model="formData.allergies"
                    class="h-12 shadow appearance-none border rounded w-full py-2 px-3"
                    id="allergies" 
                    type="text"
                    placeholder="nötter, gluten, laktos"
                />
            </div>
            <div>
                <label class="block mb-2" for="price">Pris: </label>
                <input 
                    v-model="formData.price"
                    class="h-12 shadow appearance-none border rounded w-full py-2 px-3"
                    id="price"
                    type="text"
                    placeholder="20"
                />
            </div>
            <div>
                <label class="block mb-2" for="vegetarian">Vegetarisk?</label>
                <Toggle v-model="formData.vegetarian" />
            </div>

            <Button type="submit">Lägg till</Button>
        </form>
    </div>
</template>

