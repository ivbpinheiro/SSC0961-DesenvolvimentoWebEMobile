<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="logo do icmc - usp">
        </h1>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
const BarraLateral = defineComponent({
    name: 'BarraLateral'
});

export default BarraLateral;
</script>

<style scoped>
header {
    padding: 1.5rem;
    background: #0d3b66;
    height: 100vh;    
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}

img {
    width: 35%;
    height: auto;
    border-radius: 100%;
}

h1 {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>