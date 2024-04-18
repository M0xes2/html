<template>
  <div class="card">
    <h1 class="card-header">{{ title }}</h1>
    Tags: {{ tags }}
    <h3>{{ description }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  tags: Array,
});
</script>
