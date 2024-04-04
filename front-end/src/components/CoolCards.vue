<script setup>
    const props = defineProps(['title', 'img'])
</script>

<template>
    <div class="card">
        <h2 class="card-header">{{ title }}</h2>
        <img class="card-img" :src=img>
    </div>
</template>

<style scoped>
.card{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: 26%;
    height: 60rem;
    background-color: whitesmoke;
    border: 1px solid black;
    margin: 10px auto;
}

.card-header{
    font-size: 50px;
}

.card-img{
    width: 60%;
    height: 75%;
    object-fit: cover;
}
</style>