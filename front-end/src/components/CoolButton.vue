<script setup>
import { ref } from 'vue'

const count = ref("a")
</script>

<template>
  <button @click="count+=`a`">You clicked me {{ count }} times.</button>
</template>