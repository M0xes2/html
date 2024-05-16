<template>
  <div class="card">
    <h1 class="card-header">{{ title }}</h1>
    Author: {{ author }}
    <h3>{{ description }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  author: String,
});
</script>
