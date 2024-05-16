<template>
  <div class="container">
    <PageSetup
      :title="page.name"
      :description="page.description"
      :author="page.author"
    />
    <div v-if="page.author == userStore.getUser().username">
      <button @click="router.push(`/edit/${route.params.id}`)">Edit</button>
      <button @click="router.push(`/delete/${route.params.id}`)">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import PageSetup from "../components/Page.vue";
import { useUserStore } from "../stores/auth";
import { useRoute, useRouter } from "vue-router";

const userStore = useUserStore();
const route = useRoute();
const router = useRouter();
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
