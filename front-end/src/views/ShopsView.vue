<template>
    <div></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const pages = ref("");
async function getPages() {
  let res = await fetch("http://localhost:3000");

  let data = await res.json();
  pages.value = data;
  console.log(data);
}

onMounted(() => {
  getPages();
});
</script>