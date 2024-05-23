<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <Profile/>
    <pageSelect/>
  </div>
  <RouterView />
  
</template>

<style scoped>
  html{
    background-color: black;
  }
</style>
