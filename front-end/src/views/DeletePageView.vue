<template>
  <div>
    <h1>Delete Page</h1>
    <form name="page_form" @submit.prevent="pageDelete(id)">
      <input v-model="id" placeholder="Page ID" />
      <button type="submit">Delete Page</button>
    </form>
    <p>{{ response }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const id = ref("");
const response = ref("");
async function pageDelete(id) {
  console.log(id);
  let res = await fetch(`http://localhost:3000/remove/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  let data = await res.json();
  response.value = data;
  console.log(response);
}
</script>
