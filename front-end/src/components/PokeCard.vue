<template>
    <div>
      <h2>{{ pokemon.name }}</h2>
    </div>
    <h3>{{ id }}</h3>
  </template>
  
  <script setup>
  const props = defineProps({
    pokemon: Object,
    id: Number,
  });
  </script>
  
  <style scoped>
  img {
    width: 300px;
  }
  </style>