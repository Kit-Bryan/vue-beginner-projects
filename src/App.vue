<script setup> // Composition API by typing 'setup'
import { ref } from "vue";
let count = ref(1000)

const addToCount = ()=> {
    count.value++
}

const subtractFromCount = ()=> {
    count.value--
}
</script>

<template>
    <main>
        <div>
            <h4>The current count is...</h4>
            <h1>
                {{ count }}
            </h1>
            <button @mousemove="subtractFromCount">-</button>
            <button @mousemove="addToCount">+</button>
        </div>
    </main>
</template>

<style scoped>
h4 {
    margin: 0;
}

main {
    background-color: aliceblue;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

div {
    text-align: center;
}

button {
    width: 150px;
    aspect-ratio: 1;
}
</style>
