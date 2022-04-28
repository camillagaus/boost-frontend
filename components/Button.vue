<script setup>
    // små komponenter ska vara så dumma som möjligt, någon annan 
    // komponent ska plocka upp att en emit har hänt. En knapp ska inte ha 
    // koll på state. 



</script>

<template>
    <button class="bg-pink-600 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded">
        <slot />
    </button>
</template>