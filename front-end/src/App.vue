<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Profile from "@/components/Profile.vue";
import pageSelect from "@/components/pageSelect.vue";

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
