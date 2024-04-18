<template>
  <div class="container">
    <PageSetup
      :title="page.name"
      :description="page.description"
      :tags="page.tags"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import PageSetup from "../components/Page.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const page = ref("");
async function getPages() {
  console.log(route.params.id);
  let res = await fetch(`http://localhost:3000/page/${route.params.id}`);

  let data = await res.json();
  page.value = data;
  console.log(page.value);
}

onMounted(() => {
  getPages();
});
</script>
