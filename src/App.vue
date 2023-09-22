<template>
    <div class="container">
       <RouterView/>
    </div>
</template>

<style scoped>
.container {
    /* Limit container to not stretch all the way to the sides of viewport */
    max-width: 1000px;
    /* center */
    margin: 0 auto;
}
</style>